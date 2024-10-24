// src/app/page.tsx

import PetProfileDialog from '@/components/PetDialog';
import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';

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

export default AdoptionPage;
