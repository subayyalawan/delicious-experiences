import React, { useEffect } from "react";
import Card from "./Card";

const BlogUpper = ({ query, filterArray, setFilterArray, array, Btn }) => {
  useEffect(() => {
    if (query.length > 0) {
      const outputCards = array.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
      setFilterArray(outputCards);
    } else {
      setFilterArray(array);
    }
  });

  return (
    <>
      <div className="container bg-gray-100 blogUpper mx-auto flex sm:justify-between justify-center flex-col sm:flex-row flex-wrap pt-8 px-2 sm:items-start items-center">
        {filterArray.map((val, index) => {
          return (
            <>
              <Card
                key={index}
                imgSrc={val.imgSrc}
                category={val.category}
                title={val.title}
                postDate={val.postDate}
                Btn={Btn}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogUpper;
