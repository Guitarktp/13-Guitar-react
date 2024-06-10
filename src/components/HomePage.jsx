import { Outlet, Link } from "react-router-dom";


const HomePage = () => {
 

    return (
      <div className="flex flex-col justify-center items-center ">
        <h1 className='font-bold text-[48px] mt-12'>
          Generation Thailand<br />
          React - Assessment
        </h1>
        <div > 
          <button className="rounded-lg shadow-md px-4 py-2">
            <Link to="/User">
                User
            </Link>
          </button>
          <button className="rounded-lg shadow-md px-4 py-2">
            <Link to="/Admin">
                Admin
            </Link>
          </button>
        </div>
        <Outlet />
          
      </div>
     
    )
  }
  
  export default HomePage
  