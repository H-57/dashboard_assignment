import React from "react";
import Sidebar from "../components/Sidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Hero from "../components/Hero"

function Dashboard() {
  return (
    <section className="flex   bg-[#f8f9fa] ">
      <div className="bg-white">
        <Sidebar />
      </div>

      <div className="  ">
        {/* nav section start */}
        <nav className="flex w-full   bg-white h-20 justify-between px-20 border-b-2">
          <div className="flex items-center">
            <span className="flex items-center border rounded-2xl bg-gray-100 text-gray-400 py-2 px-4">
              <FaMagnifyingGlass />
              <input type="text" className="outline-none bg-transparent ml-4" placeholder="Search" />
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <FaBell className="text-gray-500" />

            <span>Kate Westrich</span>
            <span className="text-2xl bg-purple-500 px-4 py-2 rounded-full">
              K
            </span>
          </div>
        </nav>
{/* nav end */}


        <section>
<Hero />
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
