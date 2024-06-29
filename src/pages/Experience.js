import React, { useState } from "react";
import "./Experience.css";
import ExpModal from "./Expmodal";

import ojt1Image from "../img/ojt1.png";
import ojt2Image from "../img/ojt2.png";
import ojt3Image from "../img/ojt3.png";
import ojt4Image from "../img/ojt4.png";
import ojt5Image from "../img/ojt5.png";
import ojtcertImage from "../img/ojt-certificate.png";

import Navbar from "./Navbar";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />

      <section id="exp">
        <div className="container">
          <div className="row">
            <h1 className="display-1 fw-bold ms-5">Experience</h1>
          </div>
        </div>
      </section>

      <section className="exp">
        <div className="container pb-5">
          <div className="row">
            <h3 className="ms-5 mb-4 display-4">On-the Job Training</h3>
            <div className="isotope">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="item">
                    <img
                      src={ojt1Image}
                      alt="one"
                      className="thumbnail"
                      onClick={() => openModal(ojt1Image)}
                    />
                    <div className="overlay"></div>
                  </div>
                  <h3>Crimping</h3>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="item">
                    <img
                      src={ojt2Image}
                      alt="two"
                      className="thumbnail"
                      onClick={() => openModal(ojt2Image)}
                    />
                    <div className="overlay"></div>
                  </div>
                  <h3>PC Repair</h3>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="item">
                    <img
                      src={ojt3Image}
                      alt="three"
                      className="thumbnail"
                      onClick={() => openModal(ojt3Image)}
                    />
                    <div className="overlay"></div>
                  </div>
                  <h3>Coding</h3>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="item">
                    <img
                      src={ojt4Image}
                      alt="four"
                      className="thumbnail"
                      onClick={() => openModal(ojt4Image)}
                    />
                    <div className="overlay"></div>
                  </div>
                  <h3>Designing</h3>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="item">
                    <img
                      src={ojt5Image}
                      alt="five"
                      className="thumbnail"
                      onClick={() => openModal(ojt5Image)}
                    />
                    <div className="overlay"></div>
                  </div>
                  <h3>Encode</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expako">
        <div className="container">
          <div className="row">
            <h1 className="display-1 fw-bold ms-5">Certificate</h1>
          </div>
        </div>
      </section>

      <section className="explane">
        <div className="container pb-5">
          <div className="row">
            <h3 className="ms-5 mb-4 display-4">
              On-the Job Training Certificate
            </h3>
            <div className="isotope">
              <div className="row">
                <div className="col-lg-8 mb-4">
                  <div className="item">
                    <img
                      src={ojtcertImage}
                      alt="cert"
                      className="thumbnail"
                      onClick={() => openModal(ojtcertImage)}
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <ExpModal
          imageSrc={currentImage}
          altText="Enlarged Image"
          closeModal={closeModal}
        />
      )}

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href="/"> Jeelo Hernandez</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
