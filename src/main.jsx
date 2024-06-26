import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Login from "./pages/Login.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import Shimmer from "./components/Shimmer.jsx";


const Store = lazy(() => import("./pages/Store.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/", element: <Home /> },
      {
        path: "/store",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Store />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
      { path: "/store/:productId", element: <ProductPage /> },
    ],
  },
  {
    path: "/resetpassword",
    element: <ForgetPassword />,
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <RouterProvider router={appRouter} />
  </CartContextProvider>,
);
