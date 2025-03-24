import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center">
        <img src={Logo} />
        <span>DEEP NET SOFT</span>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-500">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/menu" className="text-blue-500">
            MENU
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="hover:text-blue-500">
            MAKE A RESERVATION
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
