import { NavLink, Outlet } from "react-router-dom";
import { AiFillContacts, AiFillHome, AiFillShop, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCalendarDateFill, BsBookmarks, BsPerson } from "react-icons/bs";
import { MdPayment, MdReviews } from "react-icons/md";
import UseCart from "../Hooks/UseCart";
import { FaList, FaUtensilSpoon } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = UseCart()
    // TODO: get  isAdmin value form data base
    const [isAdmin] = useAdmin()
    // console.log(isAdmin === true);
    // const isAdmins = true
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 min-h-screen bg-orange-500">
                <ul className="ml-5 mt-5 space-y-2 text-xl">
                    {
                        isAdmin ? <>
                            <li ><NavLink to='/dashboard/adminHome' className="flex gap-2 items-center"> <AiFillHome className="text-xl"></AiFillHome > Admin Home</NavLink></li>

                            <li ><NavLink to='/dashboard/addItems' className="flex gap-2 items-center"> <FaUtensilSpoon className="text-xl"></FaUtensilSpoon>Add Items</NavLink></li>

                            <li ><NavLink to='/dashboard/manageItems' className="flex gap-2 items-center">
                                <FaList className="text-xl"></FaList>
                                Manage Items </NavLink></li>


                            <li ><NavLink to='/dashboard/manageBookings' className="flex gap-2 items-center">
                                <BsBookmarks className="text-xl"></BsBookmarks>
                                Manage Bookings</NavLink></li>

                            <li ><NavLink to='/dashboard/allUsers' className="flex gap-2 items-center">
                                <BsPerson className="text-xl"></BsPerson>
                                All Users</NavLink></li>


                        </>

                            : <>

                                <li ><NavLink to='/dashboard/userHome' className="flex gap-2 items-center"> <AiFillHome className="text-xl"></AiFillHome > User Home</NavLink></li>

                                {/* <li ><NavLink to='/dashboard/reservation' className="flex gap-2 items-center"> <BsFillCalendarDateFill className="text-xl"></BsFillCalendarDateFill>Reservation</NavLink></li> */}

                                <li ><NavLink to='/dashboard/paymentHistory' className="flex gap-2 items-center"> <MdPayment className="text-xl"></MdPayment>Payment History</NavLink></li>

                                <li ><NavLink to='/dashboard/cart' className="flex gap-2 items-center"> <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart> My Cart ({cart.length})</NavLink></li>

                                {/* <li ><NavLink to='/dashboard/review' className="flex gap-2 items-center"> <MdReviews className="text-xl"></MdReviews> Add Review</NavLink></li> */}

                                <li ><NavLink to='/dashboard/booking' className="flex gap-2 items-center"> <BsBookmarks className="text-xl"></BsBookmarks> My Booking</NavLink></li>
                            </>


                    }

                    <div className="divider text-white bg-white"></div>

                    {/* for all users */}

                    <li ><NavLink to='/' className="flex gap-2 items-center"> <AiFillHome className="text-xl"></AiFillHome >Home</NavLink></li>

                    <li ><NavLink to='/ourmenu' className="flex gap-2 items-center"> <AiOutlineMenu className="text-xl"></AiOutlineMenu >Our Menu</NavLink></li>

                    <li ><NavLink to='/order' className="flex gap-2 items-center"> <AiFillShop className="text-xl"></AiFillShop>Order</NavLink></li>

                    {/* <li ><NavLink to='/contactus' className="flex gap-2 items-center"> <AiFillContacts className="text-xl"></AiFillContacts>Contact Us</NavLink></li> */}

                </ul>
            </div>
            <div className="col-span-9 mt-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;




