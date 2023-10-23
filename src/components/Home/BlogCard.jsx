import React, { useState } from "react";
import BlogsMain from "./BlogsMain";
import Newsletter from "./Newsletter";
import {array} from '../Home/ArrayData';

function BlogCard() {
  const [query, setQuery] = useState("");
  const [filterArray1, setFilterArray1] = useState([])
  const [filterArray2, setFilterArray2] = useState([])

  return (
    <>
      <BlogsMain query={query} filterArray = {filterArray1} setFilterArray = {setFilterArray1} array={array.slice(0,3)}  Btn={"hidden"}/>

      <Newsletter query={query} setQuery={setQuery} />

      <BlogsMain query={query} filterArray = {filterArray2} setFilterArray = {setFilterArray2} array={array.slice(3,6)} Btn={'hidden'}/>
    </>
  );
}

export default BlogCard;
