export interface CourseT {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
}

export const courseRecommendedData: CourseT[] = [
  {
    id: "1",
    title: "Logic",
    category: "Math",
    isNew: true,
    image: "logic.png",
    progress: 0,
  },
  {
    id: "2",
    title: "CS",
    category: "Computer Science",
    isNew: false,
    image: "cs.png",
    progress: 0,
  },
  {
    id: "3",
    title: "Maths",
    category: "Math",
    isNew: true,
    image: "maths.png",
    progress: 0,
  },
  {
    id: "4",
    title: "Data Science",
    category: "Data",
    isNew: false,
    image: "ds.png",
    progress: 0,
  },
];

export const courses: CourseT[] = [
  {
    id: "5",
    title: "How LLMs Work",
    category: "Computer Science",
    isNew: true,
    image: "llm.png",
    progress: 0,
  },
  {
    id: "6",
    title: "Designing Programs",
    category: "Computer Science",
    isNew: true,
    image: "design.png",
    progress: 0,
  },
  {
    id: "7",
    title: "Data Structures",
    category: "Computer Science",
    isNew: false,
    image: "ds.png",
    progress: 0,
  },
  {
    id: "8",
    title: "Linear Algebra",
    category: "Math",
    isNew: false,
    image: "algebra.png",
    progress: 0,
  },
  {
    id: "9",
    title: "Calculus",
    category: "Math",
    isNew: true,
    image: "calculus.png",
    progress: 0,
  },
  {
    id: "10",
    title: "Applied Python",
    category: "Computer Science",
    isNew: true,
    image: "python.png",
    progress: 0,
  },
  {
    id: "11",
    title: "AI for Everyone",
    category: "Computer Science",
    isNew: true,
    image: "ai.png",
    progress: 0,
  },
  {
    id: "12",
    title: "Machine Learning",
    category: "Computer Science",
    isNew: false,
    image: "ml.png",
    progress: 0,
  },
  {
    id: "13",
    title: "Computer Vision",
    category: "Science",
    isNew: true,
    image: "cv.png",
    progress: 0,
  },
  ...courseRecommendedData,
];
