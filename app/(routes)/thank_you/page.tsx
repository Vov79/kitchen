"use server"
import { getKitchensData } from "@//actions/get_kitchens";
import Intro from "@//components/Intro.jsx";
import Recomended from "@//components/Recomended";
import Info from "@//components/Info.jsx";
import Testimonials from "@//components/Testimonials";
import React from "react";
import About from "@//components/About.jsx";

export default async function  ThankYouPage (){
    const { kitchens } = await getKitchensData(); 

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Multumesc!</h1>
      <p style={styles.message}>
       Apreciem vizita dumneavoastră. Dacă aveți întrebări, nu ezitați să contactați!
      </p>
    </div>
    <div className="app">
      <Recomended kitchens={kitchens} />
      <Testimonials />
      <About />
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    textAlign: "center" as const,
    backgroundColor: "#f9f9f9",
    color: "#333",
    marginBottom: "40px"
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    lineHeight: "1.5",
  },
};

