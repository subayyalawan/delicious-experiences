import React, { useState } from "react";
import Card from "../Home/Card";

const BlogCrud = ({ Array, Btn }) => {
  const [blogCard, setBlogCard] = useState(Array);

  // const DeleteCard = () =>{
  //   HandleDeleteCard(index)
  // }

  const HandleDeleteCard = (cardIndex) => {
    const updatedCards = blogCard.filter((card, index) => index !== cardIndex);
    setBlogCard(updatedCards);

    // const updatedCards = [...blogCard];
    // updatedCards.splice(cardIndex, 1);
    // setBlogCard(updatedCards)
    // console.log(updatedCards)
  };

  return (
    <>
      <div className="container bg-gray-100 blogUpper mx-auto flex sm:justify-between justify-center flex-col sm:flex-row flex-wrap pt-8 px-2 sm:items-baseline items-center">
        <h3 className="text-center container md:text-5xl text-3xl uppercase font-Freight-bold my-10">
          Blog
        </h3>

        {blogCard.map((val, index) => {
          return (
            <>
              <Card
                key={index}
                imgSrc={val.imgSrc}
                category={val.category}
                title={val.title}
                postDate={val.postDate}
                Btn={Btn}
                onDelete={() => {
                  HandleDeleteCard(index);
                }}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogCrud;
