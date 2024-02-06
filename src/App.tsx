import { FC } from "react";
import StartingPage from "./components/StartingPage/StartingPage";
import LevelsPage from "./components/LevelsPage/LevelsPage";
import { GlobalStyles } from "./styles/GlobalStyles";
import useQuizContext from "./hooks/useQuizContext";
import Header from "./components/Header/Header";
import { AppContainer } from "./App.style";
import Loader from "./ui/Loader/Loader";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import QuestionsList from "./components/QuestionsPage/QuestionsList";
import ProgressBar from "./ui/ProgressBar/ProgressBar";

const App: FC = () => {
  const { status } = useQuizContext();

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      {status === "loading" && <Loader />}
      {status === "online" && <StartingPage />}
      {status === "active" && <LevelsPage />}
      {status === "back" && <LevelsPage />}
      {status === "ready" && <QuestionsPage />}
      {status === "start" && (
        <>
          <ProgressBar />
          <QuestionsList />
        </>
      )}
    </AppContainer>
  );
};

export default App;
