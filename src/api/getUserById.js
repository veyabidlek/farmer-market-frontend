import axios from "axios";
import { getToken } from "./getToken";
export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/admin/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    console.log("geuserbyid response: ", response.data);
    return response.data;
  } catch (err) {
    console.error("Erorr getting users...");
  }
};
