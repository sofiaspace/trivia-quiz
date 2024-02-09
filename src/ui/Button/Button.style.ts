import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 23px;
  font-weight: 700;
  font-size: 15px;
  background-color: #ffffff;
  padding: 15px 25px;
  color: black;
  cursor: pointer;

  &:not([disabled]):hover {
    background-color: #e4ceed;
    transition: 1s;
    filter: drop-shadow(0 0 1em #e4ceed);
  }

  &:disabled {
    cursor: default;
    background-color: #c1c0bc;
  }

  &.correct {
    filter: none;
    background-color: green;
    transition: none;
  }

  &.incorrect {
    background-color: red;
  }
`;
