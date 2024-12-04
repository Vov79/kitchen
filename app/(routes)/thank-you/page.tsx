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
      <h1 style={styles.heading}>Multumim!</h1>
      <p style={styles.message}>
        În scurt timp unul din consultanții noștri vor reveni cu un apel.
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
    height: "40vh",
    textAlign: "center" as const,
    backgroundColor: "#f9f9f9",
    color: "#333",
    marginBottom: "30px",
    marginTop: "20px"
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    marginTop: "75px",
  },
  message: {
    fontSize: "1.2rem",
    maxWidth: "650px",
    lineHeight: "1.5",
  },
};

