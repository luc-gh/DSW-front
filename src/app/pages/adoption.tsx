// src/app/adoption.tsx

import styles from './adoption.module.css';

const animals = [
  {
    id: 1,
    name: 'Fido',
    description: 'Um cachorro amigável e brincalhão.',
    imageUrl: '/images/dog1.jpg',
  },
  {
    id: 2,
    name: 'Whiskers',
    description: 'Um gato carinhoso e independente.',
    imageUrl: '/images/cat1.jpg',
  },
  {
    id: 3,
    name: 'Rex',
    description: 'Um cachorro leal e protetor.',
    imageUrl: '/images/dog2.jpg',
  },
  {
    id: 4,
    name: 'Mittens',
    description: 'Uma gata curiosa e energética.',
    imageUrl: '/images/cat2.jpg',
  },
];

const AdoptionPage = () => {
  return (
    <div className={styles.container}>
      {animals.map((animal) => (
        <div key={animal.id} className={styles.card}>
          <img src={animal.imageUrl} alt={animal.name} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{animal.name}</h2>
            <p className={styles.cardDescription}>{animal.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdoptionPage;
