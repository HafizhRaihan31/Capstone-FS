import api from "./api";

// GET PROFILE
export const getProfile = async () => {
  const token = localStorage.getItem("token");
  return await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE PROFILE (support FormData untuk upload foto)
export const updateProfile = async (data) => {
  const token = localStorage.getItem("token");

  // Kalau data adalah FormData, jangan set Content-Type
  // biar browser set otomatis dengan boundary
  const isFormData = data instanceof FormData;

  return await api.put("/users/profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
  });
};