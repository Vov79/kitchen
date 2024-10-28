"use client";
import placeholder from "@images/Img-15.jpg"
import Image from "next/image"
import { useEffect, useState } from "react";
import { db } from "../lib/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default function Recomended() {
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

return <section className="kitchens">
    <div className="recomended__header">
        <h2 className="recomended__header-title">PROIECTELE NOASTRE</h2>
        <p className="recomended__header-text">Deja peste 2000 de bucătării finisate au fost livrate și instalate în casele clienților noștri și în continuare menținem relații bune.</p>
    </div>
    <div className="kitchens__list">
    {kitchens.map(kitchen => (
                    <Link href={`/preview/${kitchen.id}`} className="kitchens__item" key={kitchen.id}>
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

</section>

}