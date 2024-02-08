export interface QuizState {
  status: string;
  difficulty: string | undefined;
  questions: Questions[] | undefined;
  activeQuestion: number;
  progressValue: number;
  seconds: number;
  selectedAnswer: string | undefined;
  allAnswers: string[];
  score: number;
}

export type QuizAction =
  | { type: "active" }
  | { type: "start" }
  | { type: "back" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "timeIsUp" }
  | { type: "timer" }
  | { type: "checkAnswers" }
  | { type: "select"; payload: string }
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
  seconds: 90,
  selectedAnswer: "",
  score: 0,
  allAnswers: [],
};

export const QuizReduce = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "active":
      return { ...state, status: "active" };
    case "start":
      return { ...state, status: "start" };
    case "setDifficulty":
      return { ...state, difficulty: action.payload, status: "ready" };
    case "dataReceived":
      return { ...state, questions: action.payload };
    case "nextQuestion":
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        selectedAnswer: "",
      };
    case "timer":
      return {
        ...state,
        progressValue: state.progressValue + 1,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? "finished" : state.status,
      };
    case "select":
      return {
        ...state,
        selectedAnswer: action.payload,
        allAnswers: [...state.allAnswers, action.payload],
      };
    case "updateScore":
      return { ...state, score: state.score + action.payload };
    case "finish":
      return { ...state, activeQuestion: 0, status: "finished" };
    case "restart":
      return { ...initialState, status: "active" };
    case "checkAnswers":
      return { ...state, status: "check" };
    case "timeIsUp":
      return { ...state, status: "timeUp" };

    default:
      throw new Error("Unknown Action");
  }
};
