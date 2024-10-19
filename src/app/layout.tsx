import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Vane",
  description:
    "We blend creativity with innovation to craft unique, impactful designs that elevate brands. Our team is dedicated to turning ideas into stunning visuals, using the latest technology and a deep understanding of modern trends to deliver solutions that engage and inspire.",
  icons: {
    icon: "/assets/VANE 3.png", // Path to your icon
    shortcut: "/assets/VANE 3.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
