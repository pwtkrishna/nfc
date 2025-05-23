import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://nfc.aardana.com/api/nfc-products/";

  const apiRes = await fetch(url, { method: "GET" });

  const data = await apiRes.json();
  return NextResponse.json(data, { status: apiRes.status });
}
