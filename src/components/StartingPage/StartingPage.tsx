import { FC } from "react";
import { Greeting, StartingPageContainer } from "./StartingPage.style";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";

const StartingPage: FC = () => {
  const { dispatch } = useQuizContext();

  return (
    <StartingPageContainer>
      <Greeting>
        Ready to dive into a whirlwind of knowledge? If yes, click next!
      </Greeting>
      <Button onClick={() => dispatch({ type: "active" })}>Next</Button>
    </StartingPageContainer>
  );
};

export default StartingPage;
