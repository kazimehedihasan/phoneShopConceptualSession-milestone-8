import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Favorites from "../components/Favorites/Favorites";
import Login from "../components/Login/Login";
import ErrorPagas from "../components/ErrorPagas/ErrorPagas";
import Phone from "../components/Phone/Phone";


const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPagas></ErrorPagas>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch('/phones.json')
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:'/phones/:id',
        element: <Phone></Phone>,
        loader:() => fetch('/phones.json'),
      }
    ],
  },
]);

export default myCreatedRouter;
