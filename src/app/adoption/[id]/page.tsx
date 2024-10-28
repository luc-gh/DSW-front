import AdoptionForm from "./AdoptionForm";

const AdoptionFormContainer = (id: Number) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDE4C6] p-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#000000]">
                Adoção de {id.toString()}
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <AdoptionForm {...id} />
            </div>
        </div>
    );
}

export default AdoptionFormContainer;
