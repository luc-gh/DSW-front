'use client'

import { Pet } from "@/types"
import PetProfileDialog from "./PetDialog"
import Link from "next/link"

export default function NewPetProfile({id, name,description,imageUrl}:Pet) {
    return(
        <div key={id.toString()} className="bg-[#FFF4C3] border-2 border-[#4CBEB0] rounded-lg flex justify-between items-center p-5 shadow-md">
        <img src={imageUrl} alt={name} className="w-[100px] h-[100px] object-cover rounded-lg" />
        <div className="flex flex-col justify-between items-start flex-1 pl-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex gap-2">
            <PetProfileDialog id={id} name={name} description={description} imageUrl={imageUrl}/>
            <Link href={`/adoption/${id}`}><button className="bg-[#C9A5F9] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#b48be8]">Adotar</button></Link>
          </div>
        </div>
      </div>
    )
}