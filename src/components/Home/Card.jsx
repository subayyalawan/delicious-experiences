import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  offset: 150,
  delay: 50,
  duration: 500,
  once: true,
});


const blogCard = (props) => {

  return (
    <>
      <div className="card lg:w-31_ sm:w-45_ w-11/12 text-center cursor-pointer" data-aos = "zoom-in">
        <img
          className="w-full min-h-380_ object-cover"
          src={props.imgSrc}
          alt="Blog"
        />
        <p className="text-xs uppercase font-semibold border-b-2 border-yellow-400 inline-block mt-4">
          {props.category}
        </p>

        <h4 className="capitalize text-2xl hover:opacity-50 transition-all w-9/12 mx-auto font-Freight-bold mt-2">
          {props.title}
        </h4>
        <p className="uppercase text-gray-500 font-semibold mt-3 text-xs">
          {props.postDate}
        </p>
      </div>
    </>
  );
}

export default blogCard;
