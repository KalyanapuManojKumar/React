import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  role: Yup.string().required("Please select a role"),
});
