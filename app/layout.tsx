import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  adjustFontFallback: false,
});
const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "700"],
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "天際綫",
  description: "天際綫是一個適合所有人的現代理財平台。",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansTC.variable} ${notoSerifTC.variable}`}>
        {children}
      </body>
    </html>
  );
}
