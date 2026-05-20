import api from "./api";

// GET REWARD
export const getRewards =
  async () => {

    const response =
      await api.get(
        "/rewards"
      );

    return response.data.data;
};

// CREATE REWARD
export const createReward =
  async (formData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        "/rewards",
        formData,
        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
};

// TUKAR REWARD
export const tukarReward =
  async (reward_id) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        "/rewards/tukar",
        { reward_id },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

// DELETE REWARD
export const deleteReward =
  async (id) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.delete(
        `/rewards/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

// UPDATE REWARD
export const updateReward =
  async (id, formData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.put(
        `/rewards/${id}`,
        formData,
        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
};

// GET LOG ADMIN
export const getAllRewardLogs =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/rewards/riwayat/all",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data.data;
};