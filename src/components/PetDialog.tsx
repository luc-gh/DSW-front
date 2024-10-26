'use client'

import { Pet } from '@/types';
import * as Dialog from '@radix-ui/react-dialog'
import { PawPrint } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function PetProfileDialog({ id, name, description, imageUrl }:Pet) {

	const [isOpen, setIsOpen] = React.useState(false)

	const onOpenChange = (isOpen: boolean) => {
		setIsOpen(isOpen)
	}

    return (
        <Dialog.Dialog>
			<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
		    <Dialog.Trigger asChild>
				<button className="bg-[#C9A5F9] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#b48be8]">Detalhes</button>
            </Dialog.Trigger>
		    <Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
			    <img src={imageUrl} alt={name} className="w-[500px] h-[500px] object-cover rounded-lg" />
				<Dialog.Title>{name}</Dialog.Title>
				<Dialog.Description>{description}</Dialog.Description>
				<div className="mt-5 place-content-end flex gap-2">
					<Dialog.Close asChild>
						<button className='bg-red-500 text-white p-2 rounded'>Continuar Navegando...</button>
					</Dialog.Close>
					<Dialog.Close asChild>
						<button className='flex bg-green-700 text-white p-2 rounded'><Link className='flex' href={`/adoption/${id}`}><PawPrint className='p-1' size={25} color='#FFF'/>Adotar!</Link></button>
					</Dialog.Close>
				</div>
			</Dialog.Content>
		    </Dialog.Portal>
			</Dialog.Root>
	    </Dialog.Dialog>
    )
}
