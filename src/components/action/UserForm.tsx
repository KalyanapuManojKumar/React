import { Form, useNavigation } from "react-router-dom";

import styles from "./UserForm.module.css";

const UserForm = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Create User</h1>

        <Form method="post">
          <div className={styles.formGroup}>
            <label>Name</label>

            <input type="text" name="name" placeholder="Enter name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create User"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
