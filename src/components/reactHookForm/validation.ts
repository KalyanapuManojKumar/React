export const validationRules = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    },
  },

  role: {
    required: "Role is required",
  },
};
