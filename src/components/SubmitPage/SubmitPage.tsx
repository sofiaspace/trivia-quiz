import { FC, Fragment, useState } from "react";
import { Button } from "../../ui/Button/Button";
import {
  ScoresContainer,
  ScoresGrid,
  SubmitPageContainer,
} from "./SubmitPage.style";
import useQuizContext from "../../hooks/useQuizContext";

interface Users {
  name: string;
  score: number;
}
const SubmitPage: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const localstorageUsers = window.localStorage.getItem("users");

  const oldUsers = localstorageUsers
    ? (JSON.parse(localstorageUsers) as Users[])
    : [];
  const [data, setData] = useState<Users[]>(oldUsers);
  const { score, dispatch } = useQuizContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newScore = {
      name: username,
      score: score,
    };

    const newData = [...data, newScore];
    setData(newData);
    window.localStorage.setItem("users", JSON.stringify(newData));
    setUsername("");
    setIsDisabled(!isDisabled);
  };

  const deleteUser = (name: any) => {
    const updatedUsers = data.filter((d) => d.name !== name);
    setData(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <SubmitPageContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          disabled={isDisabled}
          value={username}
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>Score: {score}/15 </div>
        <Button disabled={!username} className="smallBtn">
          Add Score
        </Button>
        <Button
          type="button"
          className="smallBtn"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </Button>
      </form>
      <ScoresContainer>
        <ScoresGrid>
          <span>Name</span>
          <span>Score</span>
          <span></span>
          {data.map((user, index) => (
            <Fragment key={index}>
              <span>{user.name}</span>
              <span>{user.score}</span>
              <button onClick={() => deleteUser(user.name)}>❌</button>
            </Fragment>
          ))}
        </ScoresGrid>
      </ScoresContainer>
    </SubmitPageContainer>
  );
};

export default SubmitPage;
