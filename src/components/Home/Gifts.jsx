import React from "react";

const Gifts = () => {
  return (
    <>
      <div className="bg-blog-area perfect-gift 2xl:1/2 2xl:w-2/4  xl:w-3/4 md:container w-11/12 mx-auto text-center px-12 py-8 md:-mt-40 -mt-32 relative">
        <h4 className="uppercase text-base font-semibold border-b-2 border-yellow-400 inline-block cursor-pointer">
          Prfect Gifts
        </h4>

        <a href="/">
          <h3 className="capitalize text-xl md:text-3xl xl:text-5xl hover:opacity-50 transition-all cursor-pointer leading-normal">
            Sending Out Holiday gifts For Clients: 5 Unique ways to show your
            appreciation.
          </h3>

          <p className="uppercase text-gray-500 font-semibold mt-8 text-sm">oct 11, 2023</p>
        </a>
      </div>
    </>
  );
}

export default Gifts;
