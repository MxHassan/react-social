import { createBrowserRouter } from "react-router-dom";
// import MainRoutes from "./MainRoutes";
import Layout from "../layout/Layout";
import ErrorPage from "../views/errorpage/ErrorPage";
import Home from "../views/home/Home";
// const MainRoutes = {};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
