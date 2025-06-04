export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  nfc_product_categories: {
    id: number;
    name: string;
    slug: string;
    icon: string;
    is_active: string;
  }[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
    designation?: string;
    avatar?: string;
  }[];
  sale_price?: number;
  regular_price: number;
  discount: number;
  offers: {
    id: number;
    title: string;
    description: string;
    image: string;
    discount: string;
    discount_type: string;
    start_date: string;
    end_date: string;
    is_active: string;
  };
  coupoun?: {
    title: string;
    status: string;
    startDate: string;
    endDate: string;
  }[];
  colors?: string[];
  packs?: string[];
  type?: string[];
  smart_cards?: string[];
  quantity: number;
  maxStock: number;
  product_galleries: {
    id: number;
    color?: string;
    type: "image" | "video";
    image: string;
  }[];
  brand: {
    id: number;
    brand_name: string;
    slug: string;
    brand_description: string;
    logo: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
    is_active: string;
  };
  rating: number;
  in_stock: string;
  sku: string;
  tags: { id: string; name: string; slug: string }[];
  card_material: string;
  card_type: string;
  is_customizable: boolean;
  tech_speces: {
    id: number;
    chip: string;
    memory: string;
    scan_range: string;
    compatible_with: string[];
  };
  card_image: string;
  card_back_image: string;
  createdAt: string;
  updatedAt: string;
}
