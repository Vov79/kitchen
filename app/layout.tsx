import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Link from "next/link";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Recomended from "./components/Recomended.jsx";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">
        <Header/>
        <Intro/>
        <Recomended/>
        <Info/>
        <Testimonials/>
        {children}
      </body>
    </html>
  );
}
