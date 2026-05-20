import api from "./api";
// ADMIN - GET ALL TRASH LOGS
export const getAllTrashLogs =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/transaksi/all",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data.data;
};