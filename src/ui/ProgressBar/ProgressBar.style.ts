import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  align-self: stretch;
  progress[value] {
    width: 100%;

    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-bar {
    height: 15px;
    border-radius: 20px;
    background-color: #f0e4f5;
  }

  progress[value]::-webkit-progress-value {
    height: 15px;
    border-radius: 20px;
    background: linear-gradient(to right, #f0e4f5, #d697f0 20%);
    transition: width 1s linear;
  }
`;

export const ProgressInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
