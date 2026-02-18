import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-Obsidian text-relic">
      <Navbar />
      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
