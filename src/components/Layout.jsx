import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-[#E8E8E8] p-4 border-b border-black"> 
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/" className=" font-bold hover:text-gray-400 text-[20px]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className=" font-bold hover:text-gray-400 text-[20px]">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;