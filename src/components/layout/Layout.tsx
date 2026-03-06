import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      <main
        className={`flex-1 w-full ${location.pathname === "/" ? "" : "pt-24 pb-16"} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
