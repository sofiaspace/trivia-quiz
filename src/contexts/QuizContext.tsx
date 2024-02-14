import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  Reducer,
  useReducer,
} from "react";
import { QuizReduce, initialState } from "../reducer/QuizReducer";
import {
  QuestionsData,
  QuizAction,
  QuizState,
} from "../reducer/QuizReducer.types";

export interface Props extends QuizState {
  dispatch: Dispatch<QuizAction>;
}

export const QuizContext = createContext<Props>({} as Props);

export const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<QuizState, QuizAction>>(
    QuizReduce,
    initialState
  );

  useEffect(() => {
    async function fetchQuestions() {
      if (!state.difficulty) {
        return;
      }
      dispatch({ type: "loading" });
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=15&difficulty=${state.difficulty}`
        );
        const data = (await res.json()) as QuestionsData;
        dispatch({ type: "dataReceived", payload: data.results });
      } catch (err) {
        throw new Error("Error fetching quiz data");
      }
    }
    fetchQuestions();
  }, [state.difficulty]);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
