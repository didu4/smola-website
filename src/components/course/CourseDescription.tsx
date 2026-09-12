import type { Course } from "../../types";
import "../../styles/components/course/course-description.scss";

interface CourseDescriptionProps {
  course: Course;
}

export const CourseDescription = ({ course }: CourseDescriptionProps) => {
  return (
    <section className="course-description">
      <div className="container">
        <h2>О курсе</h2>
        <div className="description-text">
          {course.fullDescription.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
