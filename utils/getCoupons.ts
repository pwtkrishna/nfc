import { Product } from "@/types/product.interface";

type Threshold = { minQty: number; discount: number };

export function getApplicableDiscount(
  product: Product,
  quantity: number
): number {
  if (!product.coupoun) return 0;

  const now = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

  const thresholds: Threshold[] = product.coupoun
    .filter((c) => {
      const start = c.startDate;
      const end = c.endDate;
      return c.status === "active" && now >= start && now <= end;
    })
    .map((c) => {
      const match = c.title.match(/Buy\s+(\d+)\s+and\s+Get\s+(\d+)%/i);
      return match
        ? { minQty: parseInt(match[1]), discount: parseInt(match[2]) }
        : null;
    })
    .filter((t): t is Threshold => t !== null)
    .sort((a, b) => b.minQty - a.minQty);

  for (const t of thresholds) {
    if (quantity >= t.minQty) {
      return t.discount;
    }
  }

  return 0;
}
