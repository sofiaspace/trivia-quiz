export enum Status {
  "active",
  "start",
  "online",
  "ready",
  "finished",
  "check",
  "submit",
  "timeUp",
}

export enum Difficulty {
  "easy" = "easy",
  "medium" = "medium",
  "hard" = "hard",
}

export interface QuizState {
  status: Status;
  difficulty: Difficulty | undefined;
  questions: Questions[] | undefined;
  activeQuestion: number;
  progressValue: number;
  seconds: number;
  selectedAnswer: string | undefined;
  allAnswers: string[];
  score: number;
  isLoading: boolean;
}

export type QuizAction =
  | { type: "active" }
  | { type: "start" }
  | { type: "back" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "timeIsUp" }
  | { type: "timer" }
  | { type: "loading" }
  | { type: "submit" }
  | { type: "checkAnswers" }
  | { type: "select"; payload: string }
  | { type: "updateScore"; payload: number }
  | { type: "nextQuestion" }
  | { type: "setDifficulty"; payload: Difficulty | undefined }
  | { type: "dataReceived"; payload: Questions[] | undefined };

export interface QuestionsData {
  response_code: number;
  results: Questions[];
}

export interface Questions {
  type: string;
  difficulty: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}
