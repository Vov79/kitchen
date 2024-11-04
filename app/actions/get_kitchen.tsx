"use server";
import { db } from "../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import type { Kitchen } from "@//types/Kitchen";

export const getKitchensData = async (id: string): Promise<Kitchen | null> => {
  try {
    const kitchenDoc = doc(db, "kitchen", id); 
    const kitchenSnapshot = await getDoc(kitchenDoc);

    if (kitchenSnapshot.exists()) {
      return {
        id: kitchenSnapshot.id,
        ...kitchenSnapshot.data(),
      } as Kitchen;
    } else {
      console.error("Кухня не найдена");
      return null; 
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return null; 
  }
};
