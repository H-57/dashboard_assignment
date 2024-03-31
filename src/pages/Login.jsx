import React from "react";
import { FaUser, FaLock } from "react-icons/fa6";

function Login() {
  return (
    <>
      <section className="flex justify-around  mt-[calc(30%-320px)] items-center m-auto  bg-white w-[600px] h-[320px]">
        <div className="flex flex-col gap-5 w-[50%]">
          <span className="relative flex items-center border p-2 gap-2">
            <FaUser className=" " />
            <input
              placeholder="Username"
              className="outline-none"
              type="text"
            />
          </span>
          <span className="relative flex items-center border p-2 gap-2">
            <FaLock className=" " />
            <input
              placeholder="Password"
              className="outline-none px-5"
              type="text"
            />
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-2">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-80 accent-[#694BDB]"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-black">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm text-primary-600 hover:underline text-[#694BDB] font-semibold  pl-2"
            >
              Forgot password?
            </a>
          </div>
          <button className="bg-[#694BDB] text-white rounded  py-1">Login</button>
          <span>OR <a
              href="#"
              className="text-sm text-primary-600 hover:underline text-[#694BDB]   pl-2"
            >
              registor Now!
            </a>
            </span> 
        </div>


        <div>
          <img src="login.png" alt="icon image" />
        </div>
      </section>
    </>
  );
}

export default Login;
