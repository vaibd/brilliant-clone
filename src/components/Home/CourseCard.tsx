import Card from "../Shared/Card";

interface CourseCardProps {
  title: string;
  icon: string;
  subtitle?: string;
}

const CourseCard = ({ title, icon, subtitle }: CourseCardProps) => {
  return (
    <Card
      clickable
      className="space-y-2 text-center flex flex-col items-center justify-center cursor-pointer">
      <img src={icon} alt={title} className="w-10 h-10" />
      <h4 className="text-sm font-bold">{title}</h4>
      {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
    </Card>
  );
};

export default CourseCard;
