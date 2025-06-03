import Link from "next/link";
import { ArrowLeft, Truck } from "lucide-react";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function ShippingPolicyPage() {
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
                <Truck className="h-6 w-6 text-[rgb(4,206,250)]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Shipping Policy
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
              className="px-4 py-2 bg-[rgb(4,206,250)] text-white rounded-md font-medium"
            >
              Shipping Policy
            </Link>
            <Link
              href="/policies/returns-refunds"
              className="px-4 py-2 hover:bg-[rgba(4,206,250,0.1)] text-white rounded-md font-medium"
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
                  href="#processing-time"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  1. Processing Time
                </Link>
              </li>
              <li>
                <Link
                  href="#shipping-methods"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  2. Shipping Methods
                </Link>
              </li>
              <li>
                <Link
                  href="#shipping-rates"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  3. Shipping Rates
                </Link>
              </li>
              <li>
                <Link
                  href="#international-shipping"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  4. International Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="#tracking-information"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  5. Tracking Information
                </Link>
              </li>
              <li>
                <Link
                  href="#shipping-restrictions"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  6. Shipping Restrictions
                </Link>
              </li>
              <li>
                <Link
                  href="#delivery-issues"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  7. Delivery Issues
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
            <section id="processing-time">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                1. Processing Time
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  All orders are processed within 1-3 business days. Orders are
                  not shipped or delivered on weekends or holidays.
                </p>
                <p>
                  If we are experiencing a high volume of orders, shipments may
                  be delayed by a few days. Please allow additional days in
                  transit for delivery. If there will be a significant delay in
                  shipment of your order, we will contact you via email or
                  telephone.
                </p>
              </div>
            </section>

            <section id="shipping-methods">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                2. Shipping Methods
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>We offer the following shipping methods:</p>
                <ul>
                  <li>
                    <strong>Standard Shipping:</strong> Estimated delivery time
                    of 5-7 business days.
                  </li>
                  <li>
                    <strong>Express Shipping:</strong> Estimated delivery time
                    of 2-3 business days.
                  </li>
                  <li>
                    <strong>Overnight Shipping:</strong> Estimated delivery time
                    of 1 business day.
                  </li>
                </ul>
                <p>
                  Please note that these are estimates and not guarantees.
                  Delivery times may vary based on the shipping carrier and your
                  location.
                </p>
              </div>
            </section>

            <section id="shipping-rates">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                3. Shipping Rates
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Shipping rates are calculated based on the weight of your
                  order, the distance to the destination, and the selected
                  shipping method.
                </p>
                <p>
                  The shipping cost will be displayed during checkout before
                  payment is completed.
                </p>
                <p>
                  We offer free standard shipping on all orders over $50 within
                  the United States. This offer does not apply to international
                  shipping.
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full bg-[#282a33] rounded-lg overflow-hidden">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Shipping Method
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Estimated Delivery Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Standard Shipping
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          5-7 business days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          $5.99 (Free over $50)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Express Shipping
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          2-3 business days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">$12.99</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Overnight Shipping
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          1 business day
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">$24.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="international-shipping">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                4. International Shipping
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  We ship to most countries worldwide. International shipping
                  rates are calculated based on the destination country, weight,
                  and dimensions of the package.
                </p>
                <p>
                  Please note that international orders may be subject to import
                  duties and taxes, which are the responsibility of the
                  recipient. These charges are not included in the shipping cost
                  and will be collected by the delivery carrier or customs
                  office.
                </p>
                <p>
                  International shipping times vary depending on the destination
                  country and customs processing. Typical delivery times range
                  from 7-21 business days.
                </p>
              </div>
            </section>

            <section id="tracking-information">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                5. Tracking Information
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Once your order has shipped, you will receive a shipping
                  confirmation email with a tracking number. You can use this
                  tracking number to monitor the status of your shipment.
                </p>
                <p>
                  If you do not receive a tracking number within 3 business days
                  after your order has been processed, please contact our
                  customer service team.
                </p>
                <p>
                  Please note that tracking information may not be immediately
                  available and can take up to 24 hours to update after the
                  shipment has been processed.
                </p>
              </div>
            </section>

            <section id="shipping-restrictions">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                6. Shipping Restrictions
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  We are unable to ship to P.O. boxes for certain products due
                  to shipping carrier restrictions. If you provide a P.O. box
                  address for these items, we will contact you to request an
                  alternative shipping address.
                </p>
                <p>
                  Some products may have shipping restrictions to certain
                  countries due to local regulations or import restrictions. If
                  you place an order for a product that cannot be shipped to
                  your location, we will notify you and provide a refund.
                </p>
              </div>
            </section>

            <section id="delivery-issues">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                7. Delivery Issues
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If your package is returned to us due to an incorrect address,
                  refused delivery, or failure to claim from the carrier, you
                  will be responsible for the original shipping charges as well
                  as any additional charges incurred for reshipping.
                </p>
                <p>
                  In the event that your package is lost or damaged during
                  transit, please contact our customer service team within 7
                  days of the expected delivery date. We will work with the
                  shipping carrier to resolve the issue and may require you to
                  file a claim with the carrier.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                8. Contact Us
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If you have any questions about our shipping policy, please
                  contact our customer service team at:
                  <br />
                  <Link
                    href="mailto:shipping@yourcompany.com"
                    className="text-[rgb(4,206,250)]"
                  >
                    shipping@yourcompany.com
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
