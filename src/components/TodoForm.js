import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // State to keep track of the input value
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // Ref to keep track of the input element
  const inputRef = useRef(null);

  // Focus on the input when the component is mounted
  useEffect(() => {
    inputRef.current.focus();
  });

  // Function to handle changes in the input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default form submit behavior
    e.preventDefault();

    // Call the onSubmit prop with the new todo item
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
    });
    // Reset the input value
    setInput("");
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        // If in edit mode, render the update input and button
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        // If not in edit mode, render the add input and button
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="title"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
