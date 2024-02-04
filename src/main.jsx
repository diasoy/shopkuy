import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Electronics from "./pages/Electronics.jsx";
import Clothes from "./pages/Clothes.jsx";
import Furniture from "./pages/Furniture.jsx";
import Miscellaneous from "./pages/Miscellaneous.jsx";
import Shoes from "./pages/Shoes.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetail from "./layouts/ProductDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/product/:id`,
    element: <ProductDetail />,
  },
  {
    path: "/clothes",
    element: <Clothes />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/furniture",
    element: <Furniture />,
  },
  {
    path: "/miscellaneous",
    element: <Miscellaneous />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
  },
  // {
  //   path: "/basket",
  //   element: <Basket />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
