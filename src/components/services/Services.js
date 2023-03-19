import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Product <br /> Designer
              </h3>

              <span className="services__button" onClick={() => toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">Product Designer</h3>
                  <p className="services__modal-description">
                    Service with more than 1 year of exxperience. Providing
                    quality work to clients and colleagues.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I develop best user interactive Websites
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Conceived and built optimized landing pages in HTML and
                        CSS for integration and cross-browser compatibility
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Developed technical solutions required to accommodate
                        specific userfacing assets
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Engaged with clients to plan and optimize site issues
                        and queries
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Applied emerging technologies to update and maintain
                        site applicability.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Design & <br /> Coding
              </h3>

              <span className="services__button" onClick={() => toggleTab(2)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === 2
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">Design & Coding</h3>
                  <p className="services__modal-description">
                    Service with more than 1 year of exxperience. Providing
                    quality work to clients and colleagues.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I develop best user interactive Websites
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Web Page Development
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        HTML , CSS , JS , REACT , FLASK
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Discussed site and app requirements with clients to
                        produce actionable development plans.
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Design and mockups of products for companies.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Communication <br /> Skills
              </h3>

              <span className="services__button" onClick={() => toggleTab(3)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === 3
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">
                    Communication Skills
                  </h3>
                  <p className="services__modal-description">
                    Good Communication Skills.To present our work in a good
                    manner and do healthy talk with colleagues.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Strong verbal and written communication skills .
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Comfortable and confident in public speaking situations.
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Proven ability to build and maintain relationships with
                        Clients .
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Demonstrated ability to communicate effectively with
                        people from diverse backgrounds .
                      </p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Good listening skills, allowing for effective
                        collaboration .
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
