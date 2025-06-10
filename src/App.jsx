import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  // Initialize todoList state from localStorage or set to an empty array
  const [todoList, setTodoList] = useState(() => {
    try {
      const savedList = localStorage.getItem("todoList")
      return savedList ? JSON.parse(savedList) : []
    } catch (error) {
      console.log("Error reading from localStorage",error);
      return []
    }
  });

  // Effect to save todoList to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } catch (error) {
      console.log("Error saving to localStorage", error);
    }
  }, [todoList]);

  return (
    <div className="h-screen bg-neutral-800 flex">
      <div className="mx-auto">
        <Header setTodoList={setTodoList} />
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
