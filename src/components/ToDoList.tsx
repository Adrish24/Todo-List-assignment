import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todoList, setTodoList }) => {
  return <div className="p-4">
    <h2 className="text-lg text-white mb-4">ToDoList</h2>
    {todoList.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} setTodoList={setTodoList}/>
    ))}
  </div>;
};

export default ToDoList;
