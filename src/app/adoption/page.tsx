// src/app/page.tsx

import NewPetProfile from '@/components/NewPetProfile';
import PetProfileDialog from '@/components/PetDialog';
import { getAnimals } from '@/server/animals';
/*
const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div>
      <div>
        <h3 className='font-bold'>Adoção de Animais</h3>
        <p>Veja a lista de animais disponíveis para adoção.</p>
      </div>
      <div className='max-w-[90%] max-h-[85%] mr-[5%] ml-[5%] grid grid-cols-2 overflow-hidden gap-10 bg-slate-50'>
        {data.map((animal) => (
          <PetProfileDialog key={animal.id.toString()} {...animal}/>
        ))}
      </div>
    </div>
  );
};

export default AdoptionPage
*/

// import PetProfileDialog from '@/components/PetDialog';
// import PetProfile from '@/components/PetProfile';
// import { getAnimals } from '@/server/animals';

const AdoptionPage = async () => {
  const data = await getAnimals();

  return (
      <div className="max-w-screen-lg mx-auto px-4">
          <div className="mb-8 text-center">
              <h3 className='font-bold text-2xl'>Sessão de Adoção</h3>
              <p className='text-gray-700'>Veja a lista de animais disponíveis para adoção.</p>
          </div>

          <div className='grid grid-cols-1 max-h-[85vh] overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-slate-50 p-5 rounded-lg shadow-md'>
              {data.map((animal) => (
                  <NewPetProfile key={animal.id.toString()} {...animal} />
              ))}
          </div>
      </div>
  );
};

export default AdoptionPage;
