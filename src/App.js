// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import DesktopNav from "./components/DesktopNav";
import Gifts from "./components/Gifts";
import BlogNav from "./components/BlogNav";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";
import MobileNav from "./components/MobileNavigation";

function App() {

  useEffect(() => {
    document.body.classList.add("bg-blog-area");
  });

  return (
    <>
      <DesktopNav />

      <MobileNav />

      <Gifts />

      <BlogCard  />

      <BlogNav />

      <Footer />
    </>
  );
}

export default App;
