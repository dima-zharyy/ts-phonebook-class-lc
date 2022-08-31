import { FilterLabel, FilterInput, FilterWrapper } from "./Filter.styled";
import { nanoid } from "nanoid";
import { IFilter } from "components/types/types";

export const Filter: React.FC<IFilter> = ({ onChange, value }) => {
  const filterId = nanoid(5);
  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        onChange={onChange}
        value={value}
      />
    </FilterWrapper>
  );
};
