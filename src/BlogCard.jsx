import React, { useState } from "react";
import BlogLower from "./components/BlogLower";
import BlogUpper from "./components/BlogUpper";
import Newsletter from "./components/Newsletter";

function BlogCard() {
  const [query, setQuery] = useState("");
  const [filterArray1, setFilterArray1] = useState([])
  const [filterArray2, setFilterArray2] = useState([])

  return (
    <>
      <BlogUpper query={query} filterArray1 = {filterArray1} setFilterArray1 = {setFilterArray1}/>

      <Newsletter query={query} setQuery={setQuery} />

      <BlogLower query={query} filterArray2 = {filterArray2} setFilterArray2 = {setFilterArray2}/>
    </>
  );
}

export default BlogCard;