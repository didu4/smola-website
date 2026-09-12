import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Teacher } from "../../types";
import "../../styles/components/course/course-teacher-section.scss";

interface CourseTeacherSectionProps {
  teacher: Teacher;
}

export const CourseTeacherSection = ({
  teacher,
}: CourseTeacherSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const works = [
    { id: 1, label: "Проект 1" },
    { id: 2, label: "Проект 2" },
    { id: 3, label: "Проект 3" },
    { id: 4, label: "Проект 4" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="course-teacher-section">
      <div className="container">
        <h2>Кто преподает</h2>
        <div className="teacher-grid">
          <div className="teacher-card">
            <div className="teacher-content">
              <div className="teacher-photo">
                {teacher.photo ? (
                  <img src={teacher.photo} alt={teacher.name} />
                ) : (
                  <span>{teacher.name.charAt(0)}</span>
                )}
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
                {teacher.description && (
                  <p className="teacher-description">{teacher.description}</p>
                )}
              </div>
            </div>
          </div>

          <div className="gallery-card">
            <h3>Примеры работ</h3>
            <div className="carousel-wrapper">
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => scroll("left")}
                aria-label="Назад"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="carousel" ref={carouselRef}>
                {works.map((work) => (
                  <div key={work.id} className="carousel-slide">
                    {work.label}
                  </div>
                ))}
              </div>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => scroll("right")}
                aria-label="Вперёд"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
