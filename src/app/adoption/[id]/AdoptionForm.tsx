'use client'

import {useForm, SubmitHandler} from 'react-hook-form'

type AdoptionFormData = {
    name: string;
    email: string;
    phone: string;
    animal_id: string;
}

const AdoptionForm = (id:Number) => {

    const {register, handleSubmit} = useForm<AdoptionFormData>();
    return (
        <form>
            <label>Nome:</label>
            <input type="text" required {...register("name")}/>
            <label>Email:</label>
            <input type="email" required {...register("email")}/>
            <label>Telefone:</label>
            <input type="tel" required {...register("phone")}/>
            <input type="hidden" name="animal_id" value={id.toString()}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default AdoptionForm;