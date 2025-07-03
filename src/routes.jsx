import { Navigate } from "react-router-dom";


export const routes = [
  {
    path: "/",
    element: <Login />,
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
    element: <Navigate to="/" replace />,
  },
];
