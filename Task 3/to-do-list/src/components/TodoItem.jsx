import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 border rounded ${
        todo.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="cursor-pointer"
        />
        <span
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4 hover:cursor-pointer"
      >
        <MdDeleteOutline />
      </button>
    </li>
  );
};

export default TodoItem;
