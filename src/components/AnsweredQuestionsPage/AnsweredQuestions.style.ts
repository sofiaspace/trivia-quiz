import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const AnsweredQuestionsContainer = styled.div`
  width: 800px;

  @media ${device.md} {
    width: 100%;
    font-size: 15px;
  }
`;

export const DisplayedQuestions = styled.div`
  background-color: #e4ceed;
  filter: drop-shadow(0 0 0.5em #e4ceed);
  border-radius: 30px;
  color: black;
  text-align: left;
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export const QuestionsList = styled.li`
  padding-bottom: 15px;
`;
export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
