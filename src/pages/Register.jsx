import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from "../assets/image/Logo.svg";
import BgPattern from "../assets/image/BgPattern.svg";
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="bg-[#F6F4FF] h-screen bg-auto bg-repeat" style={{ backgroundImage: `url(${BgPattern})` }}>
            <div className="grid grid-cols-2 overflow-clip h-screen">
                <div>
                    <img className="pt-8 pl-10 w-40" src={Logo} alt="Selma" />
                    <div className="my-48 mx-20">
                        <h1 class="block text-4xl w-1/2 font-semibold text-[#2E0587]">Create a new account</h1>
                        <p class="mt-5 text-base text-[#2E0587] ">
                            Create your account today and experience the freedom of storing, accessing, and sharing your data securely from anywhere, anytime.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <span className="absolute inset-0 flex items-end bg-white w-[1000px] -mt-20 -ml-10  h-[1000px] rounded-s-full z-0"></span>
                    <div class="my-24 xl:mx-32 z-10 relative">
                        <div class="p-4 sm:p-7 z-10">
                            <div>
                                <form>
                                    <div class="grid gap-y-4">
                                        <div>
                                            <label for="email" class="block text-sm mb-2">Full Name</label>
                                            <div class="relative">
                                                <input type="text" id="email" name="fullName" placeholder="Enter your Full Name" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                                <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email" class="block text-sm mb-2">Email</label>
                                            <div class="relative">
                                                <input type="email" id="email" name="email" placeholder="Enter your email" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
                                                <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                        </div>
                                        <div>
                                            <div class="flex justify-between items-center">
                                                <label for="password" class="block text-sm mb-2">Password</label>
                                            </div>
                                            <div class="relative">
                                                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error" />
                                                <div
                                                    class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </div>
                                            </div>
                                            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                        </div>
                                        <div>
                                            <div class="flex justify-between items-center">
                                                <label for="password" class="block text-sm mb-2">Password Confirmation</label>
                                            </div>
                                            <div class="relative">
                                                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" class="py-3 px-4 block w-full bg-[#F5F7FA] focus:outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error" />
                                                <div
                                                    class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </div>
                                            </div>
                                            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                        </div>
                                        <Link to="/" type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#5417D7] text-white disabled:opacity-50 disabled:pointer-events-none">Sign up</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p class="mt-5 text-sm text-center text-gray-600">
                            Do you have an account? &nbsp;
                            <a class="text-[#5417D7] decoration-1 hover:underline font-medium" href="/login">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;