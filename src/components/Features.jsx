const Features = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Fitur Utama
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold mb-2">AI Scan</h3>
            <p>Scan sampah dan identifikasi otomatis dengan AI.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold mb-2">Reward Point</h3>
            <p>Dapatkan poin dari setiap sampah yang kamu pilah.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold mb-2">Bank Sampah</h3>
            <p>Tukar poin dengan reward atau manfaat lainnya.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;