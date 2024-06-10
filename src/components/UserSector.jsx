import { Outlet, Link } from "react-router-dom";
import AdminSec from "./AdminSector";

function UserSec() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[48px] mt-12">
        Generation Thailand
        <br />
        React - UserSector
      </h1>

      <div>
        <button className="rounded-lg shadow-md px-4 py-2">
          <Link to="/user">User</Link>
        </button>
        <button className="rounded-lg shadow-md px-4 py-2">
          <Link to="/admin">Admin</Link>
        </button>
      </div>


      {/* <AdminSec /> */}
      <table >
          <thead >
            <tr >
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {/* {employees.map((employee, index) => (
            <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.last}</td>
                <td>{employee.position}</td>
                <td><button className="text-red-500" onClick={() => deleteEmployee(index)}>Delete</button></td>
            </tr>
            ))} */}
          </tbody>


        </table>

      

      <Outlet />
    </div>
  );
}

export default UserSec;
