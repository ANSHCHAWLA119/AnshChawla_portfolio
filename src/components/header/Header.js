import React, { useState } from "react";
import logo from "../../assests//lo.png"
import "./head.css";

const Header = () => {
  // change background header
  window.addEventListener("scroll", function () {
    // when the scroll is higher than 20 0 viewport height, add
    // the show-scroll class to a higher to a tag with the scroll-top class
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // TOGGLE MENU //
  const [toggle, showToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <header className="headeer">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            <img src={logo} alt="" srcset="" className="main_logo" />
            {/* AC */}
          </a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon">Home</i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                   }
                >
                  <i className="uil uil-user nav__icon">About</i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                   }>
                  <i className="uil uil-file-alt nav__icon">Skills</i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                   }>
                  <i className="uil uil-briefcase-alt nav__icon">Services</i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#qualifications" onClick={() => setActiveNav("#qualifications")}
                  className={
                    activeNav === "#qualifications"
                      ? "nav__link active-link"
                      : "nav__link"
                   }>
                  <i className="uil uil-scenery nav__icon">Qualification</i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                   }>
                  <i className="uil uil-scenery nav__icon">Portfolio</i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                   }>
                  <i className="uil uil-message nav__icon">Contact</i>
                </a>
              </li>
            </ul>

            <i
              class="uil uil-times nav__close"
              onClick={() => showToggle(!toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showToggle(!toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
