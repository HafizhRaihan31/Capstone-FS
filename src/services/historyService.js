import api from "./api";

export const getHistory = async () => {
  const token = localStorage.getItem("token");
  return await api.get("/users/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getRewardHistory = async () => {
  const token = localStorage.getItem("token");
  return await api.get("/rewards/riwayat", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};