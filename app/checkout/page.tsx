"use client";

import type React from "react";

import { useState } from "react";

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

// Mock product data
const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 89.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [cart, setCart] = useState(cartItems);

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

  // Calculate order summary
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
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

  const handleQuantityChange = (id: number, change: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
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

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setOrderComplete(true);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#1f2128] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
          <div className="h-1 w-20 bg-[rgb(4,206,250)] mx-auto mb-6"></div>
        </div>

        {/* Checkout Progress */}
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
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Cart Review */}
            {step === 1 && (
              <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
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
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center py-4 border-b border-gray-700"
                        >
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex-1">
                            <h3 className="text-base font-medium">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-400">
                              Unit Price: ${item.price.toFixed(2)}
                            </p>
                          </div>

                          <div className="flex items-center">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="ml-4 text-right">
                            <p className="text-base font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="mt-1 text-sm text-[rgb(4,206,250)] hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center">
                        <Input
                          placeholder="Coupon Code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                        />
                        <Button
                          onClick={handleApplyCoupon}
                          className="ml-2 bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
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
                        className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
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
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="bg-[#1f2128] text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
                        {item.quantity}
                      </span>
                      <span className="text-sm text-gray-300 truncate max-w-[180px]">
                        {item.name}
                      </span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-gray-700" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-300">Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4 bg-gray-700" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
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

// "use client";

// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import Airtable from "airtable";
// import { Vonage } from "@vonage/server-sdk";
// import {
//   CreditCard,
//   ShoppingCart,
//   Truck,
//   CheckCircle,
//   ChevronRight,
//   ChevronLeft,
//   Shield,
//   Minus,
//   Plus,
//   User,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import Button from "@/components/Button";
// import Input from "@/components/Input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";

// // Initialize services
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
// );
// Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY });
// const airtableBase = Airtable.base(
//   process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
// );
// const vonage = new Vonage({
//   apiKey: process.env.VONAGE_API_KEY || "",
//   apiSecret: process.env.VONAGE_API_SECRET || "",
// });

// // Mock product data (update for NFC card)
// const cartItems = [
//   {
//     id: 1,
//     name: "NFC Business Card",
//     price: 29.99,
//     quantity: 1,
//     image: "/nfc-card.png",
//   },
// ];

// const CheckoutForm: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [orderComplete, setOrderComplete] = useState(false);
//   const [cart, setCart] = useState(cartItems);
//   const [orderId, setOrderId] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   // Form states
//   const [shippingInfo, setShippingInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "United States",
//   });

//   const [profileInfo, setProfileInfo] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     twitter: "",
//   });

//   const [shippingMethod, setShippingMethod] = useState("standard");
//   const [paymentMethod, setPaymentMethod] = useState("credit");
//   const [couponCode, setCouponCode] = useState("");
//   const [couponApplied, setCouponApplied] = useState(false);

//   // Calculate order summary
//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const shippingCost =
//     shippingMethod === "express"
//       ? 12.99
//       : shippingMethod === "overnight"
//       ? 24.99
//       : 5.99;
//   const discount = couponApplied ? subtotal * 0.1 : 0;
//   const tax = (subtotal - discount) * 0.08;
//   const total = subtotal + shippingCost + tax - discount;

//   const handleQuantityChange = (id: number, change: number) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + change) }
//           : item
//       )
//     );
//   };

//   const handleRemoveItem = (id: number) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const handleApplyCoupon = () => {
//     if (couponCode.toLowerCase() === "discount10") {
//       setCouponApplied(true);
//     }
//   };

//   const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
//   };

//   const handleProfileInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     window.scrollTo(0, 0);
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     window.scrollTo(0, 0);
//     setStep(step - 1);
//   };

//   const handleSubmitOrder = async () => {
//     if (!stripe || !elements) return;
//     setLoading(true);

//     try {
//       // Create payment intent
//       const response = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: Math.round(total * 100) }),
//       });
//       const { clientSecret } = await response.json();

//       // Confirm payment
//       const cardElement = elements.getElement(CardElement);
//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: { card: cardElement! },
//       });

//       if (paymentResult.error) {
//         throw new Error(paymentResult.error.message);
//       }

//       // Store order in Airtable
//       const orderRecord = await airtableBase("Orders").create({
//         order_id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
//         user_email: shippingInfo.email,
//         shipping_info: JSON.stringify(shippingInfo),
//         profile_info: JSON.stringify(profileInfo),
//         status: "pending",
//       });
//       setOrderId(orderRecord.get("order_id"));

//       // Send confirmation email
//       await vonage.messages.send({
//         to: shippingInfo.email,
//         from: "NFC Card Shop",
//         subject: "Order Confirmation",
//         text: `Thank you for your order #${orderRecord.get(
//           "order_id"
//         )}. Please review your profile details at: https://your-site.com/review/${orderRecord.get(
//           "order_id"
//         )}`,
//       });

//       setOrderComplete(true);
//       setStep(6);
//     } catch (error) {
//       console.error("Error processing order:", error);
//       alert("Error processing order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#1f2128] text-white">
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
//           <div className="h-1 w-20 bg-[rgb(4,206,250)] mx-auto mb-6"></div>
//         </div>

//         {/* Checkout Progress */}
//         {!orderComplete && (
//           <div className="mb-10">
//             <div className="flex justify-between items-center max-w-3xl mx-auto">
//               {["Cart", "Shipping", "Profile", "Preview", "Payment"].map(
//                 (label, index) => (
//                   <React.Fragment key={label}>
//                     {index > 0 && (
//                       <div
//                         className={`w-16 md:w-24 h-1 ${
//                           step > index + 1
//                             ? "bg-[rgb(4,206,250)]"
//                             : "bg-gray-600"
//                         }`}
//                       ></div>
//                     )}
//                     <div
//                       className={`flex flex-col items-center ${
//                         step > index ? "text-[rgb(4,206,250)]" : "text-gray-500"
//                       }`}
//                     >
//                       <div
//                         className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                           step > index
//                             ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)]"
//                             : "bg-[#282a33] border-2 border-gray-600"
//                         }`}
//                       >
//                         {index === 0 && <ShoppingCart className="h-5 w-5" />}
//                         {index === 1 && <Truck className="h-5 w-5" />}
//                         {index === 2 && <User className="h-5 w-5" />}
//                         {index === 3 && <CheckCircle className="h-5 w-5" />}
//                         {index === 4 && <CreditCard className="h-5 w-5" />}
//                       </div>
//                       <span className="text-sm font-medium">{label}</span>
//                     </div>
//                   </React.Fragment>
//                 )
//               )}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Checkout Form */}
//           <div className="lg:col-span-2">
//             {/* Step 1: Cart Review */}
//             {step === 1 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <h2 className="text-xl font-bold mb-6 flex items-center">
//                   <ShoppingCart className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
//                   Your Shopping Cart
//                 </h2>
//                 {cart.length === 0 ? (
//                   <div className="text-center py-8">
//                     <p className="text-gray-400 mb-4">Your cart is empty</p>
//                     <Link href="/">
//                       <Button className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white">
//                         Continue Shopping
//                       </Button>
//                     </Link>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="space-y-4">
//                       {cart.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex items-center py-4 border-b border-gray-700"
//                         >
//                           <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
//                             <Image
//                               src={item.image}
//                               alt={item.name}
//                               width={80}
//                               height={80}
//                               className="h-full w-full object-cover object-center"
//                             />
//                           </div>
//                           <div className="ml-4 flex-1">
//                             <h3 className="text-base font-medium">
//                               {item.name}
//                             </h3>
//                             <p className="mt-1 text-sm text-gray-400">
//                               Unit Price: ${item.price.toFixed(2)}
//                             </p>
//                           </div>
//                           <div className="flex items-center">
//                             <button
//                               onClick={() => handleQuantityChange(item.id, -1)}
//                               className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
//                             >
//                               <Minus className="h-4 w-4" />
//                             </button>
//                             <span className="mx-2 w-8 text-center">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() => handleQuantityChange(item.id, 1)}
//                               className="p-1 rounded-full bg-[#1f2128] hover:bg-[rgba(4,206,250,0.1)]"
//                             >
//                               <Plus className="h-4 w-4" />
//                             </button>
//                           </div>
//                           <div className="ml-4 text-right">
//                             <p className="text-base font-medium">
//                               ${(item.price * item.quantity).toFixed(2)}
//                             </p>
//                             <button
//                               onClick={() => handleRemoveItem(item.id)}
//                               className="mt-1 text-sm text-[rgb(4,206,250)] hover:underline"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="mt-6">
//                       <div className="flex items-center">
//                         <Input
//                           placeholder="Coupon Code"
//                           value={couponCode}
//                           onChange={(e) => setCouponCode(e.target.value)}
//                           className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                         />
//                         <Button
//                           onClick={handleApplyCoupon}
//                           className="ml-2 bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                           disabled={couponApplied}
//                         >
//                           {couponApplied ? "Applied" : "Apply"}
//                         </Button>
//                       </div>
//                       {couponApplied && (
//                         <p className="mt-2 text-sm text-green-400">
//                           Coupon applied: 10% discount
//                         </p>
//                       )}
//                       {couponCode && !couponApplied && (
//                         <p className="mt-2 text-sm text-red-400">
//                           Invalid coupon code. Try "DISCOUNT10"
//                         </p>
//                       )}
//                     </div>
//                     <div className="mt-8 flex justify-end">
//                       <Button
//                         onClick={nextStep}
//                         className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                         disabled={cart.length === 0}
//                       >
//                         Continue to Shipping
//                         <ChevronRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </div>
//                   </>
//                 )}
//               </Card>
//             )}

//             {/* Step 2: Shipping Information */}
//             {step === 2 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <h2 className="text-xl font-bold mb-6 flex items-center">
//                   <Truck className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
//                   Shipping Information
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input
//                       id="firstName"
//                       name="firstName"
//                       value={shippingInfo.firstName}
//                       onChange={handleShippingInfoChange}
//                       placeholder="John"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input
//                       id="lastName"
//                       name="lastName"
//                       value={shippingInfo.lastName}
//                       onChange={handleShippingInfoChange}
//                       placeholder="Doe"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={shippingInfo.email}
//                       onChange={handleShippingInfoChange}
//                       placeholder="john@example.com"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                       id="phone"
//                       name="phone"
//                       value={shippingInfo.phone}
//                       onChange={handleShippingInfoChange}
//                       placeholder="(555) 123-4567"
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2 md:col-span-2">
//                     <Label htmlFor="address">Street Address</Label>
//                     <Input
//                       id="address"
//                       name="address"
//                       value={shippingInfo.address}
//                       onChange={handleShippingInfoChange}
//                       placeholder="123 Main St"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="city">City</Label>
//                     <Input
//                       id="city"
//                       name="city"
//                       value={shippingInfo.city}
//                       onChange={handleShippingInfoChange}
//                       placeholder="San Francisco"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="state">State</Label>
//                       <Input
//                         id="state"
//                         name="state"
//                         value={shippingInfo.state}
//                         onChange={handleShippingInfoChange}
//                         placeholder="CA"
//                         required
//                         className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="zipCode">ZIP Code</Label>
//                       <Input
//                         id="zipCode"
//                         name="zipCode"
//                         value={shippingInfo.zipCode}
//                         onChange={handleShippingInfoChange}
//                         placeholder="94103"
//                         required
//                         className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-8">
//                   <h3 className="text-lg font-medium mb-4">Shipping Method</h3>
//                   <RadioGroup
//                     value={shippingMethod}
//                     onValueChange={setShippingMethod}
//                     className="space-y-4"
//                   >
//                     <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
//                       <div className="flex items-center">
//                         <RadioGroupItem
//                           value="standard"
//                           id="standard"
//                           className="border-[rgb(4,206,250)]"
//                         />
//                         <Label
//                           htmlFor="standard"
//                           className="ml-3 cursor-pointer"
//                         >
//                           <div>Standard Shipping</div>
//                           <div className="text-sm text-gray-400">
//                             5-7 business days
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="font-medium">$5.99</div>
//                     </div>
//                     <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
//                       <div className="flex items-center">
//                         <RadioGroupItem
//                           value="express"
//                           id="express"
//                           className="border-[rgb(4,206,250)]"
//                         />
//                         <Label
//                           htmlFor="express"
//                           className="ml-3 cursor-pointer"
//                         >
//                           <div>Express Shipping</div>
//                           <div className="text-sm text-gray-400">
//                             2-3 business days
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="font-medium">$12.99</div>
//                     </div>
//                     <div className="flex items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
//                       <div className="flex items-center">
//                         <RadioGroupItem
//                           value="overnight"
//                           id="overnight"
//                           className="border-[rgb(4,206,250)]"
//                         />
//                         <Label
//                           htmlFor="overnight"
//                           className="ml-3 cursor-pointer"
//                         >
//                           <div>Overnight Shipping</div>
//                           <div className="text-sm text-gray-400">
//                             Next business day
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="font-medium">$24.99</div>
//                     </div>
//                   </RadioGroup>
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <Button
//                     onClick={prevStep}
//                     variant="outline"
//                     className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
//                   >
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Back to Cart
//                   </Button>
//                   <Button
//                     onClick={nextStep}
//                     className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                     disabled={
//                       !shippingInfo.firstName ||
//                       !shippingInfo.lastName ||
//                       !shippingInfo.email ||
//                       !shippingInfo.address ||
//                       !shippingInfo.city ||
//                       !shippingInfo.state ||
//                       !shippingInfo.zipCode
//                     }
//                   >
//                     Continue to Profile
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </Card>
//             )}

//             {/* Step 3: Profile Information */}
//             {step === 3 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <h2 className="text-xl font-bold mb-6 flex items-center">
//                   <User className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
//                   Profile Information
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="fullName">Full Name</Label>
//                     <Input
//                       id="fullName"
//                       name="fullName"
//                       value={profileInfo.fullName}
//                       onChange={handleProfileInfoChange}
//                       placeholder="John Doe"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={profileInfo.email}
//                       onChange={handleProfileInfoChange}
//                       placeholder="john@example.com"
//                       required
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input
//                       id="phone"
//                       name="phone"
//                       value={profileInfo.phone}
//                       onChange={handleProfileInfoChange}
//                       placeholder="(555) 123-4567"
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="linkedin">LinkedIn URL</Label>
//                     <Input
//                       id="linkedin"
//                       name="likedin"
//                       value={profileInfo.linkedin}
//                       onChange={handleProfileInfoChange}
//                       placeholder="https://linkedin.com/in/johndoe"
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="twitter">Twitter URL</Label>
//                     <Input
//                       id="twitter"
//                       name="twitter"
//                       value={profileInfo.twitter}
//                       onChange={handleProfileInfoChange}
//                       placeholder="https://twitter.com/johndoe"
//                       className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <Button
//                     onClick={prevStep}
//                     variant="outline"
//                     className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
//                   >
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Back to Shipping
//                   </Button>
//                   <Button
//                     onClick={nextStep}
//                     className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                     disabled={!profileInfo.fullName || !profileInfo.email}
//                   >
//                     Preview Profile
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </Card>
//             )}

//             {/* Step 4: Profile Preview */}
//             {step === 4 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <h2 className="text-xl font-bold mb-6 flex items-center">
//                   <CheckCircle className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
//                   Preview Your Profile
//                 </h2>
//                 <div className="bg-[#1f2128] p-6 rounded-lg">
//                   <h3 className="text-lg font-medium mb-4">Profile Details</h3>
//                   <p>
//                     <strong>Name:</strong> {profileInfo.fullName}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {profileInfo.email}
//                   </p>
//                   {profileInfo.phone && (
//                     <p>
//                       <strong>Phone:</strong> {profileInfo.phone}
//                     </p>
//                   )}
//                   {profileInfo.linkedin && (
//                     <p>
//                       <strong>LinkedIn:</strong>{" "}
//                       <a
//                         href={profileInfo.linkedin}
//                         className="text-[rgb(4,206,250)] hover:underline"
//                       >
//                         {profileInfo.linkedin}
//                       </a>
//                     </p>
//                   )}
//                   {profileInfo.twitter && (
//                     <p>
//                       <strong>Twitter:</strong>{" "}
//                       <a
//                         href={profileInfo.twitter}
//                         className="text-[rgb(4,206,250)] hover:underline"
//                       >
//                         {profileInfo.twitter}
//                       </a>
//                     </p>
//                   )}
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <Button
//                     onClick={prevStep}
//                     variant="outline"
//                     className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
//                   >
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Edit Profile
//                   </Button>
//                   <Button
//                     onClick={nextStep}
//                     className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                   >
//                     Continue to Payment
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </Card>
//             )}

//             {/* Step 5: Payment Information */}
//             {step === 5 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <h2 className="text-xl font-bold mb-6 flex items-center">
//                   <CreditCard className="mr-2 h-5 w-5 text-[rgb(4,206,250)]" />
//                   Payment Information
//                 </h2>
//                 <div className="mb-6">
//                   <h3 className="text-lg font-medium mb-4">Payment Method</h3>
//                   <RadioGroup
//                     value={paymentMethod}
//                     onValueChange={setPaymentMethod}
//                     className="space-y-4"
//                   >
//                     <div className="flex items-center p-4 rounded-lg border border-gray-700 bg-[#1f2128]">
//                       <RadioGroupItem
//                         value="credit"
//                         id="credit"
//                         className="border-[rgb(4,206,250)]"
//                       />
//                       <Label
//                         htmlFor="credit"
//                         className="ml-3 cursor-pointer flex-1"
//                       >
//                         <div>Credit / Debit Card</div>
//                       </Label>
//                       <div className="flex space-x-2">
//                         <div className="w-10 h-6 bg-gray-700 rounded"></div>
//                         <div className="w-10 h-6 bg-gray-700 rounded"></div>
//                         <div className="w-10 h-6 bg-gray-700 rounded"></div>
//                       </div>
//                     </div>
//                   </RadioGroup>
//                 </div>
//                 {paymentMethod === "credit" && (
//                   <div className="space-y-6">
//                     <div className="space-y-2">
//                       <Label>Card Information</Label>
//                       <div className="p-4 bg-[#1f2128] border border-gray-700 rounded-lg">
//                         <CardElement
//                           options={{
//                             style: {
//                               base: {
//                                 color: "#fff",
//                                 "::placeholder": { color: "#a0aec0" },
//                               },
//                             },
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2 mt-4">
//                       <Checkbox id="saveCard" />
//                       <Label
//                         htmlFor="saveCard"
//                         className="text-sm text-gray-300"
//                       >
//                         Save card for future purchases
//                       </Label>
//                     </div>
//                   </div>
//                 )}
//                 <div className="mt-8">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <Checkbox id="terms" required />
//                     <Label htmlFor="terms" className="text-sm text-gray-300">
//                       I agree to the{" "}
//                       <Link
//                         href="/policies/terms-conditions"
//                         className="text-[rgb(4,206,250)] hover:underline"
//                       >
//                         Terms and Conditions
//                       </Link>
//                       ,{" "}
//                       <Link
//                         href="/policies/returns-refunds"
//                         className="text-[rgb(4,206,250)] hover:underline"
//                       >
//                         Return Policy
//                       </Link>
//                       , and{" "}
//                       <Link
//                         href="/policies/shipping-policy"
//                         className="text-[rgb(4,206,250)] hover:underline"
//                       >
//                         Shipping Policy
//                       </Link>
//                     </Label>
//                   </div>
//                   <div className="flex items-center p-4 rounded-lg bg-[rgba(4,206,250,0.05)] border border-[rgba(4,206,250,0.2)] mb-6">
//                     <Shield className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
//                     <p className="text-sm text-gray-300">
//                       Your payment information is encrypted and secure.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <Button
//                     onClick={prevStep}
//                     variant="outline"
//                     className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white"
//                   >
//                     <ChevronLeft className="mr-2 h-4 w-4" />
//                     Back to Preview
//                   </Button>
//                   <Button
//                     onClick={handleSubmitOrder}
//                     className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
//                     disabled={loading || !stripe || !elements}
//                   >
//                     {loading ? (
//                       <span className="flex items-center">
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Processing...
//                       </span>
//                     ) : (
//                       <span>Complete Order</span>
//                     )}
//                   </Button>
//                 </div>
//               </Card>
//             )}

//             {/* Step 6: Order Confirmation */}
//             {step === 6 && (
//               <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl">
//                 <div className="text-center py-8">
//                   <div className="flex justify-center mb-6">
//                     <div className="w-16 h-16 rounded-full bg-[rgba(4,206,250,0.1)] flex items-center justify-center">
//                       <CheckCircle className="h-10 w-10 text-[rgb(4,206,250)]" />
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
//                   <p className="text-gray-300 mb-6 max-w-md mx-auto">
//                     Thank you for your purchase. Your order #{orderId} has been
//                     received. Please check your email to review your profile
//                     details.
//                   </p>
//                   <div className="bg-[#1f2128] p-4 rounded-lg inline-block mb-6">
//                     <p className="text-gray-300">Order Number</p>
//                     <p className="text-xl font-bold text-[rgb(4,206,250)]">
//                       #{orderId}
//                     </p>
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
//                     <Link href="/">
//                       <Button className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white w-full sm:w-auto">
//                         Continue Shopping
//                       </Button>
//                     </Link>
//                     <Button
//                       variant="outline"
//                       className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] hover:text-white w-full sm:w-auto"
//                     >
//                       View Order Details
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             )}
//           </div>

