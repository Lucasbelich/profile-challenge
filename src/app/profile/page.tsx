"use client";

import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Header from "@/components/Header/Header";
import Interests from "@/components/Interests/Interests";
import ModalSuccess from "@/components/UI/ModalSuccess";
import avatar from "../../../public/images/undraw_profile.png";
import styles from "@/app/profile/profile.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProfilePage() {
  const success = useSelector((state: RootState) => state.modal.modalSuccess);
  const user = {
    name: "Lucas Belich",
    profileImage: avatar,
    tag: "Web Developer",
    description:
      "¡Hola! Soy Lucas, desarrollador web.\n Un apasionado de la tecnología, en constante aprendizaje con aplicación práctica de los conocimientos obtenidos. En mi viaje en el mundo de la tecnología, siempre me mantengo actualizado con las últimas novedades.\n Como desarrollador web, he tenido el privilegio de trabajar en diversos proyectos que han perfeccionado mis habilidades tanto en desarrollo front-end como back-end y soft skills.",
    interests: [
      "Desarrollo de aplicaciones web (Desktop - Mobile)",
      "Posicionamiento web (SEO)",
      "Innovación tecnológica",
      "Optimización de rendimiento",
      "Experiencia del usuario (UX)",
      "Automatización de procesos",
      "Seguridad",
    ],
  };

  return (
    <div className={styles.profile__container}>
      <Header
        name={user.name}
        profileImage={user.profileImage}
        tag={user.tag}
      />
      <About description={user.description} />
      <div className={styles.profile__interestContactContainer}>
        <Interests interests={user.interests} />
        <ContactForm />
      </div>
      {success && <ModalSuccess message="Mensaje enviado con éxito" />}
    </div>
  );
}
