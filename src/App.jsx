import { Outlet } from "react-router-dom";
import { Contact, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="bg-[#0A0A0A] text-[#FFFFFF]">
        <Navbar />
        <Outlet />
        <Contact />
      </div>
    </>
  );
}

export default App;
