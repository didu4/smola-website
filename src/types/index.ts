export interface Teacher {
  id: number;
  name: string;
  role: string;
  photo?: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  teacherId: number;
  fullDescription: string;
  skills: string[];
  audience: { title: string; description: string }[];
}
