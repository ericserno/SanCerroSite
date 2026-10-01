import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { MotionRoot } from "@/components/MotionRoot";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "San Cerro — High on San Diego",
    template: "%s · San Cerro",
  },
  description:
    "Neighborhood news, events, and local business for San Carlos and Del Cerro — San Cerro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${fraunces.variable}`}>
        <MotionRoot>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </MotionRoot>
      </body>
    </html>
  );
}
