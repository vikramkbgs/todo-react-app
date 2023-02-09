import React, { useState, useEffect } from "react";
import axios from "axios";

// TodoList component
function TodoList() {
  // State to store all the todos
  const [todos, setTodos] = useState([]);

  // State to store the new todo being added
  const [newTodo, setNewTodo] = useState({ title: "", completed: false });

  // Use useEffect hook to fetch the list of to-dos from a remote API when the component is mounted
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  // Handle changes to the input for adding a new todo
  const handleNewTodoChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  // Handle adding a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    // Make a post request to the API to add the new todo
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo
    );

    // Update the todos state with the newly added todo
    setTodos([...todos, response.data]);
  };

  // Handle updating a todo
  const handleUpdateTodo = async (id, updatedTodo) => {
    // Make a put request to the API to update the todo
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      updatedTodo
    );

    // Update the todos state with the updated todo
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id) => {
    // Make a delete request to the API to delete the todo
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    // Update the todos state by removing the deleted todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* Display the header */}
      <h1>Todo List</h1>

      {/* Form to add a new todo */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Display the todo title */}
            {todo.title}

            {/* Button to mark the todo as complete/incomplete */}
            <button
              onClick={() =>
                handleUpdateTodo(todo.id, {
                  ...todo,
                  completed: !todo.completed,
                })
              }
            >
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>

            {/* Button to delete the todo */}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default TodoList;
