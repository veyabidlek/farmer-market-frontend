// components/UserCard.jsx
import React from "react";

const UserCard = ({ user, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">Role: {user.role}</p>
        <p className="text-gray-600">Status: {user.status}</p>
      </div>
      <div>
        <button
          onClick={() => onEdit(user.id)}
          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
        <button
          onClick={() => onToggleStatus(user.id)}
          className={`px-3 py-1 rounded ${
            user.status === "Active"
              ? "bg-gray-500 text-white hover:bg-gray-600"
              : "bg-green-500 text-white hover:bg-green-600"
          } transition duration-200`}
        >
          {user.status === "Active" ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
