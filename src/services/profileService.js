import api from "./api";

// GET PROFILE
export const getProfile = async () => {

  const token =
    localStorage.getItem("token");

  return await api.get(
    "/auth/me",
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};


// UPDATE PROFILE
export const updateProfile = async (data) => {

  const token =
    localStorage.getItem("token");

  return await api.put(
    "/users/profile",
    data,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};