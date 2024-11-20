"use client";

import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import FarmerCard from "../../../components/FarmerCard";
import { getPendingFarmers } from "@/api/getPendingFarmers";
import { getUserById } from "@/api/getUserById";
import { approveUser } from "@/api/approveUser";
import { rejectUser } from "@/api/rejectUser";

const PendingFarmers = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsersName = async (userId) => {
    try {
      const user = await getUserById(userId);
      return user.name;
    } catch (err) {
      console.error(`Failed to fetch user with ID ${userId}:`, err);
      return "Unknown User";
    }
  };

  useEffect(() => {
    const fetchPendingFarmers = async () => {
      try {
        const pendingFarmers = await getPendingFarmers();
        // Fetch user names for each pending farmer
        const farmersWithUserNames = await Promise.all(
          pendingFarmers.map(async (farmer) => {
            const userName = await getUsersName(farmer.user_id);
            return {
              farmer_id: farmer.farmer_id,
              user_id: farmer.user_id,
              email: farmer.email,
              name: userName,
              pending: farmer.pending,
            };
          })
        );
        setFarmers(farmersWithUserNames);
      } catch (err) {
        console.error("Error fetching pending farmers:", err);
        setError("Failed to load pending farmers.");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingFarmers();
  }, []);

  const handleApprove = async (farmerId) => {
    try {
      await approveUser(farmerId);
      setFarmers(farmers.filter((farmer) => farmer.farmer_id !== farmerId));
      alert(`Farmer with ID ${farmerId} approved.`);
    } catch (err) {
      console.error("Failed to approve farmer...");
    }
  };

  const handleReject = async (farmerId) => {
    try {
      const reason = prompt("Enter reason for rejection:");

      if (reason) {
        await rejectUser(farmerId, reason);
        setFarmers((prevFarmers) =>
          prevFarmers.filter((farmer) => farmer.farmer_id !== farmerId)
        );

        alert(`Farmer with ID ${farmerId} rejected for reason: ${reason}`);
      }
    } catch (err) {
      console.error("Error rejecting the farmer: ", err);
      alert("Failed to reject the farmer. Please try again.");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center mt-10">Loading pending farmers...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center mt-10 text-red-500">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Pending Farmers</h2>
        {farmers.length === 0 ? (
          <p>No pending farmers.</p>
        ) : (
          farmers.map((farmer) => (
            <FarmerCard
              key={farmer.farmer_id}
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
