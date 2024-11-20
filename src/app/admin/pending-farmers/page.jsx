"use client";
import { useState } from "react";
import Layout from "../../../components/Layout";
import FarmerCard from "../../../components/FarmerCard";

const PendingFarmers = () => {
  // Mock data for pending farmers
  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "Alice Farmer",
      email: "alice@example.com",
      phone_number: "555-1111",
      farm_size: 100.5,
      address: "Farm 1 Address",
    },
    {
      id: 2,
      name: "David Farmer",
      email: "david@example.com",
      phone_number: "555-4444",
      farm_size: 150.0,
      address: "Farm 2 Address",
    },
    // Add more mock farmers as needed
  ]);

  const handleApprove = (id) => {
    // TODO: Implement approve farmer API call
    // Example:
    // fetch(`/api/admin/farmers/${id}/approve`, { method: 'POST' });

    // Mock approval by removing from pending list
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
    alert(`Farmer with ID ${id} approved.`);
  };

  const handleReject = (id) => {
    const reason = prompt("Enter reason for rejection:");
    if (reason) {
      // TODO: Implement reject farmer API call with reason
      // Example:
      // fetch(`/api/admin/farmers/${id}/reject`, { method: 'POST', body: JSON.stringify({ reason }) });

      // Mock rejection by removing from pending list
      setFarmers(farmers.filter((farmer) => farmer.id !== id));
      alert(`Farmer with ID ${id} rejected for reason: ${reason}`);
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Pending Farmers</h2>
        {farmers.length === 0 ? (
          <p>No pending farmers.</p>
        ) : (
          farmers.map((farmer) => (
            <FarmerCard
              key={farmer.id}
              farmer={farmer}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default PendingFarmers;
