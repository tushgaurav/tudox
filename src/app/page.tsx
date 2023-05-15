import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <main className={styles.hero}>
        <h1 className={styles.title}>
          Simplify your life, one task at a time.
        </h1>
        <div className="row">
          <button className="btn">Try Now</button>
          <p className={styles.offer}>Free for students and teachers</p>
        </div>
      </main>
      <section className={styles.feature}>
        <Image
          className={styles.hero_img}
          src="/hero.png"
          width={487}
          height={365}
        />
        <p className={styles.feature_text}>
          The simplest todo app to ever exist. Task management made simple, so
          you can focus on what matters most. Embrace simplicity and unlock your
          full potential.
        </p>
      </section>
    </div>
  );
}
