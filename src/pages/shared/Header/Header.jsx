import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="bg-[#FF55BB]">
        <div className="navbar w-full  md:w-10/12 mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
                <li>
                <NavLink to={"/alltoys"}>All Toys</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              </ul>
            </div>
            {/* Navbar Start */}
            <div className="inline-flex items-center">
              <img
                className="w-10 rounded-full  me-2"
                src="https://i.ibb.co/hWczT9S/pngtree-kids-logo-image-79551.jpg"
                alt="logo"
              />
              <Link className=" text-white md:text-2xl font-bold">
                Kids Toys With Education
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="text-white text-lg font-semibold flex space-x-4">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/alltoys"}>All Toys</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="text-white font-semibold text-lg flex items-center space-x-4">
              {
                user && (
                  <>
                  <li className="hidden md:block">
                    <Link to={'/addtoy'}>Add A Toy</Link>
                  </li>
                  <li className="hidden md:block">
                    <Link to={'/mytoys'}>My Toys</Link>
                  </li>
                  </>
                )
              }
              {user ? (
                <>
                  <li>
                    <NavLink
                      onClick={handleLogOut}
                      className={
                        "font-semibold bg-white text-[#ff0099] px-4 py-2 rounded "
                      }
                    >
                      {" "}
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to={"/login"}
                    className={
                      "font-semibold bg-white text-[#ff0099] px-4 py-2 rounded "
                    }
                  >
                    {" "}
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
            {user && (
              <>
                <div className="avatar">
                  <div className="w-10 ms-5 rounded-full cursor-pointer ring ring-[#ff0099] ring-offset-base-200 ring-offset-2">
                    <img src={user?.photoURL} alt="user display image" title={user?.displayName} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
