// components/UserCard.jsx
import React, { useState } from "react";

const UserCard = ({ user, onDelete }) => {
  const [isActive, setIsActive] = useState("Active");

  const toggleStatus = () => {
    setIsActive((prevStatus) =>
      prevStatus === "Active" ? "Inactive" : "Active"
    );
  };

  const getRole = () => {
    if (user.is_buyer) return "Buyer";
    if (user.is_farmer) return "Farmer";
    return "Unknown";
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">Role: {getRole()}</p>
        <p className="text-gray-600">Status: {isActive}</p>
      </div>
      <div>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
        <button
          onClick={toggleStatus}
          className={`px-3 py-1 rounded ${
            isActive === "Active"
              ? "bg-gray-500 text-white hover:bg-gray-600"
              : "bg-green-500 text-white hover:bg-green-600"
          } transition duration-200`}
        >
          {isActive === "Active" ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
