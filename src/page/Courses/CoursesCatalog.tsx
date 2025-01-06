import FilterTags from "../../components/Courses/FilterTags";
import Search from "../../components/Shared/Navigation/Search";
import CourseCard from "../../components/Courses/CourseCard";
import { useSelector } from "react-redux";
import { useCourses } from "../../redux/coursesSlice";
import { useState, useEffect } from "react";
import { LoadingSkeleton } from "../../components/Shared/LoadingSkeleton";

const CoursesCatalog = () => {
  const courses = useSelector(useCourses);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All courses");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "All courses") return true;
    if (activeFilter === "New courses") return course.isNew;
    return course.category === activeFilter;
  });

  return (
    <div className="width-xl space-y-8 mx-auto px-4 py-8 width-lg mt-10">
      <h2 className="text-3xl font-bold ">Browse all 70+ courses</h2>

      <Search placeholder="Search" className="!rounded-full" />

      <FilterTags
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <h2 className="text-2xl font-bold !mt-16">{activeFilter}</h2>
      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array(17)
              .fill(0)
              .map((_, index) => <LoadingSkeleton key={index} />)
          : filteredCourses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                imageUrl={`assets/images/${course.image}`}
                isNew={course.isNew}
              />
            ))}
      </div>
    </div>
  );
};

export default CoursesCatalog;
