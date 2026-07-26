import React, { useState } from "react";
import '../App.css';
import { BiMessageAdd } from 'react-icons/bi'

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("")
  const [todoDate, setTodoDate] = useState("")

  const handleNameChange = (e) => {
    setTodoName(e.target.value)
  }

  const handleDateChange = (e) => {
    setTodoDate(e.target.value)
  }

  const handleAddButtonClicked = (e) => {
    e.preventDefault()
    onNewItem(todoName, todoDate)
    setTodoName("")
    setTodoDate("")
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter todo name"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            placeholder="Enter todo date"
            onChange={handleDateChange}
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
