import type { Metadata } from "next";
import { Inter, Space_Grotesk, Orbitron, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-ic",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-6g",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-st",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IC6GST 2027 | International Conference on Intelligent Computing, 6G and Sustainable Technologies",
    template: "%s | IC6GST 2027",
  },
  description:
    "IC6GST 2027 — International Conference on Intelligent Computing, 6G-and-Beyond Communication and Sustainable Technologies. October 2–3, 2027 at PDEU, Gandhinagar, Gujarat, India.",
  keywords: [
    "IC6GST 2027",
    "6G conference",
    "intelligent computing",
    "sustainable technologies",
    "PDEU",
    "Gandhinagar",
    "IEEE conference",
  ],
  openGraph: {
    title: "IC6GST 2027",
    description:
      "International Conference on Intelligent Computing, 6G-and-Beyond Communication and Sustainable Technologies",
    url: "https://ic6gst2027.pdpu.ac.in",
    siteName: "IC6GST 2027",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
