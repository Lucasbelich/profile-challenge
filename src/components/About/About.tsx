import styles from "@/styles/About.module.css";

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => (
  <section className={styles.profile__aboutContainer}>
    <p>Sobre mí</p>
    <p>{description}</p>
  </section>
);

export default About;
