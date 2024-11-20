import { getUsers } from "./getUsers";

export const getBuyersCount = async () => {
  try {
    const users = await getUsers();
    let buyersCount = 0;

    for (let user of users) {
      if (user.is_buyer) {
        buyersCount++;
      }
    }

    return buyersCount;
  } catch (err) {
    console.error("Error getting buyers count:", err);
  }
};
