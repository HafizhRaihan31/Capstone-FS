import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
            Scan Sampah, Dapatkan Reward
          </h1>

          <p className="text-gray-600 mb-6">
            Identifikasi jenis sampah dengan AI dan tukarkan dengan poin reward.
          </p>

          <Button>Mulai Scan</Button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://illustrations.popsy.co/green/recycling.svg"
            alt="eco"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;