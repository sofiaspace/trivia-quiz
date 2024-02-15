import { FC, Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppContainer, PagesContainer } from "./App.style";
import Loader from "./ui/Loader/Loader";
import Header from "./components/Header/Header";
import useQuizContext from "./hooks/useQuizContext";
import ProgressBar from "./ui/ProgressBar/ProgressBar";
import FinalPage from "./components/FinalPage/FinalPage";
import LevelsPage from "./components/LevelsPage/LevelsPage";
import TimeUpPage from "./components/TimeUpPage/TimeUpPage";
import SubmitPage from "./components/SubmitPage/SubmitPage";
import StartingPage from "./components/StartingPage/StartingPage";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import QuestionsList from "./components/QuestionsPage/QuestionsList";
import AnsweredQuestions from "./components/AnsweredQuestionsPage/AnsweredQuestions";
import { Status } from "./reducer/QuizReducer.types";

const App: FC = () => {
  const { status, isLoading } = useQuizContext();

  return (
    <AppContainer>
      <Header />
      <PagesContainer>
        {isLoading === true ? (
          <Loader />
        ) : (
          <>
            {status === Status.online && <StartingPage />}
            {status === Status.active && <LevelsPage />}

            {status === Status.ready && <QuestionsPage />}
            {status === Status.start && (
              <Fragment>
                <ProgressBar />
                <QuestionsList />
              </Fragment>
            )}

            {status === Status.finished && <FinalPage />}
            {status === Status.check && <AnsweredQuestions />}
            {status === Status.timeUp && <TimeUpPage />}
            {status === Status.submit && <SubmitPage />}
          </>
        )}
      </PagesContainer>
      <GlobalStyles />
    </AppContainer>
  );
};

export default App;
