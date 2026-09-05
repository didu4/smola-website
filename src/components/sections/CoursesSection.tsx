import type { Course } from "../../types";

interface CoursesSectionProps {
  courses: Course[];
}

export const CoursesSection = ({ courses }: CoursesSectionProps) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-center mb-12">
          Программы обучения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-accent rounded-xl overflow-hidden shadow-md"
            >
              {/* Заглушка для фото */}
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
                Фото курса
              </div>
              {/* Текстовая часть */}
              <div className="p-6 text-foreground">
                <h3 className="text-xl md:text-2xl lg:text-[24px] font-bold mb-2">
                  {course.title}
                </h3>
                <p className="text-base md:text-lg lg:text-[18px] mb-2">
                  {course.description}
                </p>
                <p className="text-sm font-medium text-foreground/80">
                  {course.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
