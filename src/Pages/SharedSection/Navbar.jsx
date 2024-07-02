import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineShoppingCart} from "react-icons/ai";
import UseCart from "../../Hooks/UseCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [cart] = UseCart()
  const navbar = <>
    <li><Link to='/'>HOME</Link></li>
    {/* <li><Link>CONTACT US</Link></li> */}
    <li><Link to="/dashboard">DASHBOARD</Link></li>
    <li><Link to='/ourmenu'>OUR MENU</Link></li>
    <li><Link to='/order'>ORDER</Link></li>
    <li><Link to='/dashboard/cart'>
      <button className="flex gap-2">
        <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
        <div className="badge badge-secondary">{cart.length}</div>
      </button>

    </Link></li>

    {
      user && isAdmin &&  <li><Link to='/dashboard/adminHome'>Profile</Link></li>
    }
    {
      user && !isAdmin &&  <li><Link to='/dashboard/userHome'>Profile</Link></li>
    }


    {
      user ? <>
        <button onClick={() => logOut()} className="btn btn-ghost">LogOut</button></>

        : <li><Link to='login'>LOGIN</Link></li>
    }

  </>

  return (
    <div className=" ">
      <div className="navbar fixed z-20 bg-opacity-60 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navbar
              }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-end w-full hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex items-center">
            {
              navbar
            }
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;