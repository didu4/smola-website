import { Link } from "react-router-dom";
import type { Course } from "../../types";
import "../../styles/components/courses.scss";

interface CoursesSectionProps {
  courses: Course[];
}

export const CoursesSection = ({ courses }: CoursesSectionProps) => {
  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2 className="section-title">Программы обучения</h2>
        <div className="grid">
          {courses.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              className="course-card"
            >
              <div className="image">Фото курса</div>
              <div className="content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="duration">{course.duration}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
