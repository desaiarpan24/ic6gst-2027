import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@500;600;700;800;900&family=Outfit:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
