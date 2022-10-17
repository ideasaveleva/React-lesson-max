import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  padding: 10px;
  margin: 20px auto;
  width: 180px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 3px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  user-select: none;
  cursor: pointer;
  &:hover {
    border-color: #888;
  }
`;
export const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
export const SelectTitle = styled.div`
  display: block;
`;
export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
export const SelectList = styled.div`
  position: absolute;
  top: 54px;
  left: -2px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  width: 180px;
  border: 1px solid #aaa;
  border-radius: 3px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
`;
export const SelectItem = styled.div`
  cursor: pointer;
  border-radius: 3px;
  padding: 5px 10px;
  ${(props) => {
    if (props.xxx) {
      return css`
        background: #ff5e5e;
        color: #fff;

        &:hover {
          background: #ea0c0c;
        }
      `;
    }

    return css`
      background: #ffffff;
      color: #1a1a1a;

      &:hover {
        background: #8f8f8f;
      }
    `;
  }}

  &:before {
    transform: translate(3px, -50%) rotate(45deg);
  }
`;
