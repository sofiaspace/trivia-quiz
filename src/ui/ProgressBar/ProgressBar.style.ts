import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const ProgressBarContainer = styled.div`
  progress[value] {
    width: 100%;

    @media ${device.md} {
      width: 350px;
    }

    @media ${device.sm} {
      width: 250px;
    }

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
