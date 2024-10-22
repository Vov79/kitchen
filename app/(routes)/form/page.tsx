"use client";
import Form from "@components/Form";
import { useAtom } from "jotai";
import { showPopup } from "../../atoms";

export default function Page() {
  const [show, setShow] = useAtom(showPopup);

  return (
    <div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show form
      </button>
      <Form withKitchen visible={show} />
    </div>
  );
}
