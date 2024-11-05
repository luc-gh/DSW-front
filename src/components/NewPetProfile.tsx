'use client';

import { Pet } from "@/types";
import PetProfileDialog from "./PetDialog";
import Link from "next/link";

export default function NewPetProfile({ id, name, description, imageUrl }: Pet) {
    return (
        <div className="bg-[#FFF4C3] border-2 border-[#4CBEB0] rounded-lg p-5 shadow-md flex flex-col items-center">
            <img src={imageUrl} alt={name} className="w-[150px] h-[150px] object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2 text-center">{name}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
            <div className="flex gap-2 w-full justify-center">
                <PetProfileDialog id={id} name={name} description={description} imageUrl={imageUrl} />
                <Link href={`/adoption/${id}`}>
                    <button className="bg-[#C9A5F9] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#b48be8]">
                        Adotar
                    </button>
                </Link>
            </div>
        </div>
    );
}
