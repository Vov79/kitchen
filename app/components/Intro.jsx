import logo from "@images/Croitoru_Logo.svg"
import Image from "next/image"
export default function Intro() {
return <section className="intro">
<video className="intro__video" autoPlay muted loop src="videos/Bucatarii_Background.mp4"></video>
    <div className="intro-content">
        <Image className="intro-logo" src={logo} alt="" srcset="" />
        <div className="intro-button">
        CONSULTAȚIE GRATUITĂ
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96949 8.34296C10.2624 8.05007 10.7373 8.05007 11.0301 8.34296L15.0301 12.343C15.323 12.6359 15.323 13.1107 15.0301 13.4036L11.0301 17.4036C10.7373 17.6965 10.2624 17.6965 9.96949 17.4036C9.67659 17.1107 9.67659 16.6359 9.96949 16.343L13.4392 12.8733L9.96949 9.40362C9.67659 9.11073 9.67659 8.63585 9.96949 8.34296Z" fill="white"/>
        </svg>
        </div>
        
    </div>

</section>

}