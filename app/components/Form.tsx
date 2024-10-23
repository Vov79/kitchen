"use client";
import React, { useState } from "react";
import { sumbitForm } from "../actions/server";
import about from "@images/Rectangle 1294.png"
import Image from "next/image"
import { toast, Slide } from 'react-toastify';
import { useRef } from 'react'


interface Props {
  children: React.ReactNode;
  withKitchen: boolean;
  buttonClassName?: string; // For button styling
  kitchenId?: string;
}

function Form({ withKitchen = false, children, buttonClassName = "", kitchenId }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLFormElement>(null)

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
          ref={ref}
        action={async (formData) => {
        await sumbitForm(formData)
        ref.current?.reset()
      }}
          className={`form_popup-content`}
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) =>{
            setShow(!show)
            toast.success('Mesajul a fost trimis!', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
              });
          }}
        >
          <div className="form-image">
            <Image src={about} alt="Croitoru"/>
          </div>
          <div className="form-container">
            <p>COMPLETAZĂ FORMULARUL</p>
            <input required name="name" type="text" placeholder="Numele" />
            <input required name="tel" type="text" placeholder="Telefonul" />
            {withKitchen && (
              <input style={{display: "none"}}  disabled value={kitchenId} name="kitchen" type="text" placeholder="Bucatarie" />
            )}
            <button type="submit">Trimite</button>
          </div>
          
        </form>
      </div>
    </>
  );
}

export default Form;
