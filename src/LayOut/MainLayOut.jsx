import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharedSection/Footer";
import Navbar from "../Pages/SharedSection/Navbar";


const MainLayOut = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
           { noHeaderFooter||   <Navbar></Navbar>}
            <div>
            <Outlet></Outlet>
        </div>
       { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;