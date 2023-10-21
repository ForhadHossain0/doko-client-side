import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Mycarts from "./components/mycarts/Mycarts";
import Login from "./components/loginandregister/Login";
import Addproduct from "./components/productadd/Addproduct";
import Error from "./components/errorpage/Error";
import Register from "./components/loginandregister/Register";
import Brand1 from "./components/brandpages/Brand1";
import Brand2 from "./components/brandpages/Brand2";
import Brand4 from "./components/brandpages/Brand4";
import Brand3 from "./components/brandpages/Brand3";
import Brand5 from "./components/brandpages/Brand5";
import Updateproduct from "./components/productupdate/Updateproduct";
import Detail from "./components/productdetail/Detail";
import Authprovider from "./components/provider/Authprovider";
import Privetroute from "./components/privetroute/Privetroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/mycart",
        element: <Privetroute> <Mycarts></Mycarts> </Privetroute>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/addproduct",
        element: <Privetroute> <Addproduct></Addproduct> </Privetroute>
      },
      {
        path: "/updateproduct/:_id",
        element: <Updateproduct></Updateproduct>,
        loader: ({ params }) => fetch(`https://backend-server-beta.vercel.app/products/${params._id}`),
      },
      {
        path: "/brand1",
        element: <Privetroute> <Brand1></Brand1> </Privetroute> ,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/brand2",
        element: <Privetroute> <Brand2></Brand2></Privetroute>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/brand3",
        element: <Privetroute><Brand3></Brand3></Privetroute>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/brand4",
        element: <Privetroute><Brand4></Brand4></Privetroute>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path: "/brand5",
        element: <Privetroute><Brand5></Brand5></Privetroute>,
        loader: () => fetch(`https://backend-server-beta.vercel.app/products`),
      },
      {
        path:'/detailproduct/:_id',
        element: <Detail></Detail>,
        loader: ({ params }) => fetch(`https://backend-server-beta.vercel.app/products/${params._id}`),
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
