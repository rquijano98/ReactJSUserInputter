import UserInput from "./components/UserInput";
import FormContainer from "./components/FormContainer";
import UserList from "./components/UserList";
import ErrorWindow from "./components/ErrorHandling/ErrorWindow";

import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const userInputHandler = (newUser) => {
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const failedInputHandler = (message) => {
    setErrorMessage(message);
  };

  const closeWindowHandler = () => {
    setErrorMessage("");
  };

  let userContent = "";

  if (users.length > 0) {
    userContent = <UserList allUsers={users}></UserList>;
  }

  let errorModalWindow = "";
  if (errorMessage) {
    errorModalWindow = (
      <ErrorWindow message={errorMessage} onClose={closeWindowHandler} />
    );
  }

  return (
    <div className={styles.app}>
      <FormContainer>
        <UserInput
          onUserInput={userInputHandler}
          onFailedInput={failedInputHandler}
        />
      </FormContainer>

      {userContent}

      {errorModalWindow}
    </div>
  );
}

export default App;
