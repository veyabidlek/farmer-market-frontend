import { getUsers } from "./getUsers";

export const getFarmersCount = async () => {
  try {
    const users = await getUsers();
    let farmersCount = 0;
    for (let user of users) {
      if (user.is_farmer) {
        farmersCount++;
      }
    }

    return farmersCount;
  } catch (err) {
    console.error("Error getting farmers count:", err);
  }
};
