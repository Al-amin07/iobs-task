import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo1.png";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const { logOut } = useAuth();
  const [ carts ] = useCart();
  const handleLogOut = async () => {
    await logOut()
  }
  const navLinks = (
    <>
      <li>
        <NavLink className={"text-lg font-medium nav"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-lg font-medium nav"} to={"/products"}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-lg font-medium nav"} to={"/category"}>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-lg font-medium nav"} to={"/custom"}>
          Custom
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-lg font-medium nav"} to={"/blog"}>
          Blog
        </NavLink>
      </li>
    </>
  );
  const { user } = useAuth();
  return (
    <div className="navbar bg-base-100 py-3 fixed top-0  shadow-md  z-30 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="hover:scale-105 w-40">
          <img className="w-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 items-center px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-4">
       
        {user ? (
          <>
           <Link to={'/cart'} className="relative hover:scale-110 transition-all mr-5">
          <FaShoppingCart size={36} />
          <span className="  text-center absolute bottom-0 h-6 w-6  rounded-full -right-4 font-bold bg-red-500 text-white">
            {carts?.items?.reduce((sum, item) => sum + item.quentity,0) || 0}
          </span>
        </Link>
        <div className="avatar hover:scale-75 transition-all">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button onClick={handleLogOut} className="py-2 hover:scale-105 transition-all px-4 rounded-full bg-red-500 text-white">Log Out</button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="btn bg-gradient-to-t from-blue-600 to-purple-600 text-white"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
