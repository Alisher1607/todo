import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodoHandler }) => {
  return (
    <>
      <div className={styles.todoListContainer}>
        {!todos.length && <h2>Todo list is empty</h2>}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoHandler={toggleTodoHandler}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
