import Card from "../Shared/Card";

interface CourseCardProps {
  title: string;
  isNew?: boolean;
  imageUrl?: string;
}

const CourseCard = ({ title, isNew = false, imageUrl }: CourseCardProps) => {
  return (
    <Card clickable className="relative">
      {isNew && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
          NEW
        </span>
      )}
      <div className="text-center flex flex-col items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg object-cover size-14 mb-4"
          />
        ) : (
          <div className="size-14 mb-4 bg-purple-100 rounded-lg" />
        )}
        <h3 className="font-medium">{title}</h3>
      </div>
    </Card>
  );
};

export default CourseCard;
