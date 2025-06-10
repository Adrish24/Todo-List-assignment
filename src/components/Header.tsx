import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Header = ({ setTodoList }) => {
  const [todo, setTodo] = useState("");

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (todo.trim()) {
      setTodoList((prev) => [
        ...prev,
        {
          task: todo.trim(),  
          completed: false,   //initially setting completed to false
          id: uuidv4(),  //unique id for each task
          timestamp: new Date().toLocaleDateString()  //adding created date
        },
      ]);
    }
    setTodo("") //clear the input field after adding the task
  };

  return (
    <div className="flex items-center p-10">
      <h1 className="text-2xl text-white">To-Do</h1>
      <div className="flex border-1 border-gray-500 rounded-lg ml-10">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add a new Task"
          className="border-none outline-none w-sm  placeholder:text-gray-500 text-white py-2 px-4"
        />
        <button
          onClick={handleAddTask}
          className="py-2 px-4 rounded-r-md  bg-blue-500 hover:bg-blue-600 cursor-pointer"
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default Header;
