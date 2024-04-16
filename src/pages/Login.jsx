import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from "../assets/image/Logo.svg";
import LoginBanner from "../assets/image/LoginBanner.svg";
import BgPattern from "../assets/image/BgPattern.svg";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-[#F6F4FF] h-screen bg-auto bg-repeat" style={{ backgroundImage: `url(${BgPattern})` }}>
      <div className="grid grid-cols-2 overflow-clip h-screen">
        <div>
          <img className="pt-8 pl-10 w-40" src={Logo} alt="Selma" />
          <div className="flex justify-center items-center">
            <img className="w-3/5 mx-auto my-20" src={LoginBanner} alt="" />
          </div>
        </div>
        <div className="relative">
            <span className="absolute inset-0 flex items-end bg-white w-[1000px] -mt-20 -ml-10  h-[1000px] rounded-s-full z-0"></span>
          <div class="my-20 xl:mx-32 z-10 relative">
            <div class="p-4 sm:p-7 z-10">
              <div class="text-center">
                <h1 class="block text-4xl font-medium text-gray-800">Welcome Back</h1>
                <p class="mt-2 text-sm text-gray-600">
                  Enter your email and password to access your account
                </p>
              </div>

              <div class="mt-16 mb-10">
                <form>
                  <div class="grid gap-y-4">
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
                    <div class="flex items-center justify-between">
                      <div class="flex">
                        <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500" />
                      <div class="ms-3">
                        <label for="remember-me" class="text-sm">Remember me</label>
                      </div>
                      </div>
                      <a class="text-sm text-[#5417D7] decoration-1 hover:underline font-medium" href="/forgot_password">Forgot password?</a>
                    </div>
                    <Link to="/" type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#5417D7] text-white disabled:opacity-50 disabled:pointer-events-none">Sign in</Link>
                  </div>
                </form>
                <button type="button" class="w-full py-3 px-4 mt-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                    <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                    <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                    <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                    <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
            <p class="mt-2 text-sm text-center text-gray-600">
                  Don't have an account yet? &nbsp;
                  <a class="text-[#5417D7] decoration-1 hover:underline font-medium" href="/register">
                    Sign up here
                  </a>
                </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;