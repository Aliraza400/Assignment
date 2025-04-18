import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        addTodo(text);
        setText("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Add new Task....."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
