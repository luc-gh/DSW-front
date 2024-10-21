// src/app/page.tsx

import styles from './adoption.module.css';
import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';
// const animals = [
//   {
//     id: 1,
//     name: 'Fido',
//     description: 'Um cachorro amigável e brincalhão.',
//     imageUrl: '/images/dog1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Whiskers',
//     description: 'Um gato carinhoso e independente.',
//     imageUrl: '/images/cat1.jpg',
//   },
//   {
//     id: 3,
//     name: 'Rex',
//     description: 'Um cachorro leal e protetor.',
//     imageUrl: '/images/dog2.jpg',
//   },
//   {
//     id: 4,
//     name: 'Mittens',
//     description: 'Uma gata curiosa e energética.',
//     imageUrl: '/images/cat2.jpg',
//   },
// ];

const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div className={styles.container}>
      {data.map((animal) => (
        <PetProfile {...animal}/>
      ))}
    </div>
  );
};

export default AdoptionPage;
