import { api } from "./api";
import { Pet } from "@/types";

export async function getAnimals() {
    const data = await api.get<Pet[]>(`/api/animals`)

    return data.data
}