import { FC } from "react";
import { ErrorPageContainer } from "./ErrorPage.style";
import { Button } from "../../ui/Button/Button";
import useQuizContext from "../../hooks/useQuizContext";

const ErrorPage: FC = () => {
  const { dispatch } = useQuizContext();
  return (
    <ErrorPageContainer>
      <p>...oops something went wrong😔</p>
      <Button onClick={() => dispatch({ type: "restart" })}>Refresh</Button>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
