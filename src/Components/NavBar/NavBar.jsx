import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const meneBar = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {meneBar}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/3d9d7Lf/hotel-logo.png"
            alt=""
            className="w-24 h-16"
          />
          <h2 className="md:text-2xl md:pl-5 pt-2 ">SeaSide Resort</h2>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{meneBar}</ul>
        </div>
        <div className="ml-[30%] md:ml-[40%] lg:ml-0">
          <a className="btn btn-outline btn-accent text-lg">Login</a>
          {/* propic section */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/w4b3n6F/avator.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/AddRoomCategory">
                  <button>Add Room Category</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>View Room Category</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Logout</button>
                </Link>
              </li>
            </ul>
          </div>
          {/* propic section */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
