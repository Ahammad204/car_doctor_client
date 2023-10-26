import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookService from "../Pages/BookServices/BookService";

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

          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params})=> fetch(`http://localhost:5000/Services/${params.id}`)

        },{

          path:'/book/:id',
          element:<BookService></BookService>,
          loader:({params})=> fetch(`http://localhost:5000/Services/${params.id}`)

        }


      ]
    },
  ]);
   
  
 export default router;