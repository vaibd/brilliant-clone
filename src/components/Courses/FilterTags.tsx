import { ButtonRound } from "../Shared/Buttons/ButtonRound";

const FilterTags = () => {
  const filters = [
    "New courses",
    "Math",
    "Data",
    "Computer Science",
    "Science",
  ];

  return (
    <div className="flex gap-3 mb-12 flex-wrap">
      {filters.map((filter, i) => (
        <ButtonRound
          key={filter}
          className={`btn-grey !py-2 !text-base ${
            i === 0 ? "!border-black" : ""
          }`}>
          {filter}
        </ButtonRound>
      ))}
    </div>
  );
};

export default FilterTags;
