import { useState } from "react";

const ToDoItem = ({ todo, setTodoList }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setIsCompleted((prev) => !prev);
    const updatedTodo = { ...todo, completed: !isCompleted };
    setTodoList((prev) =>
      prev.map((t) => (t.id === todo.id ? updatedTodo : t))
    );
  };

  const handleEdit = () => {
    const renameTask = prompt("Edit your task:", todo.task);
    if (renameTask?.trim()) {
      const updatedTodo = { ...todo, task: renameTask.trim() };
      setTodoList((prev) =>
        prev.map((t) => (t.id === todo.id ? updatedTodo : t))
      );
    }
  };

  const handleDelete = () => {
    setTodoList((prev) => prev.filter((t) => t.id !== todo.id));
  };
  return (
    <div className="flex items-center text-white w-full mb-4">
      <div className="relative flex items-center justify-center mr-4 cursor-default">
        <input
          className="w-full h-full z-10 opacity-0 cursor-pointer"
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={isCompleted}
        />
        {isCompleted ? (
          <div className="absolute">✅</div>
        ) : (
          <div className="absolute">⬜</div>
        )}
      </div>
      <div className="flex  w-full">
        <p className={`grow ${isCompleted && "line-through"}`}>{todo.task}</p>
        <div className="flex gap-2">
          <button onClick={handleEdit} title="edit" className="cursor-pointer">
            ✏️
          </button>
          <button
            onClick={handleDelete}
            title="delete"
            className="cursor-pointer"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
