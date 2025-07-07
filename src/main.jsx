import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Collection from "./page/Collection.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import ProductDetail from "./page/ProductDetail.jsx";
import CheckoutPage from "./page/CheckoutPage.jsx";
import Admin from "./page/Admin.jsx";
import CartPage from "./page/CartPage.jsx";
import LoginPage from "./page/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/collection", element: <Collection /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/:product", element: <ProductDetail /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkoutPage", element: <CheckoutPage /> },
      { path: "/LoginPage", element: <LoginPage /> },
    ],
  },
  { path: "/admin", element: <Admin /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
