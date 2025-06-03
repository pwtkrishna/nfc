import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function TermsConditionsPage() {
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
                <FileText className="h-6 w-6 text-[rgb(4,206,250)]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Terms & Conditions
              </h1>
            </div>
            <div className="h-1 w-20 bg-[rgb(4,206,250)] mb-6"></div>
            <p className="text-gray-300">Last updated: May 16, 2025</p>
          </div>

          {/* Policy Navigation */}
          <div className="flex flex-wrap gap-4 mb-10 p-4 bg-[#282a33] rounded-lg">
            <Link
              href="/policies/terms-conditions"
              className="px-4 py-2 bg-[rgb(4,206,250)] text-white rounded-md font-medium"
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
                  href="#introduction"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  1. Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="#use-of-website"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  2. Use of Website
                </Link>
              </li>
              <li>
                <Link
                  href="#account-registration"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  3. Account Registration
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  4. Products
                </Link>
              </li>
              <li>
                <Link
                  href="#payments"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  5. Payments
                </Link>
              </li>
              <li>
                <Link
                  href="#intellectual-property"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  6. Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  href="#limitation-of-liability"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  7. Limitation of Liability
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy-policy"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  8. Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#changes-to-terms"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  9. Changes to Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="text-[rgb(4,206,250)] hover:underline"
                >
                  10. Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                1. Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Welcome to our website. These Terms and Conditions govern your
                  use of our website and the products and services offered
                  through it. By accessing or using our website, you agree to be
                  bound by these Terms and Conditions.
                </p>
                <p>
                  Please read these Terms and Conditions carefully before using
                  our website. If you do not agree with any part of these terms,
                  you may not use our website.
                </p>
              </div>
            </section>

            <section id="use-of-website">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                2. Use of Website
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  You agree to use our website only for lawful purposes and in a
                  way that does not infringe the rights of, restrict or inhibit
                  anyone else&apos;s use and enjoyment of the website.
                </p>
                <p>Prohibited behavior includes:</p>
                <ul>
                  <li>
                    Conducting any systematic or automated data collection
                    activities
                  </li>
                  <li>
                    Using the website in any way that causes, or may cause,
                    damage to the website
                  </li>
                  <li>
                    Using the website in any way that is unlawful, illegal,
                    fraudulent, or harmful
                  </li>
                  <li>
                    Using the website for any purpose related to marketing
                    without our express written consent
                  </li>
                </ul>
              </div>
            </section>

            <section id="account-registration">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                3. Account Registration
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  To access certain features of our website, you may be required
                  to register for an account. You agree to provide accurate,
                  current, and complete information during the registration
                  process and to update such information to keep it accurate,
                  current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use
                  to access our website and for any activities or actions under
                  your password. We encourage you to use a strong password
                  (using a combination of upper and lower-case letters, numbers,
                  and symbols) with your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party.
                  You must notify us immediately upon becoming aware of any
                  breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            <section id="products">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                4. Products
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  All products displayed on our website are subject to
                  availability. We reserve the right to discontinue any product
                  at any time.
                </p>
                <p>
                  We make every effort to display as accurately as possible the
                  colors and features of our products that appear on the
                  website. However, we cannot guarantee that your computer
                  monitor&apos;s display of any color will be accurate.
                </p>
                <p>
                  We reserve the right, but are not obligated, to limit the
                  sales of our products to any person, geographic region, or
                  jurisdiction. We may exercise this right on a case-by-case
                  basis.
                </p>
              </div>
            </section>

            <section id="payments">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                5. Payments
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  We accept various payment methods as indicated on our website.
                  All payments are processed securely through our payment
                  processors.
                </p>
                <p>
                  Prices for our products are subject to change without notice.
                  We reserve the right to modify or discontinue any product
                  without notice at any time.
                </p>
                <p>
                  We shall not be liable to you or to any third party for any
                  modification, price change, suspension, or discontinuance of
                  the product.
                </p>
              </div>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                6. Intellectual Property
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  The website and all of its content, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by us,
                  our licensors, or other providers of such material and are
                  protected by copyright, trademark, patent, trade secret, and
                  other intellectual property or proprietary rights laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store, or transmit any of the material on our
                  website, except as follows:
                </p>
                <ul>
                  <li>
                    Your computer may temporarily store copies of such materials
                    in RAM incidental to your accessing and viewing those
                    materials
                  </li>
                  <li>
                    You may store files that are automatically cached by your
                    Web browser for display enhancement purposes
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of
                    pages of the website for your own personal, non-commercial
                    use and not for further reproduction, publication, or
                    distribution
                  </li>
                </ul>
              </div>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                7. Limitation of Liability
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  In no event shall we, our directors, employees, partners,
                  agents, suppliers, or affiliates, be liable for any indirect,
                  incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>
                    Your access to or use of or inability to access or use the
                    website
                  </li>
                  <li>
                    Any conduct or content of any third party on the website
                  </li>
                  <li>Any content obtained from the website</li>
                  <li>
                    Unauthorized access, use or alteration of your transmissions
                    or content
                  </li>
                </ul>
                <p>
                  Whether based on warranty, contract, tort (including
                  negligence) or any other legal theory, whether or not we have
                  been informed of the possibility of such damage, and even if a
                  remedy set forth herein is found to have failed of its
                  essential purpose.
                </p>
              </div>
            </section>

            <section id="privacy-policy">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                8. Privacy Policy
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Your use of our website is also governed by our Privacy
                  Policy, which is incorporated into these Terms and Conditions
                  by reference.
                </p>
              </div>
            </section>

            <section id="changes-to-terms">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                9. Changes to Terms
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days&apos; notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our website after any revisions
                  become effective, you agree to be bound by the revised terms.
                  If you do not agree to the new terms, you are no longer
                  authorized to use the website.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                10. Contact Us
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                  <br />
                  <Link
                    href="mailto:legal@yourcompany.com"
                    className="text-[rgb(4,206,250)]"
                  >
                    legal@yourcompany.com
                  </Link>
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
