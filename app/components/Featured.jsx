"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import { db } from "../lib/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
export default function Featured() {
    const [kitchens, setKitchens] = useState([]);

    useEffect(() => {
        const fetchKitchens = async () => {
            try {
                const kitchensCollection = collection(db, "kitchen");
                const kitchensSnapshot = await getDocs(kitchensCollection);
                const kitchensList = kitchensSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setKitchens(kitchensList);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchKitchens();
    }, []);
return <section className="info">
    <div className="info__top">
        <div className="info__header">
            <h2 className="info__header-title">CONFIGURARI POPULARE</h2>
            <p className="info__header-text">Pentru cele mai noi noutați, urmăriți-ne în <a href="">Instagram</a></p>
        </div>
    </div>
    <div className="kitchens__list featured">
    {kitchens.slice(0, 2).map(kitchen => (
                    <Link href="/preview" className="kitchens__item" key={kitchen.id}>
                        <Image
                            src={kitchen.imageUrls[kitchen.imageUrls.length - 1]}
                            alt={kitchen.title}
                            width={1400} 
                            height={500}
                        />
                        <h3 className="kitchens__item-name">{kitchen.title}</h3>
                    </Link>
                ))}
    </div>
    <div className="info__top">
        <div className="info__header">
            <h2 className="info__header-title">BUCĂTĂRII СROITORU</h2>
            <p className="info__header-text">Din 2016</p>
        </div>
        <p className="info__header-body">Atelier de bucătării la comandă, produse după tehnologie și standarte Italiene. Orice dimensiune și design, în doar 20 zile cu livrare  absol gratuita. Design Italian. Bucataria ta este aici.</p>
    </div>
    <video className="info__video" autoPlay muted loop src="videos/Bucatarii_Background.mp4"></video>
</section>

}