import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
