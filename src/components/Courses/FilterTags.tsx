import { ButtonRound } from "../Shared/Buttons/ButtonRound";

interface FilterTagsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTags = ({ activeFilter, onFilterChange }: FilterTagsProps) => {
  const filters = [
    "All courses",
    "New courses",
    "Math",
    "Data",
    "Computer Science",
    "Science",
  ];

  return (
    <div className="flex gap-3 mb-12 flex-wrap">
      {filters.map((filter) => (
        <ButtonRound
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`btn-grey !py-2 !text-base ${
            activeFilter === filter ? "!border-black" : ""
          }`}>
          {filter}
        </ButtonRound>
      ))}
    </div>
  );
};

export default FilterTags;
