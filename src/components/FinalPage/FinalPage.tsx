import { FC } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import { ButtonsContainer, FinalPageContainer, Text } from "./FinalPage.style";
import { Button } from "../../ui/Button/Button";

const FinalPage: FC = () => {
  const { score, dispatch } = useQuizContext();

  return (
    <FinalPageContainer>
      Congratulations, you finished the quiz!
      <p>
        You got {score} correct questions out of 15! If you would like to review
        the answers, click{" "}
        <Text onClick={() => dispatch({ type: "checkAnswers" })}>here</Text>.
      </p>
      <p>
        If you would like to restart the quiz with new questions, click restart!
      </p>
      <p>You can also submit your result by clicking submit.</p>
      <ButtonsContainer>
        <Button onClick={() => dispatch({ type: "restart" })}>Restart</Button>
        <Button onClick={() => dispatch({ type: "submit" })}>Submit</Button>
      </ButtonsContainer>
    </FinalPageContainer>
  );
};

export default FinalPage;
