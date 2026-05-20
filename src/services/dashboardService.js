import api from "./api";

export const getDashboard = async () => {

  const token = localStorage.getItem("token");

  return await api.get(
    "/users/dashboard",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};