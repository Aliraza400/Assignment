import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";

const getLocalTodos = () => {
    try {
        const todos = localStorage.getItem("todos")
        return todos ? JSON.parse(todos) : []
    }
    catch(err) {
        console.log("Error" , err);
        return []
    }
}

const TodoApp = () => {
  const [todos, setTodos] = useState(getLocalTodos);
  const [filter, setFilter] = useState("all");

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-5">
      <h1 className="text-2xl font-bold text-center mb-4">My Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} currentFilter={filter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
