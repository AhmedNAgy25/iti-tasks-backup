import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const todoSchema = z.object({
  title: z.string().min(1, "title can't be empty"),
});

function Edit() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos/${id}`)
      .then((res) => {
        setTitle(res.data.title);
      })
      .catch((err) => {
        console.error("Error fetching todo", err);
        navigate("/");
      });
  }, [id, navigate]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = todoSchema.safeParse({ title });
    if (!res.success) {
      const errorMessage = res.error.errors?.[0]?.message || "go to hell zod";
      setError(errorMessage);
      console.log(errorMessage);
      return;
    }

    await axios.patch(`http://localhost:3000/todos/${id}`, {
      title,
    });

    navigate("/");
  };

  return (
    <>
      <h2>Edit your todo</h2>
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
          Update
        </button>
      </form>
    </>
  );
}

export default Edit;
