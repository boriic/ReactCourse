import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    let isErrorTriggered = false;
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      isErrorTriggered = true;
    }
    if (username.trim().length > 0 && +age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age greater than 0.",
      });
      isErrorTriggered = true;
    }
    setUsername("");
    setAge("");
    if (!isErrorTriggered) props.onAddUser(username, age);
  };

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeErrorModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username </label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={setUsernameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            id="age"
            type="number"
            onChange={setAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
