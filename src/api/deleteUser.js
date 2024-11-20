import axios from "axios";
import { getToken } from "./getToken";

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${process.env.BACKEND_URL}/admin/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error("Failed to delete user. Please try again.");
  }
};
