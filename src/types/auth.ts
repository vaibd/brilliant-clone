export type SignupFormValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
};

export type Course = {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
};

export type User = {
  email: string;
  name?: string;
  currentCourse?: Course;
  age: number;
};
