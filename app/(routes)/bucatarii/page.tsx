import About from "@//components/About";
import Kitchens from "@//components/Kitchens";
import Pages_Intro from "@//components/Pages_Intro";
import { getKitchensData } from "@//actions/get_kitchens";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Croitoru | Bucătării",
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

export default async function Bucatarii() {
  const { kitchens } = await getKitchensData(); 
  return (
    <div className="app">
      <Pages_Intro />
      <Kitchens kitchens={kitchens}/>
      <About />
    </div>
  );
}
