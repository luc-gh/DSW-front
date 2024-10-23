'use client'

import { Pet } from "@/types"
import Link from "next/link"

export default function PetProfile({id,name,description,imageUrl}:Pet) {
    return(
      <Link href={`/adoption/${id}`} className="bg-slate-200 rounded m-6 h-[400px] w-[350px] max-h-[400px] max-w-[45vw]">
        <div>
          <div className="">
            <img src={imageUrl} alt={description} className="object-cover h-[30vh] w-[30vw]"/>
          </div>
          <div className="bg-white">
            <h2 className="uppercase">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
}