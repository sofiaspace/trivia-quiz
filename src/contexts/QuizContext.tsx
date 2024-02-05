import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useReducer,
} from "react";
import {
  QuizReduce,
  initialState,
  QuizState,
  QuizAction,
} from "../reducer/QuizReducer";

export interface Props extends QuizState {
  dispatch: Dispatch<QuizAction>;
}

export const QuizContext = createContext<Props>({} as Props);

export const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReduce, initialState);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
