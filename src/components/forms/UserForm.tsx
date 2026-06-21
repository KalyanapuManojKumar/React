import { useState, type ChangeEvent, type FormEvent } from "react";

import styles from "./UserForm.module.css";

import type { UserFormData } from "./types";

const Form = () => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    role: "",
  });

  const [submittedUser, setSubmittedUser] = useState<UserFormData | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmittedUser(formData);

    setFormData({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.heading}>User Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>

              <option value="Frontend Developer">Frontend Developer</option>

              <option value="Backend Developer">Backend Developer</option>

              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>

      {submittedUser && (
        <div className={styles.userCard}>
          <h2>User Details</h2>

          <p>
            <strong>Name:</strong> {submittedUser.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedUser.email}
          </p>

          <p>
            <strong>Role:</strong> {submittedUser.role}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
