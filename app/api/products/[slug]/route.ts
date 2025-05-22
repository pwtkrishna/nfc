// app/api/products/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Product } from "@/types/product.interface";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const token = request.cookies.get("auth-token")?.value;
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const response = await axios.get(
    "https://nfc.aardana.com/api/nfc-products/",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  // Specify Product type instead of any
  const products: Product[] = response.data.data;
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(product);
}
