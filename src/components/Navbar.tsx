import React from "react";
import s from "./Navbar.module.css";

interface NavbarPropsType {
    isOpen: boolean;
    closeNavbar: () => void
}

const Navbar = ({ isOpen, closeNavbar }: NavbarPropsType) => {
  return (
    <div className={`${s.navbar} ${isOpen ? s.open : ""}`} onClick={(e) => e.stopPropagation()}>
      <button className={s.closeButton} onClick={closeNavbar}>×</button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
