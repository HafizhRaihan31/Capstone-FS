export default function DashboardNavbar({ setOpen }) {
  return (
    <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center">
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      <div className="hidden md:flex gap-6">
        <span>Scan Sampah</span>
        <span>Tukar Poin</span>
      </div>

      <span>Hafizh</span>
    </div>
  );
}