import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdDeleteForever } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    completed:"false",
  });

  // This function is used to submit an updated todo
  const submitUpdate = (value) => {
    // Call the updateTodo prop to update the todo in the application
    updateTodo(edit.id, value);

    // Reset the edit state back to its initial values
    setEdit({
      id: null,
      value: "",
      completed: "false",
    });
  };

  // Check if a todo is being edited
  if (edit.id) {
    // If a todo is being edited, return the TodoForm component
    return (
      <TodoForm edit={edit} onSubmit={submitUpdate} />
    );
  }

//   console.log(todos);
  
  // Map through the array of todos and return a list of div elements
  return todos.map((todo, index) => (
    // Each div element represents a todo
    <div
    //    Set the classname based on whether the todo is complete
      className={todo.completed ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {/*  Display the title of the todo */}
        {todo.title}
      </div>

      <div className="icons">
        {/* This div contains the delete and edit icons */}

        <MdDeleteForever
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        {/* The delete icon allows the user to remove a todo */}
        {/* When the icon is clicked, the removeTodo function is called with the id of the todo */}

        <RiEditCircleFill
          onClick={() => setEdit({ id: todo.id, value: todo.title })}
          className="edit-icon"
        />
        {/* The edit icon allows the user to edit a todo */}
        {/* When the icon is clicked, the setEdit function is called with an object containing the id and title of the todo */}
      </div>
    </div>
  ));
}

export default Todo;