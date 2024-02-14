import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const SubmitPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input {
    padding: 10px;
    border-radius: 20px;
    border-style: none;
    text-align: center;

    &:focus {
      filter: drop-shadow(0 0 0.5em #e4ceed);
    }
  }

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ScoresContainer = styled.ul`
  border-radius: 17px;
  background-color: #edf2f2;
  opacity: 0.7;
  padding: 13px;
  list-style: none;
  color: black;
`;

export const ScoresGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 120px 1fr 1fr;

  button {
    border: none;
    cursor: pointer;
  }
`;
