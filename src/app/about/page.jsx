import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <p>
          About Page
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
