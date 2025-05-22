import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 1. Get the token from the cookie
  const token = request.cookies.get("auth-token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Build the external API URL
  const slug = request.nextUrl.searchParams.get("slug");
  let url = "https://nfc.aardana.com/api/nfc-products/";
  if (slug) url += `?slug=${encodeURIComponent(slug)}`;

  // 3. Forward the token in the Authorization header
  const apiRes = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 4. Relay the response
  const data = await apiRes.json();
  return NextResponse.json(data, { status: apiRes.status });
}
