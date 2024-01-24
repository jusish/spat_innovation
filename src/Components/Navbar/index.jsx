import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="flex items-center justify-between w-full h-20 px-10 bg-white shadow-md">
      <div className="flex items-start">
        <img src="/assets/logo.png" alt="Logo" className="w-24 h-10" />
      </div>
      <div className="items-center justify-center flex-grow hidden lg:flex">
        <ul className="flex space-x-20 font-semibold text-{19.39px}">
          <li className="">
            <Link to="/" className="text-black hover:text-mycolor ">
              Home
            </Link>
          </li>

          <li>
            <Link to="/blog" className="text-black hover:text-mycolor ">
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

      <div className="flex items-center lg:hidden">
        <button onClick={toggleMenu}>
          <TiThMenu />
        </button>
      </div>

      {showMenu && (
        <div className="absolute left-0 w-full bg-white shadow-md top-20 lg:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 font-semibold text-19.39px">
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
      )}

      <button className="px-4 py-2 hidden lg:block text-white bg-mycolor hover:shadow-3xl transition-shadow rounded-3xl w-{151.85px} h-{52.77px} font-medium px-6 ease-in-out">
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
