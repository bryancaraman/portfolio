import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Bryan Caraman",
    template: "%s | bryancaraman.com",
  },
  description: "Software engineer and entrepreneur",
  openGraph: {
    title: "Bryan Caraman",
    description:
      "Software engineer and entrepreneur",
    url: "https://bryancaraman.com",
    siteName: "bryancaraman.com",
    images: [
      {
        url: "https://drive.google.com/uc?export=download&id=1NyvYaorVD9eNtkeS4oGVwV8yQ0QRctCa",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Bryan Caraman",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <title>Bryan Caraman</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
