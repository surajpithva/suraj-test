import { Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import AllProducts from "./pages/products/AllProduct";
import Cart from "./pages/cart/Cart";


export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/all-products",
    element: <AllProducts />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
