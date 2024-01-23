import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-10 bg-white shadow-md">
      <div className="flex items-start">
        <img src="/assets/logo.png" alt="Logo" className="w-24 h-10" />
      </div>
      <div className="flex items-center justify-center flex-grow">
        <ul className="flex space-x-20 font-semibold text-{19.39px}">
          <li className="hover:text-mycolor">
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>

          <li>
            <Link to="/blog" className="text-black hover:text-mycolor">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="text-black hover:text-mycolor">
              About us
            </Link>
          </li>
          <li className="">
            <Link to="#" className="text-black hover:text-mycolor">
              Portifolio
            </Link>
          </li>

          <li>
            <Link to="#" className="text-black hover:text-mycolor">
              Management profile
            </Link>
          </li>
        </ul>
      </div>

      <button className="px-4 py-2 text-white bg-mycolor shadow-3xl rounded-3xl w-{151.85px} h-{52.77px} font-medium px-6 ">
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
