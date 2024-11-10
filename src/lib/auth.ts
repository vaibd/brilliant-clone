export const emailValidate = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
};

export const passwordValidate = (password: string) => {
  if (password?.length < 6) return "Password must be at least 6 characters";
};

export const emptyFieldValidate = (data: object) => {
  if (Object.values(data).some((field) => field === "")) {
    return "All fields are required";
  }
};
