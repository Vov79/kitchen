import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Link from "next/link";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        {/*  Google Tag Manager  */}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N86LVST');</script>
{/*  End Google Tag Manager  */}
      </head>
      <body>
       {/* Google Tag Manager (noscript)  */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N86LVST"
height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
 {/* End Google Tag Manager (noscript)  */}
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
