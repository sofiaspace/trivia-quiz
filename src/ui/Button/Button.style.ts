import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-top: 20px;
  border: none;
  border-radius: 23px;
  font-weight: 700;
  font-size: 15px;
  background-color: #dbb3ee;
  padding: 15px 25px;

  &:hover {
    cursor: pointer;
    background-color: #e4ceed;
    transition: 1s;
    filter: drop-shadow(0 0 1em #e4ceed);
  }
`;
