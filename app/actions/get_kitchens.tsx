"use server"
import { db } from "../lib/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import type { Kitchen } from "@//types/Kitchen";

export const getKitchensData = async (): Promise<{ kitchens: Kitchen[] }> => {
  let kitchens: Kitchen[] = [];

  try {
    const kitchensCollection = collection(db, "kitchen");
    const kitchensSnapshot = await getDocs(kitchensCollection);
    kitchens = kitchensSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Kitchen[];
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }

  return { kitchens };
};
