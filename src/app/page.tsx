import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* typing animation */}
       <h1>HELLO WORLD, I'M STAN RAINIER SALAZAR</h1>
      </main>

    </div>
  );
}
