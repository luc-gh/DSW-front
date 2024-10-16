import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/adoption/page">
          <Image
            src="/images/acolhepetremovebg.png"
            alt="Descrição da Imagem"
            width={400}  // Diminuído o tamanho da imagem
            height={266} // Mantém a proporção
            className={styles.image}
          />
        </Link>
        <p className={styles.subtitle}>Adote Amor, Mude uma Vida!</p>
        <Link href="/adoption" className={styles.button}>
          Veja a lista de animais disponíveis para adoção
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
