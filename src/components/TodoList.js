import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// TodoList component
function TodoList() {
  // State to store all the todos
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      // Fetch the list of todos from the API
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );

      // Update the todos state with the fetched todos
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  // Function to add a new todo
  const addTodo = async (todo) => {
    // Check if the todo title is not empty or only whitespace
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    // Add the new todo to the front of the todos array
    const newTodo = [todo, ...todos];
    console.log("Before update: ", newTodo);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo
    );

    const filteredData = Array.from(Object.values(response.data)).filter(
      (val) => typeof val !== "number"
    );

    // Update the todos state with the new todos array
   setTodos(filteredData);
  };


  // Function to update an existing todo
  const updateTodo = (todoId, newValue) => {
    // Check if the updated todo title is not empty or only whitespace
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
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
        todo.completed = !todo.completed;
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
