import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Favorites from "../components/Favorites/Favorites";
import Login from "../components/Login/Login";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      }
    ],
  },
]);

export default myCreatedRouter;
