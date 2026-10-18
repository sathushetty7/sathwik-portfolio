
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathwik — Developer & AI Enthusiast",
  description:
    "Explore Sathwik's portfolio of software development, web experiences, data projects, and artificial intelligence.",
  applicationName: "Sathwik Portfolio",
  openGraph: {
    title: "Sathwik — Developer & AI Enthusiast",
    description:
      "Building useful digital experiences through code, data, and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dce3f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
