import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Image Compressor - Compress Images Without Losing Quality",
    template: "%s | Image Compressor",
  },
  description: "Free online image compression tool. Reduce file size while maintaining quality. Supports JPEG, PNG, WebP.",
  keywords: ["image compressor", "compress png", "reduce image size"],
  authors: [{ name: "Image Compressor" }],
  creator: "Image Compressor",
  publisher: "Image Compressor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Image Compressor",
    title: "Image Compressor - Compress Images Without Losing Quality",
    description: "Free online image compression tool. Reduce file size while maintaining quality. Supports JPEG, PNG, WebP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor - Compress Images Without Losing Quality",
    description: "Free online image compression tool. Reduce file size while maintaining quality. Supports JPEG, PNG, WebP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
