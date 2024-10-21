'use client'

import { Pet } from "@/types"
import Link from "next/link"

export default function PetProfile({id,name,description,imageUrl}:Pet) {
    return(
      <Link href={`/adoption/${id}`}>
        <div className="h-[40%] w-[40%]">
          <img src={imageUrl} alt={description} className="w-10 h-10"/>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
}