import axios from "axios";
import { getToken } from "./getToken";
export const getUsers = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Erorr getting users...");
  }
};
