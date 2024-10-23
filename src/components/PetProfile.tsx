'use client'

import { Pet } from "@/types"
import Link from "next/link"

export default function PetProfile({id,name,description,imageUrl}:Pet) {
    return(
      <Link href={`/adoption/${id}`} className="">
        <div className="h-[500px] w-[400px] overflow">
          <img src={imageUrl} alt={description} className="h-50 w-50"/>
          <div className="bg-white">
            <h2 className="uppercase">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
}