import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { CoursesSection } from "../components/sections/CoursesSection";
import { TeachersSection } from "../components/sections/TeachersSection";
import { BookingSection } from "../components/sections/BookingSection";
import { courses } from "../data/courses";
import { teachers } from "../data/teachers";

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CoursesSection courses={courses} />
        <TeachersSection teachers={teachers} />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};
