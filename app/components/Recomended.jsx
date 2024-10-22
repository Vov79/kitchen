import placeholder from "@images/Img-15.jpg"
import Image from "next/image"
export default function Recomended() {
return <section className="recomended">
    <div className="recomended__header">
        <h2 className="recomended__header-title">PROIECTELE NOASTRE</h2>
        <p className="recomended__header-text">Deja peste 2000 de bucătării finisate au fost livrate și instalate în casele clienților noștri și în continuare menținem relații bune.</p>
    </div>
    <div className="recomended__list">
        <div className="recomended__item">
            <Image src={placeholder} alt="" />
        </div>
    </div>

</section>

}