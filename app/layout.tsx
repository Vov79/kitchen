import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Link from "next/link";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Recomended from "./components/Recomended.jsx";
import Form from "@components/Form";
import { Provider } from "jotai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">
        <Provider>
          <Header />
          <Intro />
          <Recomended />
          {children}
          <Form withKitchen visible={false} />
        </Provider>
      </body>
    </html>
  );
}
