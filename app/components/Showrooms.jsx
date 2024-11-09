import logo from "@images/Croitoru_Logo.svg"
import showroom1 from "@images/image 16.png"
import showroom2 from "@images/image 23.png"
import Image from "next/image"
export default function Showrooms() {
return <section className="showroom">
    <h2 className="showroom-title">CROITORU<br/> SHOWROOM-URI</h2>
    <div className="showroom__inner">
        <div className="showroom__content">
                <div className="showroom__contact">
                    <div className="showroom__contact-item">
                        <h4 className="showroom__contact-title">LOCAȚIE</h4>
                        <p className="showroom__contact-text">or. Chisinau, str. Petricani, 17/3</p>
                        <a className="showroom__contact-text link" href="">
                            Vezi Locația
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30806 6.22468C8.55214 5.98061 8.94786 5.98061 9.19194 6.22468L12.5253 9.55802C12.7694 9.8021 12.7694 10.1978 12.5253 10.4419L9.19194 13.7752C8.94786 14.0193 8.55214 14.0193 8.30806 13.7752C8.06398 13.5312 8.06398 13.1354 8.30806 12.8914L11.1994 9.99996L8.30806 7.10857C8.06398 6.86449 8.06398 6.46876 8.30806 6.22468Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            <div className="showroom__contact">
                    <div className="showroom__contact-item">
                        <h4 className="showroom__contact-title">CONTACTEAZĂ-NE ACUM</h4>
                        <a className="showroom__contact-text" href="">+ 373 61 03 97 97</a>
                        <a className="showroom__contact-text" href="">bucatariatamd@gmail.com</a>
                    </div>
            </div>
            <div className="showroom__contact">
                <div className="showroom__contact-item">
                    <h4 className="showroom__contact-title">ORAR DE MUNCĂ</h4>
                    <p className="showroom__contact-text">Luni - Vineri: 9:00 - 18:00</p>
                    <p className="showroom__contact-text">Sâmbătă: 10:00 - 15:00</p>
                    <p className="showroom__contact-text">Duminică: Zi liberă</p>
                </div>
            </div>
        </div>
        <div className="showroom__image">
            <Image className="showroom__content-logo" src={showroom1}/>
        </div>
    </div>
    <div className="showroom__inner">
        <div className="showroom__content">
                <div className="showroom__contact">
                    <div className="showroom__contact-item">
                        <h4 className="showroom__contact-title">LOCAȚIE</h4>
                        <p className="showroom__contact-text">or. Chisinau, Str.Alba Iulia 75, Bloc C, (pe teritoriul uzinei Alfa)</p>
                        <a className="showroom__contact-text link" href="">
                            Vezi Locația
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30806 6.22468C8.55214 5.98061 8.94786 5.98061 9.19194 6.22468L12.5253 9.55802C12.7694 9.8021 12.7694 10.1978 12.5253 10.4419L9.19194 13.7752C8.94786 14.0193 8.55214 14.0193 8.30806 13.7752C8.06398 13.5312 8.06398 13.1354 8.30806 12.8914L11.1994 9.99996L8.30806 7.10857C8.06398 6.86449 8.06398 6.46876 8.30806 6.22468Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            <div className="showroom__contact">
                    <div className="showroom__contact-item">
                        <h4 className="showroom__contact-title">CONTACTEAZĂ-NE ACUM</h4>
                        <a className="showroom__contact-text" href="">+ 373 61 03 97 97</a>
                        <a className="showroom__contact-text" href="">bucatariatamd@gmail.com</a>
                    </div>
            </div>
            <div className="showroom__contact">
                <div className="showroom__contact-item">
                    <h4 className="showroom__contact-title">ORAR DE MUNCĂ</h4>
                    <p className="showroom__contact-text">Luni - Vineri: 9:00 - 18:00</p>
                    <p className="showroom__contact-text">Sâmbătă: 10:00 - 15:00</p>
                    <p className="showroom__contact-text">Duminică: Zi liberă</p>
                </div>
            </div>
        </div>
        <div className="showroom__image">
            <Image className="showroom__content-logo" src={showroom2}/>
        </div>
    </div>
</section>

}