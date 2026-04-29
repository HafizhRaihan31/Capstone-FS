const HowItWorks = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Cara Kerja
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="font-bold">1. Scan</h3>
            <p>Upload atau scan sampah kamu</p>
          </div>

          <div>
            <h3 className="font-bold">2. Identifikasi</h3>
            <p>AI akan mendeteksi jenis sampah</p>
          </div>

          <div>
            <h3 className="font-bold">3. Dapatkan Reward</h3>
            <p>Kumpulkan poin dan tukarkan</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;