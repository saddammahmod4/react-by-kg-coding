import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import './App.css'
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {name: action.payload.itemName, date: action.payload.itemDate},
    ]
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(item => item.name !== action.payload.itemName)
  }
  return newTodoItems;
}

function App() {

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDate,
      }
    }
    dispatchTodoItems(newItemAction)
  }

  const deleteItem = (itemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName
      }
    }
    dispatchTodoItems(newItemAction)
  }

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
