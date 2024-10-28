'use client'
import About from '@//components/About';
import Featured from '@//components/Featured';
import Form from '@//components/Form';
import placeholder from "@images/Img-15.jpg"
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "@//lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface KitchenData {
    title: string;
    description: string;
    price: number;
    length: number;
    width: number;
    height: number;
    imageUrls: string[];
    facades: string;
    displayCases: string;
    countertop: string;
    moldings: string;
    underRoller: string;
    fittings: string;
    blat: string;
    producer: string;
}

export default function Preview({ params }: { params: { id: string } }) {
    const [kitchen, setKitchen] = useState<KitchenData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKitchenData = async () => {
            try {
                const kitchenDoc = doc(db, "kitchen", params.id);
                const kitchenSnap = await getDoc(kitchenDoc);

                if (kitchenSnap.exists()) {
                    setKitchen(kitchenSnap.data() as KitchenData);
                } else {
                    console.error("Кухня не найдена");
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных о кухне:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchKitchenData();
    }, [params.id]);
    return(
        
        <div>
            <div className="preview__head">
                <h1 className='preview__head-title'>{kitchen?.title}</h1>
                <Form withKitchen buttonClassName="preview-form">
                COMANDĂ APEL
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96949 8.34296C10.2624 8.05007 10.7373 8.05007 11.0301 8.34296L15.0301 12.343C15.323 12.6359 15.323 13.1107 15.0301 13.4036L11.0301 17.4036C10.7373 17.6965 10.2624 17.6965 9.96949 17.4036C9.67659 17.1107 9.67659 16.6359 9.96949 16.343L13.4392 12.8733L9.96949 9.40362C9.67659 9.11073 9.67659 8.63585 9.96949 8.34296Z" fill="white"/>
            </svg>
        </Form>
            </div>
            <div className="app preview">
            <div className='preview__images'>
                    {kitchen?.imageUrls.map((url, index) => (
                        <div className={`preview__images-item item_${index + 1}`} key={index}>
                            <Image className="preview__images-image" src={url || placeholder} alt={kitchen.title} width={1400} height={500} />
                        </div>
                    ))}
                </div>
                <div className="preview__main">
                    <div className="preview__main-container">
                        <div className="preview__main-item">
                            <h3 className="preview__main-title">PREȚ</h3>
                            <p className="preview__main-body">{kitchen?.price} MDL</p>
                        </div>
                    </div>
                    <div className="preview__main-container">
                        <div className="preview__main-item">
                            <h3 className="preview__main-title">Lungime</h3>
                            <p className="preview__main-body">{kitchen?.length}</p>
                        </div>
                        <div className="preview__main-item">
                            <h3 className="preview__main-title">Lățime</h3>
                            <p className="preview__main-body">{kitchen?.width}</p>
                        </div>
                        <div className="preview__main-item">
                            <h3 className="preview__main-title">Înălține</h3>
                            <p className="preview__main-body">{kitchen?.height}</p>
                        </div>
                    </div>
                </div>
                <div className="preview__info">
                    <div className="preview__info-content">
                        <h3 className="preview__info-title">DESCRIERE</h3>
                        <p className="preview__info-description">{kitchen?.description}</p>
                    </div>
                    <div className="preview__info-content">
                        <h3 className="preview__info-title">SPECIFICAȚII</h3>
                        <div className="preview__info-container">
                            <div className="preview__info-item">
                                <h3 className="preview__info-label">FAȚADE</h3>
                                <p className="preview__info-body">{kitchen?.facades}</p>
                            </div>
                            <div className="preview__info-item">
                                <h3 className="preview__info-label">PRODUCATOR</h3>
                                <p className="preview__info-body">{kitchen?.producer}</p>
                            </div>
                            <div className="preview__info-item">
                                <h3 className="preview__info-label">BLAT</h3>
                                <p className="preview__info-body">{kitchen?.blat}</p>
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