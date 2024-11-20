"use client";
import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import UserCard from "../../../components/UserCard";
import { getUsers } from "@/api/getUsers";
import { deleteUser } from "@/api/deleteUser";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const getGuys = async () => {
    try {
      const guys = await getUsers();
      setUsers(guys);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getGuys();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert(`User with ID ${id} deleted.`);
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        {users.length === 0 ? (
          <p>No users available.</p>
        ) : (
          users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default ManageUsers;
