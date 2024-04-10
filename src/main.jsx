import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import Cart from "./pages/Cart.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      {path: "/cart", element: <Cart/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <RouterProvider router={appRouter} />
  </CartContextProvider>,
);
