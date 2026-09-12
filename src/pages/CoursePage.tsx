import { useParams } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CourseHero } from "../components/course/CourseHero";
import { CourseDescription } from "../components/course/CourseDescription";
import { CourseInfoSection } from "../components/course/CourseInfoSection";
import { CourseTeacherSection } from "../components/course/CourseTeacherSection";
import { courses } from "../data/courses";
import { teachers } from "../data/teachers";

export const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === Number(id));
  const teacher = teachers.find((t) => t.id === course?.teacherId);

  if (!course || !teacher) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <h1>Курс не найден</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CourseHero course={course} />
        <CourseDescription course={course} />
        <CourseInfoSection course={course} />
        <CourseTeacherSection teacher={teacher} />
      </main>
      <Footer />
    </div>
  );
};
