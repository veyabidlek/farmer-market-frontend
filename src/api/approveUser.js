import axios from "axios";
import { getToken } from "./getToken";

export const approveUser = async (farmerId) => {
  try {
    await axios.post(
      `${process.env.BACKEND_URL}/admin/farmers/${farmerId}/approve`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  } catch (err) {
    console.error("error approving user...");
  }
};
