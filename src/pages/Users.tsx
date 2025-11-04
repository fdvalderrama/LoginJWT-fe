import { useEffect, useState } from "react";
import type { User } from "../types/User";
const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 0,
      name: "",
      email: "",
      role: "",
    },
  ]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:5282/api/Users");

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Users</h1>

      <table className="w-1/3 border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
