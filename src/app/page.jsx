import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>
        Creative Thoughts Agency.
      </h1>
      <p>
        We are a creative agency that helps brands to achieve their goals.
      </p>

      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="" fill/>
    </div>
  </div>;
};

export default Home;