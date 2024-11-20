"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../../components/Layout";
import { getBuyersCount } from "@/api/getBuyersCount";
import { getFarmersCount } from "@/api/getFarmersCount";

const Dashboard = () => {
  const router = useRouter();
  const [userCount, setUserCount] = useState(0);
  const [farmerCount, setFarmerCount] = useState(0);
  const [buyerCount, setBuyerCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [buyers, farmers] = await Promise.all([
          getBuyersCount(),
          getFarmersCount(),
        ]);
        setBuyerCount(buyers);
        setFarmerCount(farmers);
        setUserCount(buyers + farmers);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };
    const token = localStorage.getItem("token");
    if (token) {
      fetchCounts();
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-2xl">{userCount}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium">Total Farmers</h3>
            <p className="text-2xl">{farmerCount}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium">Total Buyers</h3>
            <p className="text-2xl">{buyerCount}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
