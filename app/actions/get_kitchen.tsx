"use server";
import { db } from "../lib/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { Kitchen } from "@//types/Kitchen";

export const getKitchensData = async (title: string): Promise<Kitchen | null> => {
  try {
    const kitchensCollection = collection(db, "kitchen");
    const kitchensQuery = query(kitchensCollection, where("title", "==", title));
    const querySnapshot = await getDocs(kitchensQuery);

    if (!querySnapshot.empty) {
      const kitchenDoc = querySnapshot.docs[0];
      return {
        id: kitchenDoc.id,
        ...kitchenDoc.data(),
      } as Kitchen;
    } else {
      console.error("Error");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
