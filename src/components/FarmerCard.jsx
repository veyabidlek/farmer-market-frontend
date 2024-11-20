// components/FarmerCard.jsx
import React from "react";

const FarmerCard = ({ farmer, onApprove, onReject }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold">{farmer.name}</h3>
      <p className="text-gray-600">{farmer.email}</p>
      <p className="text-gray-600">Phone: {farmer.phone_number}</p>
      <p className="text-gray-600">Farm Size: {farmer.farm_size} acres</p>
      <p className="text-gray-600">Address: {farmer.address}</p>
      <div className="mt-4">
        <button
          onClick={() => onApprove(farmer.id)}
          className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition duration-200"
        >
          Approve
        </button>
        <button
          onClick={() => onReject(farmer.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default FarmerCard;
