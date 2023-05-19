import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#FF55BB]">
        <div className="navbar w-10/12 mx-auto ">
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
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            {/* Navbar Start */}
            <div className="inline-flex items-center">
                <img className="w-10 rounded-full  me-2" src="https://i.ibb.co/hWczT9S/pngtree-kids-logo-image-79551.jpg" alt="logo" />
            <Link className=" text-white text-2xl font-bold">
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
            <ul className="text-white font-semibold text-lg">
              <li className="me-4"><NavLink to={'/login'}>Login</NavLink></li>
            </ul>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-[#ff0099] ring-offset-base-200 ring-offset-2">
                <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
