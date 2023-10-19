// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";


function App() {

  useEffect(() => {
    document.body.classList.add("bg-blog-area");
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
