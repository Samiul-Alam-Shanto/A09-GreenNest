import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import GlobalLoading from "../components/Loading/GlobalLoading";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const location = useLocation();
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    setIsRouting(true);
    const timeout = setTimeout(() => {
      setIsRouting(false);
    }, 150);
    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <div>
      <ScrollRestoration />
      <header>
        <Navbar />
      </header>
      <main className="min-h-[80vh] bg-[#7fb06930]">
        {isRouting ? <GlobalLoading /> : <Outlet />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
