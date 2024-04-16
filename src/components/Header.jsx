import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/image/Logo.svg";
import Profile from "../assets/image/Profile.jpg";

const Header = () => {
  return (
    <nav className="bg-white border shadow-sm px-10">
    <div className="mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <img className="w-28 pt-2 pb-2" src={Logo} alt="Selma" />
        </div>
        <ul className="flex space-x-6 pt-2">
          <Link to="/" className="text-[#5417D7] pb-3 font-medium border-b-[3px] border-[#5417D7]  hover:text-[#5417D7] cursor-pointer">Dashboard</Link>
          <Link to="/configuration" className="text-black pb-3 font-medium active:text-[#5417D7] hover:text-[#5417D7] cursor-pointer">Configuration</Link>
          <Link to="/operations" className="text-black pb-3 font-medium active:text-[#5417D7] hover:text-[#5417D7] cursor-pointer">Operations</Link>
          <Link to="/decommissions" className="text-black pb-3 font-medium active:text-[#5417D7] hover:text-[#5417D7] cursor-pointer">Decommissions</Link>
        </ul>
        <div className="flex items-center pt-3 pb-2">
          <div className="relative">
            <div className="flex items-center focus:outline-none">
              <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full" />
              <div className="text-start">
                <span className="text-Black text-start font-semibold text-md ml-2">Evans Marcus</span>
                <button className="flex items-center justify-center">
                  <span className="text-Black text-xs ml-2">Tech Associate</span>
                  <span className="text-Black text-xs ml-2"><IoIosArrowDown /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header;