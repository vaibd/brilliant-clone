import Card from "../Shared/Card";

interface JumpBackProps {
  imageUrl: string;
  category: string;
  level: number;
  title: string;
  progress?: number;
}

const JumpBack = ({
  imageUrl,
  category,
  level,
  title,
  progress = 20,
}: JumpBackProps) => {
  return (
    <Card clickable className="!p-0 !pb-2 overflow-hidden">
      <div className="h-48 relative">
        <img
          src={imageUrl}
          alt="Course illustration"
          className="absolute bottom-0 right-1/2 transform translate-x-1/2 z-0 rounded-t-lg"
        />
      </div>

      {/* Add progress bar right after the image */}
      <div className="w-full bg-gray-200 h-1">
        <div
          className="bg-greenBtn rounded-full h-1 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 text-center font-[CoFoSansMedium]">
        <div className="text-yellow-600 text-xs font-semibold">
          {category} · LEVEL {level}
        </div>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <button className="w-full bg-black text-white rounded-full py-3 mt-4">
          Continue path
        </button>
      </div>
    </Card>
  );
};

export default JumpBack;
