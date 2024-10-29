import CreateItem from "../../components/CreateItem";

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
export default function Showrooms() {
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
