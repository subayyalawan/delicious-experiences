import React, { useEffect } from "react";
import { array2 } from "./ArrayData";
import BlogCard from "./BlogCard";
// import CardFilter from "./CardFilter";

const BlogLower = ({ query, filterArray2, setFilterArray2 }) => {
  useEffect(() => {
    if (query.length > 0) {
      const outputCards = array2.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
      setFilterArray2(outputCards);
    } else {
      setFilterArray2(array2);
    }
  });

  return (
    <>
      <div className="container bg-gray-100 lowerBlogs mx-auto flex sm:justify-between justify-center flex-wrap flex-col sm:flex-row pt-8 px-2 sm:items-start items-center">
        {filterArray2.map((val) => {
          return (
            <BlogCard
              imgSrc={val.imgSrc}
              category={val.category}
              title={val.title}
              postDate={val.postDate}
            />
          );
        })}
      </div>
    </>
  );
}

export default BlogLower;
