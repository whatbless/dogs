import React, { useState } from "react";
import s from "./MainPage.module.css";
import Header from "./Header";
import Navbar from "./Navbar";

const MainPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className={s.container} onClick={closeNavbar}>
      <Header />
      <button className={s.menuButton} onClick={(e) => { e.stopPropagation(); toggleNavbar(); }}>
        ☰ Menu
      </button>
      <Navbar isOpen={isNavbarOpen} closeNavbar={closeNavbar} />
      <main className={s.mainContent}>
        <h2>Welcome to the Main Page</h2>
        <p>This is a sample layout with Header and Navbar components.</p>
      </main>
    </div>
  );
};

export default MainPage;
