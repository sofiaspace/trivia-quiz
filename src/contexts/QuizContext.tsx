import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  Reducer,
  useReducer,
} from "react";
import {
  QuizReduce,
  initialState,
  QuizState,
  QuizAction,
  QuestionsData,
} from "../reducer/QuizReducer";

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
    async function fetchEasyQuestions() {
      if (!state.difficulty) {
        return;
      }
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
    fetchEasyQuestions();
  }, [state.difficulty]);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
