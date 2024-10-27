import About from '@//components/About';
import Featured from '@//components/Featured';
import Form from '@//components/Form';
import placeholder from "@images/Img-15.jpg"
import Image from "next/image"


export default function Preview() {
    return(
        <div>
            <div className="preview__head">
                <h1 className='preview__head-title'>Victoria</h1>
                <Form withKitchen buttonClassName="preview-form">
                COMANDĂ APEL
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96949 8.34296C10.2624 8.05007 10.7373 8.05007 11.0301 8.34296L15.0301 12.343C15.323 12.6359 15.323 13.1107 15.0301 13.4036L11.0301 17.4036C10.7373 17.6965 10.2624 17.6965 9.96949 17.4036C9.67659 17.1107 9.67659 16.6359 9.96949 16.343L13.4392 12.8733L9.96949 9.40362C9.67659 9.11073 9.67659 8.63585 9.96949 8.34296Z" fill="white"/>
            </svg>
        </Form>
            </div>
            <div className="app preview">
                <div className='preview__images'>
                    <div className="preview__images-item item_1">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                        <div className='preview-nav'>
                            <Image className='preview-nav--placeholder' src={placeholder} alt='kitchen_name'/>
                            <Image className='preview-nav--placeholder' src={placeholder} alt='kitchen_name'/>
                            <Image className='preview-nav--placeholder' src={placeholder} alt='kitchen_name'/>
                        </div>
                    </div>
                    <div className="preview__images-item item_2">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                    </div>
                    <div className="preview__images-item item_2">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                    </div>
                    <div className="preview__images-item item_3">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                    </div>
                    <div className="preview__images-item item_4">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                    </div>
                    <div className="preview__images-item item_5">
                        <Image className="preview__images-image" src={placeholder} alt='kitchen_name'/>
                    </div>
                </div>
                <div className="preview__main">
                        <div className="preview__main-container">
                            <div className="preview__main-item">
                                <h3 className="preview__main-title">PREȚ</h3>
                                <p className="preview__main-body">24 000 MDL</p>
                            </div>
                        </div>
                        <div className="preview__main-container">
                            <div className="preview__main-item">
                                <h3 className="preview__main-title">Lungime</h3>
                                <p className="preview__main-body">4,9</p>
                            </div>
                            <div className="preview__main-item">
                                <h3 className="preview__main-title">Lățime</h3>
                                <p className="preview__main-body">4,3</p>
                            </div>
                            <div className="preview__main-item">
                                <h3 className="preview__main-title">Înălține</h3>
                                <p className="preview__main-body">1,7</p>
                            </div>
                        </div>
                </div>
                <div className="preview__info">
                    <div className="preview__info-content">
                        <h3 className="preview__info-title">DESCRIERE</h3>
                        <p className="preview__info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac metus ut nulla finibus dictum. Nam venenatis, nisl et dignissim efficitur, risus tortor rhoncus magna, vitae sagittis velit est in nisi. Pellentesque sit amet nunc lacus. Morbi dapibus leo eget nulla tincidunt, eget rutrum eros luctus. Nulla porttitor dictum placerat. Donec volutpat, augue quis aliquet eleifend, augue turpis laoreet nisl, a sollicitudin leo dolor id risus. Nulla tempor enim eu egestas accumsan. Donec lobortis gravida rutrum.</p>
                    </div>
                    <div className="preview__info-content">
                        <h3 className="preview__info-title">SPECIFICAȚII</h3>
                        <div className="preview__info-container">
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">FAȚADE</h3>
                                <p className="preview__info-body">Frasin</p>
                        </div>
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">VITRINE</h3>
                                <p className="preview__info-body">Frigorifică</p>
                        </div>
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">BLAT</h3>
                                <p className="preview__info-body">Lemn</p>
                        </div>
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">BRÂU</h3>
                                <p className="preview__info-body">Sticlă</p>
                        </div>
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">SER. SUB ROLĂ</h3>
                                <p className="preview__info-body">Incorporat</p>
                        </div>
                        <div className="preview__info-item">
                                <h3 className="preview__info-label">FURNITURĂ</h3>
                                <p className="preview__info-body">Lemn</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                <Featured/>
                <About/>
                </div>
            </div>
        </div>
        
    );
}