import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer";
import Navbar from "../Pages/Sheard/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;