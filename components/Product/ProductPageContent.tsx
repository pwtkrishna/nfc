"use client";

import { Product } from "@/types/product.interface";
import ProductDetails from "./ProductDetails";
import ProductDetailsImage from "./ProductDetailsImage";
import { useState } from "react";

type ProductPageContentProps = {
    product: Product;
};

const ProductPageContent = ({ product }: ProductPageContentProps) => {
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
    return (
        <section>
            <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
                <div>
                    <div className="flex flex-wrap max-md:flex-col">
                        <ProductDetailsImage product={product} selectedColor={selectedColor} />
                        <ProductDetails product={product}
                            selectedColor={selectedColor}
                            onColorSelect={setSelectedColor} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPageContent;