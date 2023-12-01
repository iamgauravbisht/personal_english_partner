import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spoken English Partner",
  description: "Unlock Fluent English with Your AI Language Companion",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-customprimary text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
