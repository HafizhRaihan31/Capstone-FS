import api from "./api";

export const scanImage = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  return await api.post("/scan", formData);
};

export const saveScan = async (data) => {
  return await api.post("/save", data);
};