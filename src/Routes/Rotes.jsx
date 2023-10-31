import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import BookService from "../Pages/BookServices/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {

            path:'/',
            element:<Home></Home>


        },{

          path:'/login',
          element:<Login></Login>

        },{

          path:'/signup',
          element:<SignUp></SignUp>

        },{

          path:'/booking',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,

        },{

          path:'/book/:id',
          element:<PrivateRoutes><BookService></BookService></PrivateRoutes>,
          loader:({params})=> fetch(`https://car-doctor-server-one-rosy.vercel.app/Services/${params.id}`)

        }


      ]
    },
  ]);
   
  
 export default router;