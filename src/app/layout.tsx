import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salmantabrez.com"),
  title: "Salman Tabrez - Cloud Security Architect",
  description: "Professional portfolio of Salman Tabrez, Cloud Security Architect specializing in AWS, GCP, Kubernetes, and DevSecOps.",
  keywords: "Cloud Security, AWS, GCP, Azure, Kubernetes, DevSecOps, CI/CD, Salman Tabrez",
  authors: [{ name: "Salman Tabrez" }],
  openGraph: {
    title: "Salman Tabrez - Cloud Security Architect",
    description: "Building secure, scalable cloud architectures.",
    url: "https://salmantabrez.com",
    siteName: "Salman Tabrez Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Salman Tabrez",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Tabrez - Cloud Security Architect",
    description: "Building secure, scalable cloud architectures.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
