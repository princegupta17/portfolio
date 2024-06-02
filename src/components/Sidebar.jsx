import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-48 bg-[#0A0A0A] font-medium font-mono text-[#C7C7C7]">
        <ul>
          <li className="p-2 hover:underline hover:text-orange-400">
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
          </li>
          <li className="p-2 hover:underline hover:text-orange-400">
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
          </li>
          <li className="p-2 hover:underline hover:text-orange-400">Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
