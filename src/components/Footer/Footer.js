import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Ansh Chawla</h1>
          <ul className="footer__list">
            <li>
              <a href="#home" className="footer__link">
                Home 
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/ansh_chawla_321/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-chawla-777a92226/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/ANSHCHAWLA119"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-github"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; AnshChawla . All rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
