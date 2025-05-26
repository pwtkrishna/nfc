import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Taponn Solutions",
  description: "Designed and developed by Premier Webtech",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
