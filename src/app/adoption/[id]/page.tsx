import AdoptionForm from "./AdoptionForm";
import { getAnimals } from "@/server/animals";

const AdoptionFormContainer = async ({
    params
}: {
    params: {id: Number}
}) => {

    //get animals list to get selected one (temporary)
    const anima =  await getAnimals()
    const animal = anima.find((a) => a.id == params.id)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDE4C6] p-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#000000]">
                Adoção de {animal?.name}
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <AdoptionForm {...params.id} />
            </div>
        </div>
    );
}

export default AdoptionFormContainer;
