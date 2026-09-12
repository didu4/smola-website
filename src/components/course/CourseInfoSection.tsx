import type { Course } from "../../types";
import "../../styles/components/course/course-info.scss";

interface CourseInfoSectionProps {
  course: Course;
}

export const CourseInfoSection = ({ course }: CourseInfoSectionProps) => {
  return (
    <section className="course-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <h2>Чему вы научитесь</h2>
            <ul className="skills-list">
              {course.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h2>Кому подойдёт</h2>
            <ul className="audience-list">
              {course.audience.map((item, index) => (
                <li key={index}>
                  <span className="audience-title">{item.title}</span>
                  <span className="audience-description">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
