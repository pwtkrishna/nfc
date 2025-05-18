// components/ProductPageContent.tsx
"use client";

import { Product } from "@/types/product.interface";
import ProductDetails from "./ProductDetails";
import ProductDetailsImage from "./ProductDetailsImage";
import { useState } from "react";
import TrustedCarousel from "../TrustedCarousel";
import Faqs from "../Faqs";
import Testimonials from "../Testimonials";
import RecentProducts from "./RecentProducts";
import CartSidebar from "../cart/CartSidebar";

type ProductPageContentProps = {
    product: Product;
};

const ProductPageContent = ({ product }: ProductPageContentProps) => {
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

    return (
        <>
            <section>
                <div className="max-w-[1320px] w-full py-[35px] px-[20px] m-auto">
                    <div>
                        <div className="flex max-[729px]:flex-col">
                            <div className="flex flex-col product-image-wrapper">
                                <div className="block lg:sticky lg:top-[3rem]">
                                    <ProductDetailsImage
                                        product={product}
                                        selectedColor={selectedColor}
                                    />
                                    <div className="flex flex-wrap">
                                        <div
                                            className="m-[10px] border border-[#9E9FA759] bg-transparent rounded-[20px] py-[8px] flex flex-col items-center justify-center gap-1"
                                            style={{ width: "calc(33.33% - 20px)" }}
                                        >
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="46"
                                                    height="45"
                                                    viewBox="0 0 46 45"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M23 42.6742C20.9562 42.6742 18.9312 42.0742 17.3375 40.893L9.275 34.8742C7.1375 33.2805 5.46875 29.943 5.46875 27.2992V13.3492C5.46875 10.4617 7.5875 7.38672 10.3062 6.37422L19.6625 2.86797C21.5187 2.17422 24.4438 2.17422 26.3 2.86797L35.6562 6.37422C38.375 7.38672 40.4937 10.4617 40.4937 13.3492V27.2805C40.4937 29.943 38.825 33.2617 36.6875 34.8555L28.625 40.8742C27.0687 42.0742 25.0437 42.6742 23 42.6742ZM20.6562 5.51172L11.3 9.01797C9.70625 9.61797 8.3 11.643 8.3 13.368V27.2992C8.3 29.0805 9.55625 31.5742 10.9625 32.6242L19.025 38.643C21.1812 40.2555 24.8187 40.2555 26.9937 38.643L35.0562 32.6242C36.4812 31.5555 37.7188 29.0805 37.7188 27.2992V13.3492C37.7188 11.643 36.3125 9.61797 34.7187 8.99922L25.3625 5.49297C24.0875 5.04297 21.9125 5.04297 20.6562 5.51172Z"
                                                        fill="#A1DBEA"
                                                    ></path>
                                                    <path
                                                        d="M20.4877 26.6809C20.1314 26.6809 19.7752 26.5496 19.4939 26.2684L16.4752 23.2496C15.9314 22.7059 15.9314 21.8059 16.4752 21.2621C17.0189 20.7184 17.9189 20.7184 18.4627 21.2621L20.4877 23.2871L27.5564 16.2184C28.1002 15.6746 29.0002 15.6746 29.5439 16.2184C30.0877 16.7621 30.0877 17.6621 29.5439 18.2059L21.4814 26.2684C21.2002 26.5496 20.8439 26.6809 20.4877 26.6809Z"
                                                        fill="#04CEFA"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-base font-medium leading-[19.2px] text-center text-white">
                                                90-days refund
                                            </p>
                                        </div>
                                        {/* Other SVG sections unchanged */}
                                    </div>
                                </div>
                            </div>
                            <ProductDetails
                                product={product}
                                selectedColor={selectedColor}
                                onColorSelect={setSelectedColor}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <TrustedCarousel />
            <Testimonials reviews={product.reviews} />
            <Faqs />
            <RecentProducts />
            <CartSidebar />
        </>
    );
};

export default ProductPageContent;