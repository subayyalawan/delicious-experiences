import React, { useEffect } from "react";
import { array1 } from "./ArrayData";
import BlogCard from "./BlogCard";


function BlogUpper({ query, filterArray1, setFilterArray1 }) {
  useEffect(() => {
    if (query.length > 0) {
      const outputCards = array1.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
      setFilterArray1(outputCards);
    } else {
      setFilterArray1(array1);
    }
  });

  return (
    <>
      <div className="container bg-gray-100 blogUpper mx-auto flex md:justify-between justify-center flex-col md:flex-row pt-8 px-2 md:items-start items-center">
        {filterArray1.map((val) => {
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

export default BlogUpper;
