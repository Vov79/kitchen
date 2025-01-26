"use client";
import Image from "next/image"
import chiuvete from "@images/franke/chiuvete.svg"
import baterii from "@images/franke/baterii.svg"
import cuptoare from "@images/franke/cuptoare.svg"
import plite from "@images/franke/plite.svg"
import hote from "@images/franke/hote.svg"
import all from "@images/franke/toate.svg"
import arrow from "@images/caret_right.svg"
import Link from "next/link";
export default function Franke_List() {
    return (
<section className="recomended">
      <div className="recomended__header">
        <h2 className="recomended__header-title">EXPLOREAZĂ FRANKE HOME SOLUTIONS</h2>
        <p className="recomended__header-text">
        Fiecare dintre produsele noastre este proiectat pentru a fi excelent în sine și de neegalat la nivel de performanță și stil.
        </p>
      </div>
      <iframe src="pdf/Franke_PDF.pdf" className="franke_pdf" frameborder="0"></iframe>
      {/* 
      <div className="franke__list">
        <div className="franke__item">
            <h2 className="franke__item-title">Chiuvete</h2>
            <Image src={chiuvete} alt="Croitoru | Franke Chiuvete"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        <div className="franke__item">
            <h2 className="franke__item-title">Baterii</h2>
            <Image src={baterii} alt="Croitoru | Franke Baterii"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        <div className="franke__item">
            <h2 className="franke__item-title">Cuptoare</h2>
            <Image src={cuptoare} alt="Croitoru | Franke Cuptoare"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        <div className="franke__item">
            <h2 className="franke__item-title">Plite</h2>
            <Image src={plite} alt="Croitoru | Franke Plite"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        <div className="franke__item">
            <h2 className="franke__item-title">Hote</h2>
            <Image src={hote} alt="Croitoru | Franke Hote"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        <div className="franke__item">
            <h2 className="franke__item-title">Toate produsele</h2>
            <Image src={all} alt="Croitoru | Franke Produese"/>
            <Image className="franke__item-arrow" src={arrow} alt="Croitoru | Bucatarii"/>

        </div>
        </div>
        */}
</section>
    )
}
