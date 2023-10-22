import React, { useEffect } from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gift from "./pages/Gift"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import User from "./components/User";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-blog-area");
  });


  // method one to make router
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "gift",
  //         element: <Gift />
  //       },
  //       {
  //         path: "blog",
  //         element: <Blog />
  //       },
  //       {
  //         path:"contact",
  //         element: <Contact />
  //       }
  //     ],
  //   },
  // ]);


  // method two to create router

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<Layout />} >
        <Route path = "gift" element={<Gift />}/>
        <Route path = "blog" element={<Blog />}/>
        <Route path = "contact" element={<Contact />}/>
        <Route path = "user/:id" element={<User />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
