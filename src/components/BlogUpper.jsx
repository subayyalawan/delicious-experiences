import React, { useEffect } from "react";
import { array1 } from "./ArrayData";
import Card from "./Card";


const BlogUpper = ({ query, filterArray1, setFilterArray1 }) => {
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
      <div className="container bg-gray-100 blogUpper mx-auto flex sm:justify-between justify-center flex-col sm:flex-row flex-wrap pt-8 px-2 sm:items-start items-center">
        {filterArray1.map((val) => {
          return (
            <Card
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
