import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./UserFormik.module.css";

import { userSchema } from "./userSchema";

import type { UserFormValues } from "./user.types";

const initialValues: UserFormValues = {
  name: "",
  email: "",
  role: "",
};

const UserFormik = () => {
  const [submittedUser, setSubmittedUser] = useState<UserFormValues | null>(
    null,
  );

  const handleSubmit = async (
    values: UserFormValues,
    {
      resetForm,
      setSubmitting,
    }: {
      resetForm: () => void;
      setSubmitting: (isSubmitting: boolean) => void;
    },
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmittedUser(values);

      resetForm();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.heading}>Formik + Yup Example</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          {({ touched, errors, isSubmitting, isValid }) => (
            <Form>
              <div className={styles.formGroup}>
                <label>Name</label>

                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className={`${styles.input} ${
                    touched.name && errors.name ? styles.errorInput : ""
                  }`}
                />

                <ErrorMessage
                  name="name"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email</label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className={`${styles.input} ${
                    touched.email && errors.email ? styles.errorInput : ""
                  }`}
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Role</label>

                <Field
                  as="select"
                  name="role"
                  className={`${styles.input} ${
                    touched.role && errors.role ? styles.errorInput : ""
                  }`}
                >
                  <option value="">Select Role</option>

                  <option value="Frontend">Frontend Developer</option>

                  <option value="Backend">Backend Developer</option>

                  <option value="FullStack">Full Stack Developer</option>
                </Field>

                <ErrorMessage
                  name="role"
                  component="span"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
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

export default UserFormik;
