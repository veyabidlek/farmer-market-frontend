export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No Access Token Found!");
  }
  return token;
};
