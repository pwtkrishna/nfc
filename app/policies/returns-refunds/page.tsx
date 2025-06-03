import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function ReturnsRefundsPage() {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <div className="min-h-screen bg-[#1f2128] text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-[rgb(4,206,250)] hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="mr-4 p-3 rounded-full bg-[rgba(4,206,250,0.1)]">
                <RotateCcw className="h-6 w-6 text-[rgb(4,206,250)]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Returns & Refunds
              </h1>
            </div>
            <div className="h-1 w-20 bg-[rgb(4,206,250)] mb-6"></div>
            <p className="text-gray-300">Last updated: May 16, 2025</p>
          </div>

          {/* Policy Navigation */}
          <div className="flex flex-wrap gap-4 mb-10 p-4 bg-[#282a33] rounded-lg">
            <Link
              href="/policies/terms-conditions"
              className="px-4 py-2 hover:bg-[rgba(4,206,250,0.1)] text-white rounded-md font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/policies/shipping-policy"
              className="px-4 py-2 hover:bg-[rgba(4,206,250,0.1)] text-white rounded-md font-medium"
            >
              Shipping Policy
            </Link>
            <Link
              href="/policies/returns-refunds"
              className="px-4 py-2 bg-[rgb(4,206,250)] text-white rounded-md font-medium"
            >
              Returns & Refunds
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="mb-10 p-6 bg-[#282a33] rounded-lg">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#return-policy"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  1. Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#eligibility"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  2. Return Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="#return-process"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  3. Return Process
                </Link>
              </li>
              <li>
                <Link
                  href="#refunds"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  4. Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="#exchanges"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  5. Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="#damaged-items"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  6. Damaged or Defective Items
                </Link>
              </li>
              <li>
                <Link
                  href="#cancellations"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  7. Order Cancellations
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  8. Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section id="return-policy">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                1. Return Policy
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  We want you to be completely satisfied with your purchase. If
                  you&apos;re not entirely happy with your order, we&apos;re
                  here to help.
                </p>
                <p>
                  You have 30 days from the date of delivery to return your
                  items for a refund or exchange. After 30 days, we cannot offer
                  you a refund or exchange.
                </p>
                <div className="bg-[#282a33] p-4 rounded-lg mt-4 border-l-4 border-[rgb(4,206,250)]">
                  <p className="font-medium">Return Policy at a Glance:</p>
                  <ul>
                    <li>30-day return window from date of delivery</li>
                    <li>
                      Items must be unused, unworn, and in original packaging
                    </li>
                    <li>
                      Return shipping costs are the responsibility of the
                      customer (except for defective items)
                    </li>
                    <li>
                      Refunds are processed within 5-7 business days after
                      receiving the returned item
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="eligibility">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                2. Return Eligibility
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  To be eligible for a return, your item must meet the following
                  conditions:
                </p>
                <ul>
                  <li>
                    The item must be unused, unworn, and in the same condition
                    that you received it
                  </li>
                  <li>The item must be in its original packaging</li>
                  <li>You must have the receipt or proof of purchase</li>
                </ul>
                <p>The following items cannot be returned:</p>
                <ul>
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Personal care items (for hygiene reasons)</li>
                  <li>Custom or personalized orders</li>
                  <li>Perishable goods</li>
                  <li>
                    Items marked as &quot;Final Sale&quot; or
                    &quot;Non-Returnable&quot;
                  </li>
                </ul>
              </div>
            </section>

            <section id="return-process">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                3. Return Process
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>To initiate a return, please follow these steps:</p>
                <ol>
                  <li>
                    <strong>Contact Customer Service:</strong> Email us at
                    returns@yourcompany.com or call +1 (555) 123-4567 to request
                    a return. Please include your order number and the reason
                    for the return.
                  </li>
                  <li>
                    <strong>Receive Return Authorization:</strong> Our customer
                    service team will provide you with a Return Merchandise
                    Authorization (RMA) number and return instructions.
                  </li>
                  <li>
                    <strong>Package Your Return:</strong> Securely pack the
                    item(s) in the original packaging if possible. Include the
                    RMA number and your order information.
                  </li>
                  <li>
                    <strong>Ship Your Return:</strong> Send your return to the
                    address provided in the return instructions. We recommend
                    using a trackable shipping method.
                  </li>
                </ol>
                <p>
                  Please note that you are responsible for the cost of return
                  shipping unless the item is defective or we made an error in
                  your order.
                </p>
              </div>
            </section>

            <section id="refunds">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                4. Refunds
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Once we receive your returned item, we will inspect it and
                  notify you of the status of your refund.
                </p>
                <p>
                  If your return is approved, we will initiate a refund to your
                  original method of payment. You will receive the credit within
                  5-7 business days, depending on your card issuer&apos;s
                  policies.
                </p>
                <p>The refund will include:</p>
                <ul>
                  <li>The purchase price of the returned item(s)</li>
                  <li>
                    Original shipping costs (only if the return is due to our
                    error or if the item is defective)
                  </li>
                </ul>
                <p>The refund will not include:</p>
                <ul>
                  <li>
                    Return shipping costs (unless the return is due to our error
                    or if the item is defective)
                  </li>
                  <li>Gift wrapping fees</li>
                  <li>Express or expedited shipping upgrades</li>
                </ul>
              </div>
            </section>

            <section id="exchanges">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                5. Exchanges
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If you need to exchange an item for a different size, color,
                  or product, please follow the same process as for returns.
                </p>
                <p>In your return request, please specify:</p>
                <ul>
                  <li>The item you are returning</li>
                  <li>
                    The item you would like instead (including size, color, or
                    other specifications)
                  </li>
                </ul>
                <p>
                  If the price of the exchange item is higher than your original
                  purchase, you will need to pay the difference. If the price is
                  lower, we will refund the difference to your original payment
                  method.
                </p>
                <p>
                  Please note that the availability of exchange items cannot be
                  guaranteed. If the requested exchange item is out of stock, we
                  will issue a refund for the returned item.
                </p>
              </div>
            </section>

            <section id="damaged-items">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                6. Damaged or Defective Items
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If you receive a damaged or defective item, please contact our
                  customer service team within 48 hours of receiving your order.
                </p>
                <p>For damaged or defective items, we will:</p>
                <ul>
                  <li>Provide a prepaid return shipping label</li>
                  <li>
                    Process a full refund including original shipping costs
                  </li>
                  <li>Or send a replacement item (if available)</li>
                </ul>
                <p>
                  Please provide photos of the damaged or defective item when
                  you contact us. This will help us process your claim more
                  quickly.
                </p>
              </div>
            </section>

            <section id="cancellations">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                7. Order Cancellations
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  You can cancel an order within 24 hours of placing it,
                  provided that the order has not yet been shipped. To cancel an
                  order, please contact our customer service team as soon as
                  possible with your order number.
                </p>
                <p>
                  If your order has already been shipped, you will need to
                  follow our return process once you receive the item.
                </p>
                <p>
                  For custom or made-to-order items, cancellations may not be
                  possible once production has begun. Please contact us as soon
                  as possible if you need to cancel such an order.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                8. Contact Us
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If you have any questions about our returns and refunds
                  policy, please contact our customer service team at:
                  <br />
                  <Link
                    href="mailto:returns@yourcompany.com"
                    className="text-[rgb(4,206,250)]"
                  >
                    returns@yourcompany.com
                  </Link>
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
                <p>
                  Our customer service team is available Monday through Friday,
                  9:00 AM to 5:00 PM EST.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
