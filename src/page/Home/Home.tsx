import CourseCard from "../../components/Home/CourseCard";
import JumpBack from "../../components/Home/JumpBack";
import StreakCard from "../../components/Home/StreakCard";
import XPCard from "../../components/Home/XPCard";

const Home = () => {
  const days = ["T", "W", "Th", "F", "S"];

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
            imageUrl="/path-to-your-satellite-image.png"
            category="SCIENCE"
            level={1}
            title="Scientific Thinking"
          />

          {/* Recommended Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recommended for you</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "Logic", icon: "⚪", color: "blue" },
                {
                  title: "Computer Science Fundamentals",
                  subtitle: "CS & PROGRAMMING · LEVEL 2",
                  icon: "🏰",
                  color: "purple",
                },
                {
                  title: "Solving Equations",
                  subtitle: "FOUNDATIONAL MATH · LEVEL 1",
                  icon: "🏔️",
                  color: "blue",
                },
              ].map((item) => (
                <CourseCard
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  subtitle={item.subtitle}
                  color={item.color}
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
