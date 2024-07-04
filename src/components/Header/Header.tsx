import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Header.module.css";

interface HeaderProps {
  name: string;
  profileImage: string | StaticImageData;
  tag: string;
}

const Header: React.FC<HeaderProps> = ({ name, profileImage, tag }) => (
  <section className={styles.profile__header}>
    <div className={styles.profile__headerBackgroundContainer}>
      <div className={styles.profile__headerBackground}>
        <p className={styles.profile__headerBackgroundTag}>{tag}</p>
      </div>
      <div className={styles.profile__headerAvatarContainer}>
        <Image
          className={styles.profile_headerAvatar}
          src={profileImage}
          alt="avatar"
          width={190}
          height={190}
          priority={true}
        />
      </div>
    </div>
    <div className={styles.profile__headerUsername}>
      <p>{name}</p>
    </div>
  </section>
);

export default Header;
