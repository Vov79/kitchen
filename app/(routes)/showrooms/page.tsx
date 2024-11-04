import About from '@//components/About';
import Showrooms from '@//components/Showrooms';
import Pages_Intro from '@//components/Pages_Intro';


import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Croitoru | Showroom-uri",
  description: "Croitoru - Bucătării la comandă cu design italian",
  keywords: "bucătării, mobilă, design, italian, comandă, croitoru",
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Croitoru",
      },
    ],
  },
};

export default function Showroom() {
    return(
        <div>
            <Pages_Intro/>
            <Showrooms/>
            <About/>
        </div>
    );
}
