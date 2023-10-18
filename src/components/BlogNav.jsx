import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


function Navigation() {
  const [activePageIndex] = useState(0);
  const blogNav = [1, 2, 3, 4, 5, 6, 7];


  return (
    <>
      <div className="blog-nav container flex items-center justify-center text-sm mx-auto pt-28 pb-40 px-2">
        <div className="prev capitalize mr-5 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p  className="text-xs font-semibold inline-block">prev</p>
        </div>

        {blogNav.map((val, index) => {
          return (
            <div
              key={index}
              className={`${
                activePageIndex === index
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } hover:bg-black focus:bg-black hover:text-white focus:text-white h-8 w-8 flex items-center justify-center rounded-full mr-3 text-sm font-semibold cursor-pointer list-none transition-all duration-300`}
            >
              <li className="decoration-none">{val}</li>
            </div>
          );
        })}
        <div className="next capitalize ml-2 flex items-center cursor-pointer">
          <p className="text-xs font-semibold inline-block">next</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </>
  );
}

export default Navigation;
