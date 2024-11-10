import { useSelector } from "react-redux";
import CourseCard from "../../components/Home/CourseCard";
import JumpBack from "../../components/Home/JumpBack";
import StreakCard from "../../components/Home/StreakCard";
import XPCard from "../../components/Home/XPCard";
import { useRecommendedCourses } from "../../redux/homeSlice";

const days = ["T", "W", "Th", "F", "S"];

const Home = () => {
  const recommendedCourses = useSelector(useRecommendedCourses);

  return (
    <div className="my-10 width-lg mx-auto p-6">
      <div className="smLaptop:flex gap-8">
        {/* Left Column */}
        <div className="space-y-6 smLaptop:w-[40%]">
          <h2 className="text-xl font-bold">Welcome, Alex</h2>
          <StreakCard streakCount={1} remainingProblems={3} days={days} />
          <XPCard currentXP={70} targetXP={175} />
        </div>

        {/* Right Column */}
        <div className="space-y-6 smLaptop:w-[60%]">
          <h2 className="max-smLaptop:mt-10 text-xl font-bold">Jump back in</h2>
          <JumpBack
            imageUrl="/src/assets/images/science-banner.png"
            category="SCIENCE"
            level={1}
            title="Scientific Thinking"
          />

          {/* Recommended Section */}
          <div>
            <h2 className="max-smLaptop:mt-10 text-xl font-bold mb-4">Recommended for you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 smLaptop:grid-cols-3 gap-4">
              {recommendedCourses.map((item) => (
                <CourseCard
                  key={item.title}
                  title={item.title}
                  icon={`/src/assets/images/${item.image}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
