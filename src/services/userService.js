import api from "./api";


// ======================================
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

// GET ALL USERS
export const getUsers = async () => {

  const token =
    localStorage.getItem("token");

  return await api.get(
    "/users",
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};

// UPDATE USER
export const updateUser = async (
  id,
  data
) => {

  const token =
    localStorage.getItem("token");

  return await api.put(
    `/users/${id}`,
    data,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};

// DELETE USER
export const deleteUser = async (
  id
) => {

  const token =
    localStorage.getItem("token");

  return await api.delete(
    `/users/${id}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};