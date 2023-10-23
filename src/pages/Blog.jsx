import React from 'react'
import BlogCrud from "../components/Blog/BlogCrud"
import { array } from "../components/Home/ArrayData"

function Blog() {
  return (
    <>
      <BlogCrud Array={array} Btn={"block"}/>
    </>
  )
}

export default Blog
