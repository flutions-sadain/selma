import React, { useState } from 'react';
import { FaCloud, FaCloudUploadAlt, FaFileDownload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FcOpenedFolder } from "react-icons/fc";
import { MdRestorePage } from "react-icons/md";
import StarPattern from "../assets/image/StarPattern.svg";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="">
      <div className="px-10 flex justify-between items-center py-4 bg-[#F7F8FC] overflow-clip">
        <div>
          <h1 class="block text-4xl font-medium text-gray-800">Welcome to Selma</h1>
          <p class="mt-2 text-sm text-gray-600">
            Welcome to our data storage oasis! Where your information finds its perfect home.
          </p>
        </div>
        <img className="-mr-20" src={StarPattern} alt="" />
      </div>
      <div className="flex px-10 pt-4 pb-5">
        <div className="w-1/4 bg-[#F7F8FC] mr-5 border border-gray-400 rounded-md h-auto">
          <Link to="/" type="button" onClick={toggleDropdown} className="flex justify-between items-center w-full pt-5 px-4">
            <div className="flex items-center">
              <FaCloud className="text-md" />
              <span className="text-md font-medium pl-2">Dashboard</span>
            </div>
            <FaPlus className="text-md" />
          </Link>
          <div className={`${isDropdownOpen ? "block" : "hidden"} px-4`}>
            <ul class="py-2 text-black text-sm">
              <li>
                <div className="flex items-center">
                  <IoIosArrowDown className="text-lg" />
                  <a href="#" class="block px-2 py-2">All Files</a>
                </div>
                <ul className="pl-5">
                  <li className="flex items-center">
                    <IoIosArrowForward className="text-lg" />
                    <FcOpenedFolder className="text-lg" />
                    <a href="#" class="block px-2 py-1">New files</a>
                  </li>
                  <li className="flex items-center">
                    <IoIosArrowDown className="text-lg" />
                    <FcOpenedFolder className="text-lg" />
                    <a href="#" class="block px-2 py-1">New files</a>
                  </li>
                  <li>
                    <ul className="pl-5">
                      <li className="flex items-center">
                        <IoIosArrowForward className="text-lg" />
                        <FcOpenedFolder className="text-lg" />
                        <a href="#" class="block px-2 py-1">New files</a>
                      </li>
                      <li className="flex items-center">
                        <IoIosArrowForward className="text-lg" />
                        <FcOpenedFolder className="text-lg" />
                        <a href="#" class="block px-2 py-1">New files</a>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex items-center">
                  <IoIosArrowForward className="text-lg" />
                  <a href="#" class="block px-2 py-2">Photo</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <IoIosArrowForward className="text-lg" />
                  <a href="#" class="block px-2 py-2">Shared</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <IoIosArrowForward className="text-lg" />
                  <a href="#" class="block px-2 py-2">Deleted</a>
                </div>
              </li>
            </ul>
          </div>
          <Link to="/backup" className="flex justify-between items-center w-full pb-4 pt-4 px-4">
            <div className="flex items-center">
              <FaCloudUploadAlt className="text-md" />
              <span className="text-md font-medium pl-2">Backup</span>
            </div>
          </Link>
          <Link to="#" className="flex justify-between items-center w-full pb-4 px-4">
            <div className="flex items-center">
              <FaFileDownload className="text-md" />
              <span className="text-md font-medium pl-2">Restore</span>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;