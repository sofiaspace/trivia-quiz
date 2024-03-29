import { FC } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";

const TimeUpPage: FC = () => {
  const { activeQuestion, dispatch } = useQuizContext();
  return (
    <div>
      <p>Time is up!</p>
      <p>You made it to navigate through {activeQuestion} questions!</p>
      <p>If you would like to restart the quiz, click "Restart".</p>
      <Button onClick={() => dispatch({ type: "restart" })}>Restart</Button>
    </div>
  );
};

export default TimeUpPage;
