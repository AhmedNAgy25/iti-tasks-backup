import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/todos");
      //   console.log(res.data)
      setTodos(res.data);
    };
    fetchData();
  }, []);

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id != id));
  };
  return (
    <>
      <h2>Todo List</h2>
      <Link to="add" className="btn btn-primary bg-primary m-3 ">Add</Link>
      <ul className="mt-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex g-1 justify-content-between align-items-center"
          >
            <div>
              <p>{todo.title}</p>
            </div>
            <div>
              <Link
                to={`/edit/${todo.id}`}
                className="btn btn-sm btn-warning me-2"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
