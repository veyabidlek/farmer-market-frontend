import axios from "axios";
import { getToken } from "./getToken";
export const getPendingFarmers = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/admin/farmers/pending`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("cannot get pending users...");
  }
};
