import { type RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
const Router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default Router;
