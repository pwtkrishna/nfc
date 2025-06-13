"use client";

import { useEffect, useState } from "react";

import {
  CreditCard,
  ShoppingCart,
  Truck,
  CheckCircle,
  ChevronRight,
  // ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Button from "@/components/Button";
// import Input from "@/components/Input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CartItem, useCartStore } from "@/store/cartStore";
import { getApplicableDiscount } from "@/utils/getCoupons";
import Quantity from "@/components/Quantity";
import toast from "react-hot-toast";

const CheckOutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const [step] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderComplete] = useState(false);
  // const [cartItems] = useState(cart);

  const [shippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [shippingMethod] = useState("standard");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/all-collection");
    }
  }, [cart, router]);

  const subtotal = cart.reduce(
    (total, item) =>
      item.product.sale_price
        ? total + item.product.sale_price * item.quantity
        : total + item.product.regular_price * item.quantity,
    0
  );

  const total = subtotal;

  // const handleQuantityChange = (
  //   productId: number,
  //   variant: Variant,
  //   newQuantity: number
  // ) => {
  //   updateQuantity(productId, variant, newQuantity);
  // };

  const handleRemoveItem = (item: CartItem) => {
    removeFromCart(item);
  };

  // const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setShippingInfo({
  //     ...shippingInfo,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const nextStep = () => {
  //   window.scrollTo(0, 0);
  //   setStep(step + 1);
  // };

  // const prevStep = () => {
  //   window.scrollTo(0, 0);
  //   setStep(step - 1);
  // };

  const handleStripeCheckout = async () => {
    setPaymentError(null);
    // const requiredFields: (keyof typeof shippingInfo)[] = [
    //   "firstName",
    //   "lastName",
    //   "email",
    //   "address",
    //   "city",
    //   "state",
    //   "zipCode",
    //   "country",
    // ];

    // for (const key of requiredFields) {
    //   if (!shippingInfo[key]) {
    //     setPaymentError("Please fill in all required shipping details.");
    //     return;
    //   }
    // }

    setLoading(true);
    try {
      const payload = {
        nfc_cards: cart.map((item) => ({
          nfc_card_id: item.product.id,
          quantity: item.quantity,
        })),
        shipping_info: shippingInfo,
      };

      const res = await fetch(
        "https://nfc.premierwebtechservices.com/api/stripe-payments",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (res.ok && data.session_url) {
        window.location.href = data.session_url;
      } else {
        setPaymentError(
          data.message || "Failed to initiate payment. Please try again."
        );
      }
    } catch {
      setPaymentError("Payment error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1f2128] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
          <div className="h-1 w-20 bg-[rgb(4,206,250)] mx-auto mb-6"></div>
        </div>

        {!orderComplete && (
          <div className="mb-10">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              <div
                className={`flex flex-col items-center ${
                  step >= 1 ? "text-[rgb(4,206,250)]" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 1
                      ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)]"
                      : "bg-[#282a33] border-2 border-gray-600"
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Cart</span>
              </div>

              <div
                className={`w-16 md:w-24 h-1 ${
                  step >= 2 ? "bg-[rgb(4,206,250)]" : "bg-gray-600"
                }`}
              ></div>

              <div
                className={`flex flex-col items-center ${
                  step >= 2 ? "text-[rgb(4,206,250)]" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 2
                      ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)]"
                      : "bg-[#282a33] border-2 border-gray-600"
                  }`}
                >
                  <Truck className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Shipping</span>
              </div>

              <div
                className={`w-16 md:w-24 h-1 ${
                  step >= 3 ? "bg-[rgb(4,206,250)]" : "bg-gray-600"
                }`}
              ></div>

              <div
                className={`flex flex-col items-center ${
                  step >= 3 ? "text-[rgb(4,206,250)]" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 3
                      ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)]"
                      : "bg-[#282a33] border-2 border-gray-600"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center text-white">
                  <ShoppingCart className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
                  Your Shopping Cart
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">Your cart is empty</p>
                    <Link href="/">
                      <Button className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cart.map((item) => {
                        console.log(item.cartItemId);

                        return (
                          <div
                            // key={`${item.product.id}-${JSON.stringify(
                            //   item.variant
                            // )}`}
                            key={item.cartItemId}
                            className="flex items-center py-4 border-b border-gray-700"
                          >
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={item.product.card_image || "/avatar.webp"}
                                alt={item.product.name}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover object-center text-white"
                              />
                            </div>

                            <div className="ml-4 flex-1">
                              <h3 className="text-base font-medium text-white">
                                {item.product.name}
                              </h3>
                              <p className="mt-1 text-sm text-gray-400">
                                Unit Price: ${item.product.regular_price}
                              </p>
                              {(() => {
                                const discount = getApplicableDiscount(
                                  item.product,
                                  item.quantity
                                );
                                if (discount > 0) {
                                  return (
                                    <p className="mt-1.5 text-[12px] flex items-center text-[#ffffffbf]">
                                      <span>
                                        <svg
                                          className="icon icon-discount text-white w-3 h-3 mr-1.5 "
                                          viewBox="0 0 12 12"
                                        >
                                          <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M7 0h3a2 2 0 0 1 2 2v3a1 1 0 0 1-.3.7l-6 6a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l6-6A1 1 0 0 1 7 0m2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
                                            clipRule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                      {discount}% OFF Applied
                                    </p>
                                  );
                                }
                                return null;
                              })()}
                            </div>

                            <div className="flex items-center">
                              <Quantity
                                productId={item.product.id}
                                variant={item.variant}
                                quantity={item.quantity}
                                allowZero={true}
                                onQuantityChange={(
                                  productId,
                                  variant,
                                  newQuantity
                                ) => {
                                  if (newQuantity === 0) {
                                    removeFromCart(item);
                                    toast.success(
                                      `${item.product.name} removed from cart`
                                    );
                                  } else {
                                    updateQuantity(
                                      productId,
                                      variant,
                                      newQuantity
                                    );
                                    if (newQuantity > item.quantity) {
                                      toast.success(
                                        `Increased quantity for ${item.product.name}`
                                      );
                                    } else if (newQuantity < item.quantity) {
                                      toast.success(
                                        `Decreased quantity for ${item.product.name}`
                                      );
                                    }
                                  }
                                }}
                              />
                            </div>

                            <div className="ml-4 text-right">
                              <p className="text-base font-medium text-white">
                                $
                                {(!item.product.sale_price
                                  ? item.product.regular_price * item.quantity
                                  : item.product.sale_price * item.quantity
                                ).toFixed(2)}
                              </p>
                              <button
                                onClick={() => handleRemoveItem(item)}
                                className="mt-1 text-sm text-[rgb(4,206,250)] hover:underline cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex justify-end">
                      {/* <Button
                        onClick={nextStep}
                        className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white cursor-pointer px-3 py-3 flex items-center"
                        disabled={cart.length === 0}
                      >
                        Continue to Shipping
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button> */}
                      <Button
                        onClick={handleStripeCheckout}
                        className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white cursor-pointer px-3 py-3 flex items-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 mr-2 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                              ></path>
                            </svg>
                            Redirecting...
                          </>
                        ) : (
                          <>
                            Pay Now <ChevronRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </Card>
            )}

            {/* {step === 2 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center text-white">
                  <Truck className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white text-base" htmlFor="firstName">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleShippingInfoChange}
                      placeholder="John"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-base" htmlFor="lastName">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleShippingInfoChange}
                      placeholder="Doe"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-base" htmlFor="email">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={handleShippingInfoChange}
                      placeholder="john@example.com"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-base" htmlFor="phone">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingInfoChange}
                      placeholder="(555) 123-4567"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-white text-base" htmlFor="address">
                      Street Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      placeholder="123 Main St"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-base" htmlFor="city">
                      City
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      placeholder="San Francisco"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white text-base" htmlFor="state">
                        State
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingInfoChange}
                        placeholder="CA"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white text-base" htmlFor="zipCode">
                        ZIP Code
                      </Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingInfoChange}
                        placeholder="94103"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white placeholder:text-sm placeholder:text-[#999999] px-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Cart
                  </Button>

                  <Button
                    onClick={nextStep}
                    className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
                    disabled={
                      !shippingInfo.firstName ||
                      !shippingInfo.lastName ||
                      !shippingInfo.email ||
                      !shippingInfo.address ||
                      !shippingInfo.city ||
                      !shippingInfo.state ||
                      !shippingInfo.zipCode
                    }
                  >
                    Continue to Payment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            )} */}

            {/* {step === 3 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center text-white">
                  <CreditCard className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
                  Payment
                </h2>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-white">
                    Shipping Details
                  </h3>
                  <div className="text-gray-300 text-sm">
                    <div>
                      <span className="font-medium">Name:</span>{" "}
                      {shippingInfo.firstName} {shippingInfo.lastName}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>{" "}
                      {shippingInfo.email}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span>{" "}
                      {shippingInfo.phone}
                    </div>
                    <div>
                      <span className="font-medium">Address:</span>{" "}
                      {shippingInfo.address}, {shippingInfo.city},{" "}
                      {shippingInfo.state}, {shippingInfo.zipCode},{" "}
                      {shippingInfo.country}
                    </div>
                  </div>
                </div>

                {paymentError && (
                  <div className="mb-4 text-red-400 text-sm">
                    {paymentError}
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={prevStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white cursor-pointer px-3 py-3 flex items-center"
                    disabled={loading}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleStripeCheckout}
                    className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white cursor-pointer px-3 py-3 flex items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Redirecting...
                      </>
                    ) : (
                      <>
                        Pay Now <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            )} */}

            {step === 4 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-[rgba(4,206,250,0.1)] flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-[rgb(4,206,250)]" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Thank you for your purchase. Your order has been received
                    and is being processed. You will receive a confirmation
                    email shortly.
                  </p>

                  <div className="bg-[#1f2128] p-4 rounded-lg inline-block mb-6">
                    <p className="text-gray-300">Order Number</p>
                    <p className="text-xl font-bold text-[rgb(4,206,250)]">
                      #ORD-{Math.floor(100000 + Math.random() * 900000)}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <Link href="/">
                      <Button className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white w-full sm:w-auto">
                        Continue Shopping
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white w-full sm:w-auto"
                    >
                      View Order Details
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl sticky top-6">
              <h2 className="text-xl font-bold mb-6 text-white">
                Order Summary
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="bg-[#1f2128] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
                        {item.product.quantity}
                      </span>
                      <span className="text-sm text-gray-300 truncate max-w-[180px]">
                        {item.product.name}
                      </span>
                    </div>
                    <span className="text-white">
                      $
                      {(!item.product.sale_price
                        ? item.product.regular_price
                        : item.product.sale_price * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-gray-700" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4 bg-gray-700" />

              <div className="flex justify-between font-bold text-lg">
                <span className="text-white">Total</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>

              {step === 4 && (
                <div className="mt-6 bg-[rgba(4,206,250,0.05)] p-4 rounded-lg border border-[rgba(4,206,250,0.2)]">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Truck className="h-4 w-4 mr-2 text-[rgb(4,206,250)]" />
                    Estimated Delivery
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {shippingMethod === "overnight"
                      ? "Tomorrow"
                      : shippingMethod === "express"
                      ? "In 2-3 business days"
                      : "In 5-7 business days"}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
