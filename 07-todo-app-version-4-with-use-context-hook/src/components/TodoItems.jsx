import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {

  const { todoItems } = useContext(TodoItemsContext)

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        />
      ))}
    </div>
  );
}

export default TodoItems;
