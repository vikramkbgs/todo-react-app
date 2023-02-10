# Todo React App
A simple Todo application built using React.js, Axios, and JSONPlaceholder API.

## Screenshots
![Todo App Screenshot](./src/assests/Screenshot.png)

## API Used
This application uses [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) as a fake REST API for demonstration purposes.

## How the API works
The API has several endpoints, but in this application, we are using the following endpoints:

- `GET /todos`: This endpoint returns an array of todo objects.

- `POST /todos`: This endpoint is used to add a new todo. It accepts a JSON object containing the todo information as the request body.

In this app, the axios library is used to make HTTP requests to the JSON Placeholder API. To get the list of todos, the GET request is made to the URL https://jsonplaceholder.typicode.com/todos. To add a new todo, the POST request is made to the same URL with the new todo data as the request body. To delete a todo, the DELETE request is made to the URL https://jsonplaceholder.typicode.com/todos/{id} with the todo's id as a path parameter.

## Features
- Add new todo
- Display existing todos
- Cross off completed todos
- Delete todo

## Development
1. Clone the repository
```
git clone https://github.com/vikramkbgs/todo-react-app.git
```
2. Install the dependencies
```
npm install
```
3.Start the development server
```
npm start
```
4. Access the application in your browser at http://localhost:3000

## Live Demo
[Check out the live demo here](insert-your-live-demo-url-here)


## Contributions
If you would like to contribute to this project, please fork the repository and make a pull request with your changes.

## License
This project is licensed under the MIT License.
