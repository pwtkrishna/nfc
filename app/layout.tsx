import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Footer from "@/components/footer/Footer";
import CartSidebar from "@/components/cart/CartSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taponn Solutions",
  description: "Designed and developed by Premier Webtech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1f2128]`}
      >
        <Header />
        <Toaster position="top-center" containerClassName="z-[999999]" />
        <CartSidebar />
        {children}
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
