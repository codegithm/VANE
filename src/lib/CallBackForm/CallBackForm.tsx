import React, { useState } from "react";
import styles from "./CallBackForm.module.css";

interface FormData {
  name: string;
  phone: string;
}

const CallBackForm: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid
      console.log("Form submitted:", formData);
    } else {
      // Set errors
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      {children}
    </form>
  );
};

export default CallBackForm;
