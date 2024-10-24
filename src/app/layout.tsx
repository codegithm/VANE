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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Vane" />
        <meta
          property="og:description"
          content="We blend creativity with innovation to craft unique, impactful designs that elevate brands. Our team is dedicated to turning ideas into stunning visuals, using the latest technology and a deep understanding of modern trends to deliver solutions that engage and inspire."
        />
        <meta property="og:image" content="/assets/VANE 3.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vane" />
        <meta
          name="twitter:description"
          content="We blend creativity with innovation to craft unique, impactful designs that elevate brands. Our team is dedicated to turning ideas into stunning visuals, using the latest technology and a deep understanding of modern trends to deliver solutions that engage and inspire."
        />
        <meta name="twitter:image" content="/assets/VANE 3.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Vane</title>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
