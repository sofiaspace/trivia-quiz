import { QuizAction, QuizState, Status } from "./QuizReducer.types";

export const initialState: QuizState = {
  status: Status.online,
  difficulty: undefined,
  questions: [],
  activeQuestion: 0,
  progressValue: -1800,
  seconds: 90,
  selectedAnswer: "",
  score: 0,
  allAnswers: [],
  isLoading: false,
};

export const QuizReduce = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "active":
      return { ...initialState, status: Status.active };
    case "start":
      return { ...state, status: Status.start };
    case "setDifficulty":
      return { ...state, difficulty: action.payload };
    case "loading":
      return { ...state, isLoading: true };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
        status: Status.ready,
      };
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
        status: state.seconds === 0 ? Status.finished : state.status,
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
      return { ...state, activeQuestion: 0, status: Status.finished };
    case "restart":
      return { ...initialState, status: Status.active };
    case "checkAnswers":
      return { ...state, status: Status.check };
    case "submit":
      return { ...state, status: Status.submit };
    case "timeIsUp":
      return { ...state, status: Status.timeUp };

    default:
      throw new Error("Unknown Action");
  }
};
