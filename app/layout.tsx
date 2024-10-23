import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Link from "next/link";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        <Footer/>
        <ToastContainer />
      </body>
    </html>
  );
}
