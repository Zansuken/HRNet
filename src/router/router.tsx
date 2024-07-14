import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import CreateEmployee from "../pages/CreateEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => import("../components/Loader"),
  },
  {
    path: "/employees",
    element: <Employees />,
    loader: () => import("../components/Loader"),
  },
  {
    path: "create-employee",
    element: <CreateEmployee />,
    loader: () => import("../components/Loader"),
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
