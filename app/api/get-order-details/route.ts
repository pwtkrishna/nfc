import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  // Read the auth-token cookie
  const authToken = req.cookies.get("auth-token")?.value;

  if (!authToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    // Call the external API with the token
    const response = await axios.get(
      "https://nfc.aardana.com/api/get-user-order-details",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return NextResponse.json(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.response?.data || "Failed to fetch order details" },
      { status: error?.response?.status || 500 }
    );
  }
}
