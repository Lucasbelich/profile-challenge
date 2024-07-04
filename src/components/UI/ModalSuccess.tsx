"use client";

import Image from "next/image";
import success from "../../../public/icons/IconSuccess.svg";
import cross from "../../../public/icons/IconCross.svg";
import styles from "@/styles/UI/ModalSuccess.module.css";
import { setModalSuccess } from "@/redux/modalSlice";
import { useDispatch } from "react-redux";

interface ModalSuccessProps {
  message: string;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({ message }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModalSuccess(false));
  };

  return (
    <div className={styles.success__Container}>
      <div>
        <Image src={success} alt="success" width={24} height={24} />
        <p>{message}</p>
      </div>
      <Image src={cross} alt="close" width={24} height={24} onClick={onClose} />
    </div>
  );
};

export default ModalSuccess;
