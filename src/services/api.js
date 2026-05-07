const BASE_URL = "http://localhost:5000/api";
// command: ganti dengan URL backend kamu (Flask/Node)

export const loginUser = async (data) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // command: endpoint login (auth)
};

export const registerUser = async (data) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // command: endpoint register
};

export const getDashboard = async () => {
  return fetch(`${BASE_URL}/dashboard`);
  // command: ambil poin, total sampah, history
};

export const getRewards = async () => {
  return fetch(`${BASE_URL}/rewards`);
  // command: ambil list reward dari DB
};

export const scanImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  return fetch(`${BASE_URL}/scan`, {
    method: "POST",
    body: formData,
  });
  // command: kirim gambar ke AI model → return label, confidence, points
};

export const saveScan = async (data) => {
  return fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // command: simpan hasil scan ke DB (history + tambah poin user)
};