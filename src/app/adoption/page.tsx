// src/app/page.tsx

import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';

const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div className='grid grid-cols-2'>
      {data.map((animal) => (
        <PetProfile {...animal}/>
      ))}
    </div>
  );
};

export default AdoptionPage;
