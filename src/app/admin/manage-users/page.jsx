"use client";
import { useState } from "react";
import Layout from "../../../components/Layout";
import UserCard from "../../../components/UserCard";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Farmer",
      email: "alice@example.com",
      role: "Farmer",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Buyer",
      email: "bob@example.com",
      role: "Buyer",
      status: "Active",
    },
    {
      id: 3,
      name: "David Farmer",
      email: "david@example.com",
      role: "Farmer",
      status: "Active",
    },
    {
      id: 4,
      name: "Eve Buyer",
      email: "eve@example.com",
      role: "Buyer",
      status: "Active",
    },
  ]);

  const handleDelete = (id) => {
    // TODO: Implement delete user API call
    // Example:
    // fetch(`/api/admin/users/${id}`, { method: 'DELETE' });

    // Mock delete by removing user from list
    setUsers(users.filter((user) => user.id !== id));
    alert(`User with ID ${id} deleted.`);
  };

  const handleToggleStatus = (id) => {
    // TODO: Implement disable/enable user API call
    // Example:
    // fetch(`/api/admin/users/${id}/toggle-status`, { method: 'POST' });

    // Mock toggle by updating user status
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Disabled" : "Active",
            }
          : user
      )
    );
  };

  const handleEdit = (id) => {
    // TODO: Implement edit user functionality
    alert(`Edit functionality for user ID ${id} is not implemented yet.`);
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        {users.length === 0 ? (
          <p>No users available.</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default ManageUsers;
