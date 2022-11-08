import styles from "./Todo.module.css";
import { DiApple } from "react-icons/di";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
const Todo = ({ todo, deleteTodo, toggleTodoHandler }) => {
  return (
    <>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ""
        }`}
      >
        <DiApple className={styles.todoIcon} />
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBin2Line
          onClick={() => deleteTodo(todo.id)}
          className={styles.deleteIcon}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodoHandler(todo.id)}
        />
      </div>
    </>
  );
};

export default Todo;
