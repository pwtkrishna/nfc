import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://nfc.aardana.com/api/nfc-products/";
  const apiRes = await fetch(url, { method: "GET" });

  // Check content-type and status
  const contentType = apiRes.headers.get("content-type") || "";
  if (!apiRes.ok || !contentType.includes("application/json")) {
    const text = await apiRes.text();
    console.error("External API error:", apiRes.status, text);
    return NextResponse.json(
      { error: "Failed to fetch products", detail: text },
      { status: apiRes.status }
    );
  }

  const data = await apiRes.json();
  return NextResponse.json(data, { status: apiRes.status });
}
