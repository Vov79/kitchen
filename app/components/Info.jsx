import article1 from "@images/image 13.png";
import article2 from "@images/image 14.png";
import Image from "next/image";
export default function Recomended() {
  return (
    <section className="info">
      <div className="info__top">
        <div className="info__header">
          <h2 className="info__header-title">BUCĂTĂRII СROITORU</h2>
          <p className="info__header-text">Din 2015</p>
        </div>
        <p className="info__header-body">
          Atelier de bucătării la comandă, produse după tehnologie și standarte
          Italiene. Orice dimensiune și design, în doar 30 zile.
        </p>
      </div>
      <video
        className="info__video"
        controls
        src="videos/video_add.mp4"
      ></video>
      <div className="info__top">
        <div className="info__header">
          <h2 className="info__header-title">NOUTĂȚI</h2>
          <p className="info__header-text">
            Pentru cele mai noi noutați, urmăriți-ne în <a href="https://www.instagram.com/bucatarii_croitoru/" target="_blank">Instagram</a>
          </p>
        </div>
      </div>
      <div className="news">
        <div className="article">
          <div className="article-img">
            <Image
              alt="Un design curajos și elegant pentru creatorii de gusturi
              sofisticate."
              src={article1}
            />
          </div>
          <div className="article__body">
            <h3 className="article__body-title">
            Ce modele de mobilă de bucătărie sã alegi pentru casã sau apartament?
            </h3>
            <p className="article__body-date">Nu o să ne temem să spunem că o familie fericită trebuie sã aibă în primul rând o bucătãrie frumoasã si bine amenajată.</p>
          </div>
        </div>
        <div className="article">
          <div className="article-img">
            <Image alt="Plăcerea de a găti începe aici!" src={article2} />
          </div>
          <div className="article__body">
            <h3 className="article__body-title">
            Cum să-fi completezi bucătãria? Recomandari in alegerea instalafilor sanitare
            </h3>
            <p className="article__body-date">Bucătäria este una din cele mai exploatate si complexe
            incaperi din fiecare locuinta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
