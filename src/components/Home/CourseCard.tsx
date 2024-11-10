import Card from "../Shared/Card";

interface CourseCardProps {
  title: string;
  icon: string;
  subtitle?: string;
  color?: string;
}

const CourseCard = ({ title, icon, subtitle, color }: CourseCardProps) => {
  return (
    <Card clickable>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
    </Card>
  );
};

export default CourseCard;
