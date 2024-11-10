import FilterTags from "../../components/Courses/FilterTags";
import Search from "../../components/Shared/Navigation/Search";
import CourseCard from "../../components/Courses/CourseCard";
import { useSelector } from "react-redux";
import { useCourses } from "../../redux/courses";

const CoursesCatalog = () => {
  const courses = useSelector(useCourses);

  return (
    <div className="width-xl space-y-8 mx-auto px-4 py-8 width-lg mt-10">
      <h2 className="text-3xl font-bold ">Browse all 70+ courses</h2>

      <Search placeholder="Search" className="!rounded-full" />

      <FilterTags />

      <h2 className="text-2xl font-bold !mt-16">New courses</h2>
      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            imageUrl={`/src/assets/images/${course.image}`}
            isNew={course.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesCatalog;
