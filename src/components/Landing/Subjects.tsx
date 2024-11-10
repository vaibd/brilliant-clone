import { subjects } from "../../constants/subjects";


const Subjects = () => {
  return (
    <div className="width-lg flex flex-wrap justify-center xl:justify-between items-center mx-auto w-full max-xl:gap-8 pt-12 pb-16 text-center">
      {subjects.map((subject) => (
        <div
          key={subject.name}
          className="flex items-center justify-center min-w-[140px]">
          <img src={subject.icon} alt={subject.name} className="w-6 h-6 mr-2" />
          <span className="text-gray-700">
            <span className="md:hidden">
              {subject.shortName || subject.name}
            </span>
            <span className="hidden md:inline">{subject.name}</span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Subjects;
