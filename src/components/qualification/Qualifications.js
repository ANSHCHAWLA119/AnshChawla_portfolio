import React, { useState } from "react";
import "./qualification.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualifications">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">Matriculation</h3>
                  <span className="qualification__subtitle">
                    Kapurthala - Christ The King Convent Senior Secondary School (Class 10th)&nbsp;&nbsp;
                    Percentage - 85.6
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    Completed in 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Btech CSE with specialisation Big Data Analytics</h3>
                  <span className="qualification__subtitle">
                    Chandigarh - Chandigarh University
                    CGPA - 8.71
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2025
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">Higher Secondary</h3>
                  <span className="qualification__subtitle">
                    Kapurthala - MGN Public School &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Class 12th)&nbsp;
                    &nbsp;Percentage - 94.2
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    Completed in 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }>
              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">
                  Founder of Docsmith
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">
                    Chandigarh University - TBI
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - Present
                  </div>
                </div>
              </div>
              {/* <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualifications;
