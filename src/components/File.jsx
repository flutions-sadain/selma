import React from 'react';
import { FiSearch } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";
import CategoryIcon1 from "../assets/image/CategoryIcon1.png"
import CategoryIcon2 from "../assets/image/CategoryIcon2.png"
import CategoryIcon3 from "../assets/image/CategoryIcon3.png"
import CategoryIcon4 from "../assets/image/CategoryIcon4.png"

const File = () => {
    return (
        <div>
            <div className="flex justify-between items-center pt-4">
                <div className="flex justify-between items-center">
                    <FiSearch className="text-xl text-gray-700" />
                    <input className="w-full h-10 px-2 py-2 placeholder-gray-800 focus:outline-none " type="text" placeholder="Search All Files" />
                </div>
                <div className="flex justify-between items-center gap-2">
                    <button type="button" className="flex justify-between items-center bg-gray-200 rounded-sm px-2 py-2">
                        <LuUpload />
                        <span className="pl-2">Upload</span>
                    </button>
                    <button type="button" className="flex justify-between items-center bg-gray-200 rounded-sm px-2 py-2">
                        <FaPlus />
                        <span className="pl-2">Create</span>
                    </button>
                </div>
            </div>
            <hr className="w-full border mt-2 border-gray-200" />
            <h1 className="text-xl mt-4 font-medium">Category</h1>
            <div className="mt-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <img className="w-14" src={CategoryIcon1} alt="Image" />
                        <h1 className="text-xl pt-2 text-gray-800 font-medium">Images</h1>
                        <div className="flex justify-between items-center text-base">
                            <p>437</p>
                            <p>64.9 Mb</p>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <img className="w-14" src={CategoryIcon2} alt="Image" />
                        <h1 className="text-xl pt-2 text-gray-800 font-medium">Files</h1>
                        <div className="flex justify-between items-center text-base">
                            <p>237</p>
                            <p>44.9 Mb</p>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <img className="w-14" src={CategoryIcon3} alt="Image" />
                        <h1 className="text-xl pt-2 text-gray-800 font-medium">Audio</h1>
                        <div className="flex justify-between items-center text-base">
                            <p>337</p>
                            <p>44.9 Mb</p>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <img className="w-14" src={CategoryIcon4} alt="Image" />
                        <h1 className="text-xl pt-2 text-gray-800 font-medium">Video</h1>
                        <div className="flex justify-between items-center text-base">
                            <p>237</p>
                            <p>94.9 Mb</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-xl mt-4 font-medium">Recent</h1>
            <div class="flex flex-col mt-4">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Type</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Shared</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date of change</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Size</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                                            <FcOpenedFolder className="text-lg" />
                                            <a href="#" class="px-2 py-1">New files</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Dox</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Just you</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31/04/2024</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">48.3 Mb</td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                                            <FcOpenedFolder className="text-lg" />
                                            <a href="#" class="px-2 py-1">New files</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Pdf</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">13 People</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31/04/2024</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">38.3 Mb</td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                                            <FcOpenedFolder className="text-lg" />
                                            <a href="#" class="px-2 py-1">New files</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Dox</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">09 People</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31/04/2024</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">78.3 Mb</td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                                            <FcOpenedFolder className="text-lg" />
                                            <a href="#" class="px-2 py-1">New files</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Pdf</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">12 People</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31/04/2024</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">68.3 Mb</td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                                            <FcOpenedFolder className="text-lg" />
                                            <a href="#" class="pl-2">New files</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Dox</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10 People</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31/04/2024</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">28.3 Mb</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default File;