import Card from "../Shared/Card";

interface StreakCardProps {
  streakCount: number;
  remainingProblems: number;
  days: string[];
}

const currentDay = "W";

const StreakCard = ({
  streakCount,
  remainingProblems,
  days,
}: StreakCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold">{streakCount}</span>
          <img
            src="assets/icons/lightning-outline.svg"
            alt="star"
            className="size-8"
          />
        </div>
        <button className="text-dimText rounded-full bg-dim p-1">
          <img
            src="assets/icons/down-arr.svg"
            alt="down"
            className="size-6 flex justify-center items-center"
          />
        </button>
      </div>
      <p className="mb-4">
        Solve <span className="font-bold">{remainingProblems} problems</span> to
        continue your streak
      </p>
      <div className="flex justify-between">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center gap-2">
            <div
              className={`flex flex-col items-center ${
                index === 0 ? "bg-[#D2E327] text-white" : "text-gray-400"
              } rounded-full border-2 border-dim w-10 h-10 justify-center ${
                day === currentDay ? "border-2 border-dimText" : ""
              }`}>
              <img
                src={
                  index === 0
                    ? "assets/icons/lightning.svg"
                    : "assets/icons/lightning-outline.svg"
                }
                alt="calendar"
                className="size-6"
              />
            </div>
            <p className={`text-sm ${day === currentDay ? "font-bold" : ""}`}>
              {day}
            </p>
          </div>
        ))}
        <div>
          {[1, 2].map((_, i) => (
            <img
              key={i}
              src="assets/icons/battery.svg"
              alt="battery"
              className="size-6"
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StreakCard;
