import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./ReactHookForm.module.css";

import type { UserFormData } from "./types";
import { validationRules } from "./validation";

const ReactHookForm = () => {
  const [submittedUser, setSubmittedUser] = useState<UserFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<UserFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
  });

  const onSubmit = async (data: UserFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmittedUser(data);

    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.heading}>React Hook Form Example</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter Name"
              {...register("name", validationRules.name)}
            />

            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", validationRules.email)}
            />

            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Role</label>

            <select {...register("role", validationRules.role)}>
              <option value="">Select Role</option>

              <option value="Frontend">Frontend Developer</option>

              <option value="Backend">Backend Developer</option>

              <option value="Full Stack">Full Stack Developer</option>
            </select>

            {errors.role && (
              <span className={styles.error}>{errors.role.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={styles.submitBtn}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
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

export default ReactHookForm;
