"use client";

import type React from "react";

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />

      <div className="min-h-screen bg-[#1f2128] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <div className="h-1 w-20 bg-[rgb(4,206,250)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or want to work with us? We&apos;d love to hear
              from you. Fill out the form below or use our contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-[rgb(4,206,250)] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you as
                      soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 flex flex-col">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-200"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white px-3 py-1.5"
                        />
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-200"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white px-3 py-1.5"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-200"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white px-3 py-1.5"
                      />
                    </div>

                    <div className="space-y-2 flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-200"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need..."
                        rows={6}
                        required
                        className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white resize-none p-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white font-medium py-3 rounded-lg transition-colors"
                    >
                      {isSubmitting ? (
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
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)]">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Our Location
                      </h3>
                      <p className="mt-1 text-gray-300">
                        123 Innovation Street
                        <br />
                        Tech District, San Francisco
                        <br />
                        CA 94103, United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)]">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Phone Number
                      </h3>
                      <p className="mt-1 text-gray-300">
                        +1 (555) 123-4567
                        <br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)]">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Email Address
                      </h3>
                      <p className="mt-1 text-gray-300">
                        info@yourcompany.com
                        <br />
                        support@yourcompany.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)]">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Working Hours
                      </h3>
                      <p className="mt-1 text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-white">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#282a33] flex items-center justify-center text-white hover:bg-[rgb(4,206,250)] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#282a33] flex items-center justify-center text-white hover:bg-[rgb(4,206,250)] transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#282a33] flex items-center justify-center text-white hover:bg-[rgb(4,206,250)] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#282a33] flex items-center justify-center text-white hover:bg-[rgb(4,206,250)] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4 text-white">Find Us</h3>
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden border-2 border-[#282a33]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.888144437719!2d75.57509957468731!3d31.316458657189894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a56fa7cfccb%3A0xc265b776408e932d!2sGuru%20Nanak%20Mission%20Chowk%2C%20Lajpat%20Nagar%2C%20Jalandhar%2C%20Punjab%20144006!5e1!3m2!1sen!2sin!4v1747296560136!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#282a33] border-none p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2 text-white">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-gray-300">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call our support
                  line.
                </p>
              </div>

              <div className="bg-[#282a33] border-none p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2 text-white">
                  Do you offer consultations?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer free 30-minute initial consultations to discuss
                  your project needs and how we can help you achieve your goals.
                </p>
              </div>

              <div className="bg-[#282a33] border-none p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2 text-white">
                  What services do you provide?
                </h3>
                <p className="text-gray-300">
                  We offer a wide range of services including web development,
                  mobile app development, UI/UX design, and digital marketing
                  solutions.
                </p>
              </div>

              <div className="bg-[#282a33] border-none p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2 text-white">
                  How do I request a quote?
                </h3>
                <p className="text-gray-300">
                  You can request a quote by filling out the contact form on
                  this page with details about your project, or by emailing us
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
