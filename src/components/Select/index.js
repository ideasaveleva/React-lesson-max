import {
  SelectContainer,
  SelectTitle,
  SelectIcon,
  SelectList,
  SelectItem,
  SelectWrap,
} from "./style";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

export const Select = ({ options }) => {
  const [activeOption, setActiveOption] = useState(options[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectItemClickHandler = (option) => {
    setActiveOption(option);
    setIsMenuOpen(false);
  };

  return (
    <SelectContainer>
      <SelectWrap onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <SelectTitle>{activeOption.name}</SelectTitle>
        <SelectIcon>{isMenuOpen ? <BiUpArrow /> : <BiDownArrow />}</SelectIcon>
      </SelectWrap>

      {isMenuOpen && (
        <SelectList>
          {options.map((option) => (
            <SelectItem
              xxx={option.id === activeOption.id}
              onClick={() => selectItemClickHandler(option)}
              key={option.id}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
};

// const createHandler = (product: IProduct) => {
//   // setModal(false)
//   close();
//
//   addProduct(product);
// };
