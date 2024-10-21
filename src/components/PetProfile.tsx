'use client'

import { Pet } from "@/types"
import Link from "next/link"

export default function PetProfile({id,name,description,imageUrl}:Pet) {
    return(
        <div>
          <img src={imageUrl} alt={description} />
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <Link href={`/adoption/${id}`}/>
        </div>
    )
}