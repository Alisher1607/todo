import styles from "./TodoForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <>
      <div className={styles.todoFormContainer}>
        <form onSubmit={onSubmitHandler}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter new todo"
          />
          <Button type="submit" title="Submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
