// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([
    { id: 1, name: "debian", count: 1 },
    { id: 2, name: "arch", count: 5 },
    { id: 3, name: "fedora", count: 7 },
  ]);
  let operations = {
    increase: (item) => {
      const newItems = [...items];
      const index = newItems.indexOf(item);
      newItems[index] = { ...newItems[index] };
      newItems[index].count++;
      setItem(newItems);
    },
    decrease: (item) => {
      const newItems = [...items];
      const index = newItems.indexOf(item);
      newItems[index] = { ...newItems[index] };
      if (newItems[index].count > 0) {
        newItems[index].count--;
      }
      setItem(newItems);
    },
    delete: (item) => {
      const newItems = items.filter((i) => i.id !== item.id);
      setItem(newItems);
    },
    reset: () => {
      const newItems = items.map((item) => ({ ...item, count: 0 }));
      setItem(newItems);
    },
  };
  let content = {
    add: "+",
    decrease: "-",
    delete: "Delete",
    reset: "Reset",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar itemsCount={items.length}></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <Home items={items} operations={operations} content={content} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
