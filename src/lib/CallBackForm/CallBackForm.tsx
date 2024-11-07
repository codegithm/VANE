import React, { useState } from "react";
import styles from "./CallBackForm.module.css";
import { sendEmail } from "../../utils/email";
import Loader from "../Loader/Loader";

interface FormData {
  name: string;
  phone: string;
}

const CallBackForm: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "" });
  const [isLoading, seIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    seIsLoading(true);
    try {
      await sendEmail(formData);
      seIsLoading(false);
      setFormData({ name: "", phone: "" });
    } catch {
      seIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isLoading ? <Loader /> : ""}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      {children}
    </form>
  );
};

export default CallBackForm;
