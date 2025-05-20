"use client";

import type React from "react";

import { useEffect, useState } from "react";

import {
  CreditCard,
  ShoppingCart,
  Truck,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Shield,
  Info,
  Minus,
  Plus,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

// Mock product data

export default function CheckoutPage() {
  const {
    cart,
    // removeFromCart,
    // updateQuantity,
    // isCartOpen,
    // setIsCartOpen,
    // getCartTotal,
  } = useCartStore();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [cartItems, setCart] = useState(cart);

  console.log(cartItems);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
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

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/all-collection");
    }
  }, [cartItems, router]);

  const subtotal = cart.reduce(
    (total, item) =>
      item.product.salePrice
        ? total + item.product.salePrice * item.quantity
        : total + item.product.regularPrice * item.quantity,
    0
  );
  const shippingCost =
    shippingMethod === "express"
      ? 12.99
      : shippingMethod === "overnight"
      ? 24.99
      : 5.99;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal + shippingCost + tax - discount;

  const handleQuantityChange = (id: string, change: number) => {
    setCart(
      cartItems.map((item) => {
        if (item.product.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart(cartItems.filter((item) => item.product.id !== id));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "discount10") {
      setCouponApplied(true);
    }
  };

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  const handleSubmitOrder = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setOrderComplete(true);
    setStep(4);
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
                        console.log(item);

                        return (
                          <div
                            key={item.product.id}
                            className="flex items-center py-4 border-b border-gray-700"
                          >
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.title}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex-1">
                              <h3 className="text-base font-medium text-white">
                                {item.product.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-400">
                                Unit Price: Rs.&nbsp;{item.product.regularPrice}
                              </p>
                            </div>

                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.product.id, -1)
                                }
                                className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
                              >
                                <Minus className="h-4 w-4 text-white" />
                              </button>
                              <span className="mx-2 w-8 text-center text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.product.id, 1)
                                }
                                className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
                              >
                                <Plus className="h-4 w-4 text-white" />
                              </button>
                            </div>

                            <div className="ml-4 text-right">
                              <p className="text-base font-medium text-white">
                                Rs.&nbsp;
                                {(!item.product.salePrice
                                  ? item.product.regularPrice *
                                    item.product.quantity
                                  : item.product.salePrice *
                                    item.product.quantity
                                ).toFixed(2)}
                              </p>
                              <button
                                onClick={() =>
                                  handleRemoveItem(item.product.id)
                                }
                                className="mt-1 text-sm text-[rgb(4,206,250)] hover:underline cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center">
                        <Input
                          placeholder="Coupon Code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white px-3 py-1.5"
                        />
                        <Button
                          onClick={handleApplyCoupon}
                          className="ml-2 bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white px-3 py-1.5 cursor-pointer"
                          disabled={couponApplied}
                        >
                          {couponApplied ? "Applied" : "Apply"}
                        </Button>
                      </div>
                      {couponApplied && (
                        <p className="mt-2 text-sm text-green-400">
                          Coupon applied: 10% discount
                        </p>
                      )}
                      {couponCode && !couponApplied && (
                        <p className="mt-2 text-sm text-red-400">
                          Invalid coupon code. Try &quot;DISCOUNT10&quot;
                        </p>
                      )}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        onClick={nextStep}
                        className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white cursor-pointer px-3 py-3 flex items-center"
                        disabled={cart.length === 0}
                      >
                        Continue to Shipping
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </Card>
            )}

            {/* Step 2: Shipping Information */}
            {step === 2 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleShippingInfoChange}
                      placeholder="John"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleShippingInfoChange}
                      placeholder="Doe"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={handleShippingInfoChange}
                      placeholder="john@example.com"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingInfoChange}
                      placeholder="(555) 123-4567"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      placeholder="123 Main St"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      placeholder="San Francisco"
                      required
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingInfoChange}
                        placeholder="CA"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingInfoChange}
                        placeholder="94103"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Shipping Method</h3>
                  <RadioGroup
                    value={shippingMethod}
                    onValueChange={setShippingMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="standard"
                          id="standard"
                          className="border-[rgb(4,206,250)]"
                        />
                        <Label
                          htmlFor="standard"
                          className="ml-3 cursor-pointer"
                        >
                          <div>Standard Shipping</div>
                          <div className="text-sm text-gray-400">
                            5-7 business days
                          </div>
                        </Label>
                      </div>
                      <div className="font-medium">$5.99</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="express"
                          id="express"
                          className="border-[rgb(4,206,250)]"
                        />
                        <Label
                          htmlFor="express"
                          className="ml-3 cursor-pointer"
                        >
                          <div>Express Shipping</div>
                          <div className="text-sm text-gray-400">
                            2-3 business days
                          </div>
                        </Label>
                      </div>
                      <div className="font-medium">$12.99</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="overnight"
                          id="overnight"
                          className="border-[rgb(4,206,250)]"
                        />
                        <Label
                          htmlFor="overnight"
                          className="ml-3 cursor-pointer"
                        >
                          <div>Overnight Shipping</div>
                          <div className="text-sm text-gray-400">
                            Next business day
                          </div>
                        </Label>
                      </div>
                      <div className="font-medium">$24.99</div>
                    </div>
                  </RadioGroup>
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
            )}

            {/* Step 3: Payment Information */}
            {step === 3 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
                  Payment Information
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
                      <RadioGroupItem
                        value="credit"
                        id="credit"
                        className="border-[rgb(4,206,250)]"
                      />
                      <Label
                        htmlFor="credit"
                        className="ml-3 cursor-pointer flex-1"
                      >
                        <div>Credit / Debit Card</div>
                      </Label>
                      <div className="flex space-x-2">
                        <div className="w-10 h-6 bg-gray-700 rounded"></div>
                        <div className="w-10 h-6 bg-gray-700 rounded"></div>
                        <div className="w-10 h-6 bg-gray-700 rounded"></div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
                      <RadioGroupItem
                        value="paypal"
                        id="paypal"
                        className="border-[rgb(4,206,250)]"
                      />
                      <Label htmlFor="paypal" className="ml-3 cursor-pointer">
                        <div>PayPal</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "credit" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white pr-10"
                        />
                        <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input
                          id="expiration"
                          placeholder="MM/YY"
                          required
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">
                          <div className="flex items-center">
                            CVV
                            <Info className="ml-1 h-4 w-4 text-gray-400" />
                          </div>
                        </Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-4">
                      <Checkbox id="saveCard" />
                      <Label
                        htmlFor="saveCard"
                        className="text-sm text-gray-300"
                      >
                        Save card for future purchases
                      </Label>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the
                      <Link
                        href="/policies/terms-conditions"
                        className="text-[rgb(4,206,250)] hover:underline"
                      >
                        Terms and Conditions
                      </Link>
                      ,
                      <Link
                        href="/policies/returns-refunds"
                        className="text-[rgb(4,206,250)] hover:underline"
                      >
                        Return Policy
                      </Link>
                      , and
                      <Link
                        href="/policies/shipping-policy"
                        className="text-[rgb(4,206,250)] hover:underline"
                      >
                        Shipping Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-center p-4 rounded-lg bg-[rgba(4,206,250,0.05)] border border-[rgba(4,206,250,0.2)] mb-6">
                    <Shield className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      Your payment information is encrypted and secure. We never
                      store your full card details.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Shipping
                  </Button>

                  <Button
                    onClick={handleSubmitOrder}
                    className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>Complete Order</span>
                    )}
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 4: Order Confirmation */}
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

          {/* Order Summary Sidebar */}
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
                        {item.product.title}
                      </span>
                    </div>
                    <span className="text-white">
                      $
                      {(!item.product.salePrice
                        ? item.product.regularPrice
                        : item.product.salePrice * item.product.quantity
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

                {couponApplied && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount (10%)</span>
                    <span className="text-white">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-300">Shipping</span>
                  <span className="text-white">${shippingCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Tax</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
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
}
