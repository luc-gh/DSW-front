'use client'

import { Pet } from "@/types"
import Link from "next/link"

export default function PetProfile({name,description,imageUrl}:Omit<Pet, 'id'>) {
    return(
      <div className="h-[400px] w-[350px] max-h-[400px]">
          <div className="overflow-hidden">
            <img src={imageUrl} alt={description} className="object-cover h-[30vh] w-[30vw] transition duration-300 ease-in-out transform hover:scale-125"/>
          </div>
          <div className="bg-white">
            <h2 className="uppercase">{name}</h2>
            <p>{description}</p>
          </div>
      </div>
    )
}