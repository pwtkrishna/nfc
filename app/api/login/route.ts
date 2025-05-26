import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Call your backend login API
  const response = await axios.post("https://nfc.aardana.com/api/login", {
    username: body.email,
    user_type: "customer",
    password: body.password,
    login_type: "email",
  });

  const token = response.data.token;

  // Set HTTP-only cookie
  const res = NextResponse.json({ success: true });
  res.cookies.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
