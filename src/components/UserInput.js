import styles from "./UserInput.module.css";
import { useState } from "react";

const ActualForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      const errorMessage =
        "Please enter a valid name and age (non-empty values).";
      props.onFailedInput(errorMessage);
      return;
    }

    if (+age < 0) {
      const errorMessage = "Please enter a valid age (> 0)";
      props.onFailedInput(errorMessage);
      return;
    }

    const user = {
      userName,
      age,
      id: Math.random().toString(),
    };

    props.onUserInput(user);

    setUserName("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageChangeHandler} />
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default ActualForm;
