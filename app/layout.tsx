import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToastProvider from "./components/ToastProvider";

const barlowRegular = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow-regular",
});

const urbanistRegular = localFont({
  src: "./fonts/Urbanist-Regular.ttf",
  variable: "--font-urbanist-regular",
});


export const metadata: Metadata = {
  title: "Salomi Onome | Resume",
  description: "Salomi Afolabi Onome is frontend developer, who is an expert in NextJS, ReactJS.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${barlowRegular.variable} ${urbanistRegular.variable} antialiased`}>
        <ToastProvider/>
        {children}
      </body>
    </html>
  );
}
