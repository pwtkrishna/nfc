/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Not authenticated" },
      { status: 401 }
    );
  }

  try {
    const cookieHeader = `auth-token=${token.value}`;
    console.log("Sending cookie:", cookieHeader);

    const response = await fetch("https://nfc.aardana.com/api/logout/me", {
      method: "GET",
      headers: {
        Cookie: cookieHeader,
      },
    });

    const backendText = await response.text();
    console.log("Backend response:", response.status, backendText);

    if (!response.ok) throw new Error(`Logout failed: ${backendText}`);

    // Clear the cookie
    const res = NextResponse.json({ success: true }, { status: 200 });
    res.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return res;
  } catch (err: any) {
    console.error("Logout error:", err.message);
    return NextResponse.json(
      { success: false, error: err.message || "Logout failed" },
      { status: 500 }
    );
  }
}
