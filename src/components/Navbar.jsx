import { useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [sidebar, setsidebar] = useState(false);

  function handleClick() {
    setsidebar((prev) => !prev);
  }

  return (
    <>
      <div className=" flex h-20 p-4 justify-between md:px-14 md:py-6 md:h-24">
        {/* Name div */}

        <div className=" basis-40 text-center content-center text-xl font-semibold font-mono text-[#C7C7C7]">
          PRINCE GUPTA
        </div>

        {/* navigation icons */}

        <div className=" basis-56 justify-evenly hidden md:flex">
          <div className=" text-center content-center text-sm font-medium font-mono text-[#C7C7C7] hover:underline hover:text-orange-400">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive && "orange",
                };
              }}
            >
              Work
            </NavLink>
          </div>
          <div className=" text-center content-center text-sm font-medium font-mono text-[#C7C7C7] hover:underline hover:text-orange-400">
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  color: isActive && "orange",
                };
              }}
            >
              About
            </NavLink>
          </div>
          <div className=" text-center content-center text-sm font-medium font-mono text-[#C7C7C7] hover:underline hover:text-orange-400">
            Contact
          </div>
        </div>

        {/* menu icon code */}

        <div className="flex md:hidden">
          <div className="text-center content-center text-3xl font-medium font-mono text-[#C7C7C7]">
            <button onClick={handleClick}>☰</button>
            {sidebar && <Sidebar />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
