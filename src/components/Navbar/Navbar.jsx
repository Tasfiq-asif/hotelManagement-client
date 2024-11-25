import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Button from "../Button";
import { useTheme } from "../../providers/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useAuth();
 const { theme, toggleTheme } = useTheme();



  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };



  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow text-black bg-white"
          >
            <li>
              <Link to={"/rooms"}>Rooms</Link>
            </li>
            <li>
              <Link to={"/mybookings"}>My Bookings</Link>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn text-xl ">
          StayScape
        </Link>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        {user ? (
          <Button onClick={() => handleSignOut()}>LogOut</Button>
        ) : (
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
        {/* Theme Toggle */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
            onChange={toggleTheme}
            checked={theme === "dark"} // Set toggle state based on theme
          />
          <span>{theme === "dark" ? "Dark" : "Light"}</span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
