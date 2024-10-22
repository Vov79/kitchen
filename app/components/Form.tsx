"use client";
import { sumbitForm } from "../actions/server";
import { showPopup } from "../atoms";
import { useAtom } from "jotai";

interface Props {
  withKitchen?: boolean;
  visible: boolean;
}

function Form({ withKitchen = false }: Props) {
  const [show, setShow] = useAtom(showPopup);

  const hidePopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  };

  const hanndleSubmit = sumbitForm.bind(null, withKitchen);
  return (
    <div className={`form_popup ${show ? "visible" : ""}`} onClick={hidePopup}>
      <form
        action={hanndleSubmit}
        className="form_popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <input name="name" type="text" placeholder="Nume" />
        <input name="tel" type="text" placeholder="Numar" />
        {withKitchen ? (
          <input name="kitchen" type="text" placeholder="Bucatarie" />
        ) : null}
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

export default Form;
