import type { Teacher } from "../../types";

interface TeachersSectionProps {
  teachers: Teacher[];
}

export const TeachersSection = ({ teachers }: TeachersSectionProps) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-center mb-12">
          Преподаватели
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="text-center">
              {/* Аватар-заглушка */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-500">
                {teacher.name.charAt(0)}
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold">
                {teacher.name}
              </h3>
              <p className="text-sm md:text-base lg:text-[16px] text-foreground/80 mt-1">
                {teacher.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
