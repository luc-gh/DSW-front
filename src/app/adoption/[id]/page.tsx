import AdoptionForm from "./AdoptionForm";

const AdoptionFormContainer = (id: Number) => {
    return (
        <div>
            <h2>Adoção de {id.toString()}</h2>
            <AdoptionForm {...id}/>
        </div>
    )
}

export default AdoptionFormContainer;