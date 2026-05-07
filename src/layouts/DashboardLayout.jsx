import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Content */}
      <div className="md:ml-64">
        {/* penting: offset sesuai lebar sidebar */}

        <DashboardNavbar setOpen={setOpen} />

        <div className="bg-green-50 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}