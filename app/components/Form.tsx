"use client";
import React, { useState } from "react";
import { sumbitForm } from "../actions/server";
import about from "@images/Rectangle 1294.png"
import Image from "next/image"

interface Props {
  children: React.ReactNode;
  withKitchen: boolean;
  buttonClassName?: string; // For button styling
}

function Form({ withKitchen = false, children, buttonClassName = "" }: Props) {
  const [show, setShow] = useState(false);

  const hidePopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  };

  const togglePopup = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <button className={buttonClassName} onClick={togglePopup}>
        {children}
      </button>

      <div
        className={`form_popup ${show ? "visible" : ""}`}
        onClick={hidePopup}
      >
        <form
          action={sumbitForm}
          className={`form_popup-content`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="form-image">
            <Image src={about} alt="Croitoru"/>
          </div>
          <div className="form-container">
            <p>COMPLETAZĂ FORMULARUL</p>
            <input name="name" type="text" placeholder="Numele" />
            <input name="tel" type="text" placeholder="Telfonul" />
            {withKitchen && (
              <input name="kitchen" type="text" placeholder="Bucatarie" />
            )}
            <button type="submit">Trimite</button>
          </div>
          
        </form>
      </div>
    </>
  );
}

export default Form;
