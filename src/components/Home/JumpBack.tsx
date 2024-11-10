import Card from "../Shared/Card";

interface JumpBackProps {
  imageUrl: string;
  category: string;
  level: number;
  title: string;
}

const JumpBack = ({ imageUrl, category, level, title }: JumpBackProps) => {
  return (
    <Card clickable className="p-0 overflow-hidden">
      <div className="h-48 relative">
        <img
          src={imageUrl}
          alt="Course illustration"
          className="absolute bottom-0 right-1/2 transform translate-x-1/2 z-0 rounded-t-lg"
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
