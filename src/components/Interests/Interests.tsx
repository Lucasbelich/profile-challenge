import Image from "next/image";
import star from "../../../public/icons/IconStar.svg";
import styles from "@/styles/Interests.module.css";

interface InterestsProps {
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => (
  <section className={styles.profile__interestContainer}>
    <div className={styles.profile_interestTab}>
      <div className={styles.profile__interestActiveTab}>
        <Image src={star} alt="icon-star" width={20} height={20} />
        <p className={styles.profile_interestTitle}>Mis Intereses</p>
      </div>
    </div>
    <ul className={styles.profile_interestList}>
      {interests.map((interest, index) => (
        <div key={index} className={styles.profile_interestListItem}>
          <li>{interest}</li>
        </div>
      ))}
    </ul>
  </section>
);

export default Interests;
