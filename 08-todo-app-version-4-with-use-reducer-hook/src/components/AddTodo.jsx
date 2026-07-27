import React, { useContext, useRef, useState } from "react";
import '../App.css';
import { BiMessageAdd } from 'react-icons/bi'
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

  const todoNameElement = useRef()
  const todoDateElement = useRef()

  const { addNewItem } = useContext(TodoItemsContext)

  const handleAddButtonClicked = (e) => {
    e.preventDefault()

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate)
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo name"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            placeholder="Enter todo date"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
