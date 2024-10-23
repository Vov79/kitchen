"use client";
import React, { useState } from "react";
import { sumbitForm } from "../actions/server";

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
          <input name="name" type="text" placeholder="Nume" />
          <input name="tel" type="text" placeholder="Numar" />
          {withKitchen && (
            <input name="kitchen" type="text" placeholder="Bucatarie" />
          )}
          <button type="submit">Trimite</button>
        </form>
      </div>
    </>
  );
}

export default Form;
