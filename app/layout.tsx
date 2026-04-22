import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Balanzo",
    template: "%s | Balanzo",
  },
  description: "Smart shared expense management for groups.",
  metadataBase: new URL("https://balanzo.app"),
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
  openGraph: {
    title: "Balanzo",
    description: "Smart shared expense management for groups.",
    images: ["/brand/social-card.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanzo",
    description: "Smart shared expense management for groups.",
    images: ["/brand/social-card.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
