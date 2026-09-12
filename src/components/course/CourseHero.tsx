import type { Course } from "../../types";
import "../../styles/components/course/course-hero.scss";

interface CourseHeroProps {
  course: Course;
}

export const CourseHero = ({ course }: CourseHeroProps) => {
  return (
    <section className="course-hero">
      <div className="container">
        <div className="course-hero-content">
          <div className="text-block">
            <h1>{course.title}</h1>
            <p className="description">{course.description}</p>
            <p className="duration">Срок обучения: {course.duration}</p>
            <button className="enroll-btn">Записаться на курс</button>
          </div>

          <div className="image-block">
            <div className="image-placeholder">Фото курса</div>
          </div>
        </div>
      </div>
    </section>
  );
};
