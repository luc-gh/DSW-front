// src/app/page.tsx

import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';

const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div className=''>
      <div className='w-[90%] grid grid-cols-4 gap-10 bg-slate-50 rounded'>
        {data.map((animal) => (
          <PetProfile key={animal.id.toString()} {...animal}/>
        ))}
      </div>
    </div>
  );
};

export default AdoptionPage;
