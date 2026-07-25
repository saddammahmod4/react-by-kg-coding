import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import './App.css'
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      date: '25-07-2026'
    },
    {
      name: 'Go to college',
      date: '28-07-2026'
    }
  ]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
