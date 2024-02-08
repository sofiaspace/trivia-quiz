import { FC } from "react";
import StartingPage from "./components/StartingPage/StartingPage";
import LevelsPage from "./components/LevelsPage/LevelsPage";
import { GlobalStyles } from "./styles/GlobalStyles";
import useQuizContext from "./hooks/useQuizContext";
import Header from "./components/Header/Header";
import { AppContainer, DisplayQuestions, PagesContainer } from "./App.style";
import Loader from "./ui/Loader/Loader";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import QuestionsList from "./components/QuestionsPage/QuestionsList";
import ProgressBar from "./ui/ProgressBar/ProgressBar";
import FinalPage from "./components/FinalPage/FinalPage";
import AnsweredQuestions from "./components/AnsweredQuestionsPage/AnsweredQuestions";
import TimeUpPage from "./components/TimeUpPage/TimeUpPage";

const App: FC = () => {
  const { status } = useQuizContext();

  return (
    <AppContainer>
      <PagesContainer>
        <Header />
        {status === "loading" && <Loader />}
        {status === "online" && <StartingPage />}
        {status === "active" && <LevelsPage />}
        {status === "ready" && <QuestionsPage />}
        {status === "start" && (
          <>
            <ProgressBar />
            <QuestionsList />
          </>
        )}
        <>
          {status === "finished" && <FinalPage />}
          {status === "check" && <AnsweredQuestions />}
          {status === "timeUp" && <TimeUpPage />}
        </>
      </PagesContainer>
      <GlobalStyles />
    </AppContainer>
  );
};

export default App;
