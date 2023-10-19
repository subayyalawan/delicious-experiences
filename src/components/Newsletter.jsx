import React from "react";

const Newsletter = ({query,setQuery}) => {

  return (
    <>
      <div className="container mx-auto">
        <div className="newsletter md:w-10/12 w-11/12 mx-auto my-20">
          <div className="flex md:justify-between md:flex-row flex-col justify-center md:p-8 p-4 bg-contact-yellow rounded shadow-sm">
            <div className="news-left">
              <h3 className="font-Freight-bold text-2xl capitalize">
                Join our newsletter
              </h3>
              <p className="font-Freight-medium text-sm">
                Enter your email and we'll keep you posted with news and
                updates!
              </p>
            </div>
            <div className="news-right md:w-1/2 w-full md:ml-4 ml-0 bg-white flex items-center p-2 text-xs">
              <input
                className="bg-white w-full mr-2 font-Freight-bold focus:outline-none cursor-pointer"
                type="search"
                name=""
                id=""
                placeholder="Enter Your E-mail"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="bg-black cursor-pointer text-white py-3 px-4 focus:outline-none text-xs rounded uppercase font-semibold" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