//           {/* Order Summary Sidebar */}
//           <div className="lg:col-span-1">
//             <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-6 rounded-xl sticky top-6">
//               <h2 className="text-xl font-bold mb-6">Order Summary</h2>
//               <div className="space-y-4">
//                 {cart.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <div className="flex items-center">
//                       <span className="bg-[#1f2128] text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
//                         {item.quantity}
//                       </span>
//                       <span className="text-sm text-gray-300 truncate max-w-[180px]">
//                         {item.name}
//                       </span>
//                     </div>
//                     <span>${(item.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//               </div>
//               <Separator className="my-4 bg-gray-700" />
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-300">Subtotal</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 {couponApplied && (
//                   <div className="flex justify-between text-green-400">
//                     <span>Discount (10%)</span>
//                     <span>-${discount.toFixed(2)}</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between">
//                   <span className="text-gray-300">Shipping</span>
//                   <span>${shippingCost.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-300">Tax</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//               </div>
//               <Separator className="my-4 bg-gray-700" />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//               {step === 6 && (
//                 <div className="mt-6 bg-[rgba(4,206,250,0.05)] p-4 rounded-lg border border-[rgba(4,206,250,0.2)]">
//                   <h3 className="font-medium mb-2 flex items-center">
//                     <Truck className="h-4 w-4 mr-2 text-[rgb(4,206,250)]" />
//                     Estimated Delivery
//                   </h3>
//                   <p className="text-gray-300 text-sm">
//                     {shippingMethod === "overnight"
//                       ? "Tomorrow"
//                       : shippingMethod === "express"
//                       ? "In 2-3 business days"
//                       : "In 5-7 business days"}
//                   </p>
//                 </div>
//               )}
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function CheckoutPage() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// }
