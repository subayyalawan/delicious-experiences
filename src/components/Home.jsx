import React from "react";
import Gifts from "./Home/Gifts";
import BlogNav from "./Home/BlogNav";
import Footer from "./Footer";
import BlogCard from "./Home/BlogCard";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      <Navigation />

      <Gifts />

      <BlogCard />

      <BlogNav />

      <Footer />
    </>
  );
};

export default Home;
