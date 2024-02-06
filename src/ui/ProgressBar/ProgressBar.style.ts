import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  padding-bottom: 10rem;

  progress[value] {
    width: 400px;
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

// export const Progress = styled.progress`
//   width: 300px;
//   appearance: none;

//   ::-webkit-progress-bar {
//     height: 10px;
//     border-radius: 20px;
//     background-color: darkorchid;
//   }

//   ::-webkit-progress-value {
//     height: 10px;
//     border-radius: 20px;
//     background-color: cornsilk;
//   }
// `;
