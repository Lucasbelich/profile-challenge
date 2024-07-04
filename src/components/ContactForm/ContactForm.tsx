"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import iconEmail from "../../../public/icons/IconEmail.svg";
import iconWarning from "../../../public/icons/IconWarning.svg";
import styles from "@/styles/ContactForm.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useDispatch } from "react-redux";
import { setModalSuccess } from "@/redux/modalSlice";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name) {
      newErrors.name = "El nombre es requerido.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "El email es requerido.";
    } else if (!emailPattern.test(form.email)) {
      newErrors.email = "El email ingresado no es válido.";
    }
    if (!form.message) {
      newErrors.message = "No puedes enviar un mensaje vacío.";
    } else if (form.message.length > 300) {
      newErrors.message = "El mensaje no puede tener más de 300 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      dispatch(setModalSuccess(true));
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
      dispatch(setModalSuccess(false));
    }
  };

  return (
    <section className={styles.profile__contactContainer}>
      <div className={styles.profile__contactTab}>
        <div className={styles.profile__contactActiveTab}>
          <Image src={iconEmail} alt="contact-icon" width={20} height={20} />
          <p className={styles.profile__contactTitle}>Contacto</p>
        </div>
      </div>
      <form className={styles.profile_contactForm} onSubmit={handleSubmit}>
        <div className={styles.profile__contactInputContainer}>
          <label htmlFor="name">Nombre</label>
          <input
            className={poppins.className}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingresa su nombre"
          />
          {errors.name && (
            <span className={styles.error}>
              <Image src={iconWarning} alt="warning" width={16} height={16} />
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.profile__contactInputContainer}>
          <label htmlFor="email">Email</label>
          <input
            className={poppins.className}
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingresa su email"
          />
          {errors.email && (
            <span className={styles.error}>
              <Image src={iconWarning} alt="warning" width={16} height={16} />
              {errors.email}
            </span>
          )}
        </div>
        <div className={styles.profile__contactTextareaContainer}>
          <div className={styles.profile__contactTextareaLabel}>
            <label htmlFor="message">Mensaje</label>
            <span>Max. 300 caracteres</span>
          </div>
          <div className={styles.profile__contactTextarea}>
            <textarea
              className={poppins.className}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ingresa su mensaje"
            />
            <span>{form.message.length}/300</span>
          </div>
          {errors.message && (
            <span className={styles.error}>
              <Image src={iconWarning} alt="warning" width={16} height={16} />
              {errors.message}
            </span>
          )}
        </div>

        <button
          className={`${styles.profile_sendButton} ${poppins.className}`}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
