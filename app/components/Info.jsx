import article1 from "@images/image 13.png"
import article2 from "@images/image 14.png"
import Image from "next/image"
export default function Recomended() {
return <section className="info">
    <div className="info__top">
        <div className="info__header">
            <h2 className="info__header-title">BUCĂTĂRII СROITORU</h2>
            <p className="info__header-text">Din 2018</p>
        </div>
        <p className="info__header-body">Atelier de bucătării la comandă, produse după tehnologie și standarte Italiene. Orice dimensiune și design, în doar 20 zile cu livrare  absol gratuita. Design Italian. Bucataria ta este aici.</p>
    </div>
    <video className="info__video" autoPlay muted loop src="videos/Bucatarii_Background.mp4"></video>
    <div className="info__top">
        <div className="info__header">
            <h2 className="info__header-title">NOUTĂȚI</h2>
            <p className="info__header-text">Pentru cele mai noi noutați, urmăriți-ne în <a href="">Instagram</a></p>
        </div>
    </div>
    <div className="news">
        <div className="article">
            <div className="article-img">
            <Image src={article1}/>
            </div>
            <div className="article__body">
                <h3 className="article__body-title">Un design curajos și elegant pentru creatorii de gusturi sofisticate.</h3>
                <p className="article__body-date">09.05</p>
            </div>
        </div>
        <div className="article">
            <div className="article-img">
            <Image src={article2}/>
            </div>
            <div className="article__body">
                <h3 className="article__body-title">Plăcerea de a găti începe aici!</h3>
                <p className="article__body-date">09.05</p>
            </div>
        </div>
    </div>
</section>

}