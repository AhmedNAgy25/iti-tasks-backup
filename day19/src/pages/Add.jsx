import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const todoSchema = z.object({
  title: z.string().min(1, "title can't be empty"),
});
function Add() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setTitle(e.target.value);
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = todoSchema.safeParse({ title });
    if (!res.success) {
      const errorMessage =
        res.error.errors?.[0]?.message || "go to hell zod";
      setError(errorMessage);
      console.log(errorMessage);
      return;
    }
    let newTodo = {
      userId: 1,
      title,
    };
    await axios.post("http://localhost:3000/todos", newTodo);
    navigate("/");
  };
  return (
    <>
      <h2>Add your new todo</h2>
      <form>
        <label htmlFor="title">todo title</label>
        <input
          id="title"
          value={title}
          type="text"
          onChange={handleInputChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Add;
