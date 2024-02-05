export interface QuizState {
  status: string;
  difficulty: string | undefined;
}

export interface QuizAction {
  type: string;
  payload?: string;
}

export const initialState = {
  status: "online",
  difficulty: "",
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
    default:
      throw new Error("Unknown Action");
  }
};
