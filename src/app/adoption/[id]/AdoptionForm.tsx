'use client'

import { useForm } from 'react-hook-form';

type AdoptionFormData = {
    name: string;
    email: string;
    phone: string;
    animal_id: string;
}

const AdoptionForm = (id: Number) => {
    const { register, handleSubmit } = useForm<AdoptionFormData>();

    return (
        <form className="space-y-4" onSubmit={handleSubmit(data => console.log(data))}>
            <div>
                <label className="block text-sm font-medium text-gray-700">Nome:</label>
                <input 
                    type="text" 
                    required 
                    {...register("name")} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#4CBEB0] focus:border-[#4CBEB0]" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <input 
                    type="email" 
                    required 
                    {...register("email")} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#4CBEB0] focus:border-[#4CBEB0]" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Telefone:</label>
                <input 
                    type="tel" 
                    required 
                    {...register("phone")} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#4CBEB0] focus:border-[#4CBEB0]" 
                />
            </div>
            <input type="hidden" name="animal_id" value={id.toString()} />
            <button 
                type="submit" 
                className="w-full py-2 px-4 bg-[#C9A5F9] text-white font-semibold rounded-md shadow hover:bg-[#3BAF9B] focus:outline-none focus:ring-2 focus:ring-[#3BAF9B] focus:ring-opacity-50"
            >
                Enviar
            </button>
        </form>
    );
}

export default AdoptionForm;
