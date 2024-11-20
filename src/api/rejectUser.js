import axios from "axios";
import { getToken } from "./getToken";

export const rejectUser = async (farmerId, reason) => {
  try {
    await axios.post(
      `${process.env.BACKEND_URL}/admin/farmers/${farmerId}/reject?reason=${reason}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  } catch (err) {
    console.error("error rejecting user...");
  }
};
