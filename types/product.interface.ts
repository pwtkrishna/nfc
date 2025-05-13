export interface Product {
  id: string;
  slug: string;
  title: string;
  sectionName: string;
  description: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  salePrice: number;
  regularPrice: number;
  discount: number;
  offers: string[];
  colors: string[];
  quantity: number;
  image: string;
  imageGallery: { type: "image" | "video"; src: string }[];
  category: string;
  brand: string;
  rating: number;
  inStock: boolean;
  sku: string;
  tags: string[];
  cardMaterial: string;
  cardType: string;
  isCustomizable: boolean;
  techSpecs: {
    chip: string;
    memory: string;
    scanRange: string;
    compatibleWith: string[];
  };
  createdAt: string;
  updatedAt: string;
}
