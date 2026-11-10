import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blooming Hives — Creative & Digital Agency",
  description:
    "Independent creative and digital agency bringing brand, digital and performance together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
