export interface QuizState {
  status: string;
  difficulty: string | undefined;
  questions: Questions[] | undefined;
  activeQuestion: number;
  progressValue: number;
  seconds: number;
  selectedAnswer: string | undefined;
  score: number;
}

export type QuizAction =
  | { type: "active" }
  | { type: "start" }
  | { type: "back" }
  | { type: "finish" }
  | { type: "timer" }
  | { type: "select"; payload: string | undefined }
  | { type: "updateScore"; payload: number }
  | { type: "nextQuestion" }
  | { type: "setDifficulty"; payload: string | undefined }
  | { type: "dataReceived"; payload: Questions[] | undefined };

export interface QuestionsData {
  response_code: number;
  results: Questions[];
}

interface Questions {
  type: string;
  difficulty: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export const initialState = {
  status: "online",
  difficulty: "",
  questions: [],
  activeQuestion: 0,
  progressValue: 0,
  seconds: 10,
  selectedAnswer: "",
  score: 0,
};

export const QuizReduce = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "active":
      return { ...state, status: "active" };
    case "start":
      return { ...state, status: "start" };
    case "back":
      return { ...state, status: "back" };
    case "setDifficulty":
      return { ...state, difficulty: action.payload, status: "ready" };
    case "dataReceived":
      return { ...state, questions: action.payload };
    case "nextQuestion":
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        selectedAnswer: "",
        progressValue: 0,
        seconds: 10,
      };
    case "timer":
      return {
        ...state,
        progressValue: state.progressValue + 1,
        seconds: state.seconds - 1,
      };
    case "select":
      return { ...state, selectedAnswer: action.payload };
    case "updateScore":
      return { ...state, score: state.score + action.payload };
    case "finish":
      return { ...state, status: "finished" };

    default:
      throw new Error("Unknown Action");
  }
};
