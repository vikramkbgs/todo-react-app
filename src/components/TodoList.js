import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// TodoList component
function TodoList() {
  // State to store all the todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    // Check if the todo text is not empty or only whitespace
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Add the new todo to the front of the todos array
    const newTodos = [todo, ...todos];

    // Update the todos state with the new todos array
    setTodos(newTodos);
  };

  // Function to update an existing todo
  const updateTodo = (todoId, newValue) => {
    // Check if the updated todo text is not empty or only whitespace
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // Map over the previous todos state and return the updated todo
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    // Filter the todos array to exclude the todo with the given id
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    // Update the todos state with the filtered todos array
    setTodos(removedArr);
  };

  // Function to toggle the completion status of a todo
  const completeTodo = (id) => {
    // Map over the todos array and toggle the completion status of the todo with the given id
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // Update the todos state with the updated todos array
    setTodos(updatedTodos);
  };

  return (
    <>
      {/* Title */}
      <h1>What's the Plan for Today?</h1>
      {/* TodoForm component with the addTodo function passed as a prop */}
      <TodoForm onSubmit={addTodo} />
      {/* Todo component with all the necessary functions and state passed as props */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
