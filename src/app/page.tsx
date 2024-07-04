import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/icons/IconArrow.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home__container}>
      <p>Bienvenido!</p>
      <p>Profile Challenge</p>
      <p>Lucas Belich dev</p>
      <Link className={styles.home__button} href="/profile">
        Ir al perfil
        <Image src={arrow} alt="arrow" width={20} height={20} />
      </Link>
    </div>
  );
}
