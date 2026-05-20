import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { saveScan } from "../services/scanService";
import { scanImage } from "../services/scanService";

export default function Scan() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);

  };

  const handleScan = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const res = await scanImage(file);

      const data = await res.json();

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Gagal melakukan scan");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await saveScan(result);

      // command:
      // endpoint save history:
      // POST /api/save

      alert("Data berhasil disimpan!");
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data");
    }
  };

  const resetImage = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-green-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-green-900">
              Scan Sampah
            </h1>

            <p className="text-green-700 mt-2">
              Upload atau ambil gambar sampah untuk mendapatkan poin
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* LEFT SECTION */}
            <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-6">

              {/* EMPTY STATE */}
              {!preview ? (
                <div className="border-2 border-dashed border-green-300 rounded-2xl h-[400px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-5">
                    📷
                  </div>

                  <h2 className="text-xl font-semibold text-green-900">
                    Upload Gambar Sampah
                  </h2>

                  <p className="text-green-700 mt-2 max-w-sm">
                    Pastikan gambar terlihat jelas agar AI dapat mendeteksi jenis sampah dengan akurat
                  </p>

                  <label className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl transition font-medium">
                    Pilih Gambar

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleUpload}
                    />
                  </label>
                </div>
              ) : (
                <div>

                  {/* PREVIEW */}
                  <div className="rounded-2xl overflow-hidden border border-green-100 bg-green-50">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                    <button
                      onClick={resetImage}
                      className="border border-green-300 hover:bg-green-100 transition py-3 rounded-2xl font-medium text-green-800"
                    >
                      Ganti Gambar
                    </button>

                    <button
                      onClick={handleScan}
                      disabled={loading}
                      className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 transition text-white py-3 rounded-2xl font-medium"
                    >
                      {loading ? "Mendeteksi..." : "Scan Sekarang"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SECTION */}
            <div className="space-y-6">

              {/* RESULT CARD */}
              <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-6 min-h-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-semibold text-green-900">
                    Hasil Deteksi
                  </h2>

                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    AI Detection
                  </div>
                </div>

                {!result && !loading && (
                  <div className="h-[200px] flex flex-col items-center justify-center text-center text-green-700">
                    <div className="text-5xl mb-3">
                      ♻️
                    </div>

                    <p>
                      Hasil scan akan muncul di sini
                    </p>
                  </div>
                )}

                {/* LOADING */}
                {loading && (
                  <div className="h-[200px] flex flex-col items-center justify-center">
                    <div className="w-14 h-14 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

                    <p className="mt-4 text-green-700">
                      AI sedang mendeteksi gambar...
                    </p>
                  </div>
                )}

                {/* RESULT */}
                {result && (
                  <div className="space-y-4">

                    <div className="bg-green-50 rounded-2xl p-4">
                      <p className="text-sm text-green-700">
                        Jenis Sampah
                      </p>

                      <h3 className="text-2xl font-bold text-green-900 mt-1">
                        {result.label}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                      <div className="bg-white border border-green-100 rounded-2xl p-4">
                        <p className="text-sm text-green-700">
                          Confidence
                        </p>

                        <h3 className="text-xl font-semibold text-green-900 mt-1">
                          {result.confidence}
                        </h3>
                      </div>

                      <div className="bg-white border border-green-100 rounded-2xl p-4">
                        <p className="text-sm text-green-700">
                          Poin Didapat
                        </p>

                        <h3 className="text-xl font-semibold text-green-900 mt-1">
                          +{result.points}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-2xl font-medium mt-2"
                    >
                      Simpan & Dapatkan Poin
                    </button>
                  </div>
                )}
              </div>

              {/* TIPS */}
              <div className="bg-green-100 rounded-3xl p-6 border border-green-200">
                <h2 className="font-semibold text-green-900 mb-3">
                  Tips Scan
                </h2>

                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Pastikan objek terlihat jelas</li>
                  <li>• Hindari gambar blur</li>
                  <li>• Gunakan pencahayaan yang cukup</li>
                  <li>• Fokuskan kamera pada objek utama</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}