// src/app/page.tsx

import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';

const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div className='grid grid-cols-2 gap-10'>
      {data.map((animal) => (
        <PetProfile key={animal.id.toString()} {...animal}/>
      ))}
    </div>
  );
};

export default AdoptionPage;
