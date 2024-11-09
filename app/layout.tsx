import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Link from "next/link";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro
    "
    >
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
       
       
      </head>
      <body>
        

        <Header />
        {children}
        <Footer />
        <ToastContainer />
        <GoogleAnalytics gaId="GTM-N86LVST" />
      </body>
    </html>
  );
}
