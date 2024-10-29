import Intro from "./components/Intro.jsx";
import Recomended from "./components/Recomended.jsx";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Croitoru | Acasă",
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

export default function Home() {
  return (
    <div className="app">
      <Intro />
      <Recomended />
      <Info />
      <Testimonials />
      <About />
    </div>
  );
}
