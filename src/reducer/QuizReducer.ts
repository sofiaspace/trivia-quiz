export interface QuizState {
  status: string;
  difficulty: string | undefined;
  questions: Questions[] | undefined;
  activeQuestion: number;
}

export type QuizAction =
  | { type: "active" }
  | { type: "start" }
  | { type: "back" }
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
    default:
      throw new Error("Unknown Action");
  }
};
