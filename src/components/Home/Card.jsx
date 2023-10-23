import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 150,
  delay: 50,
  duration: 500,
  once: true,
});

const blogCard = (props) => {
  return (
    <>
      <div
        className="card lg:w-31_ sm:w-45_ w-11/12 text-center flex justify-center items-center flex-col min-h-[600px] py-4"
        data-aos="zoom-in"
      >
        <img
          className="w-full min-h-380_ object-cover"
          src={props.imgSrc}
          alt="Blog"
        />
        <p className="text-xs uppercase font-semibold border-b-2 border-yellow-400 inline-block mt-4">
          {props.category}
        </p>

        <h4 className="capitalize text-2xl hover:opacity-50 cursor-pointer transition-all w-10/12 mx-auto font-Freight-bold mt-2 min-h-[110px]">
          {props.title}
        </h4>
        <p className="uppercase text-gray-500 font-semibold mt-3 text-xs">
          {props.postDate}
        </p>
        <button className={`${props.Btn} mt-4 text-white bg-red-600 cursor-pointer py-3 px-4 focus:outline-none text-xs rounded uppercase font-semibold`}
        onClick={props.onDelete}>Delete</button>
      </div>
    </>
  );
};

export default blogCard;
