import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gift from "./pages/Gift";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-blog-area");
  });

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<Gift/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
