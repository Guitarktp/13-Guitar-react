import { Outlet, Link } from "react-router-dom";
import AdminSec from "./AdminSector";

const UserSec = ({employees, name, last, position}) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[48px] mt-12">
        Generation Thailand
        <br />
        React - UserSector
      </h1>

      <div className="my-4">
        <button className="rounded-lg shadow-md px-4 py-2">
          <Link to="/User">User</Link>
        </button>
        <button className="rounded-lg shadow-md px-4 py-2">
          <Link to="/Admin">Admin</Link>
        </button>
      </div>


     
      <table className="table-auto h-36 divide-y divide-gray-200 w-full mt-8">
          <thead className="bg-gray-50" >
            <tr className="text-xs font-medium  uppercase text-center">
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                
            </tr>
          </thead>

          <tbody>
          {employees.map((employee, index) => (
            <tr className="text-xs font-medium text-gray-500 uppercase text-center" key={index}>
                <td>{employee.name}</td>
                <td>{employee.last}</td>
                <td>{employee.position}</td>
        
            </tr>
            ))}
          </tbody>


        </table>

      

      <Outlet />
    </div>
  );
}

export default UserSec;
