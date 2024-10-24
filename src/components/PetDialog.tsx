'use client'

import { Pet } from '@/types';
import * as Dialog from '@radix-ui/react-dialog'
import PetProfile from './PetProfile';
import React from 'react';

export default function PetProfileDialog({ id, name, description, imageUrl }:Pet) {

	const [showInput, setShowInput] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)

	const onOpenChange = (isOpen: boolean) => {
		setIsOpen(isOpen)
	}

    return (
        <Dialog.Dialog>
			<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
		    <Dialog.Trigger asChild>
                <button><PetProfile key={id.toString()} name={name} description={description} imageUrl={imageUrl}/></button>
            </Dialog.Trigger>
		    <Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
				<Dialog.Title>{name}</Dialog.Title>
				<Dialog.Description>{description}</Dialog.Description>
				<Dialog.Close asChild>
					<button className='bg-red-500 text-white p-2 rounded'>Continuar Navegando...</button>
				</Dialog.Close>
				<Dialog.Close asChild>
					<button className='bg-green-700 text-white p-2 rounded'>Adotar!</button>
				</Dialog.Close>
			</Dialog.Content>
		    </Dialog.Portal>
			</Dialog.Root>
	    </Dialog.Dialog>
    )
}