import type { Teacher } from "../../types";
import "../../styles/components/teachers.scss";

interface TeachersSectionProps {
  teachers: Teacher[];
}

export const TeachersSection = ({ teachers }: TeachersSectionProps) => {
  return (
    <section className="teachers">
      <div className="container">
        <h2 className="section-title">Преподаватели</h2>
        <div className="grid">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="avatar">
                {teacher.photo ? (
                  <img src={teacher.photo} alt={teacher.name} />
                ) : (
                  teacher.name.charAt(0)
                )}
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
