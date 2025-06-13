import { NextRequest, NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */
// No @ts-expect-error needed here!
export async function GET(request: NextRequest, context: any) {
  const { slug } = await context.params;

  // Fetch all products
  const url = `https://nfc.premierwebtechservices.com/api/nfc-products/`;
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: apiRes.status }
    );
  }

  const result = await apiRes.json();
  const product = Array.isArray(result.data)
    ? result.data.find((p: { slug: string }) => p.slug === slug)
    : null;

  if (!product)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(product);
}
