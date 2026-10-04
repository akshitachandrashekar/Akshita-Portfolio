import type { Metadata } from "next";
import localFont from "next/font/local";
import ImageGuard from "./components/ImageGuard";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshita Chandrashekar — User Experience Designer",
  description:
    "Portfolio of Akshita Chandrashekar, a User Experience Designer based in Bengaluru, bringing clarity to complex enterprise products across retail, healthcare, and data platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#252323]">
        <ImageGuard />
        {children}
      </body>
    </html>
  );
}
