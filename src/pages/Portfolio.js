import React, { useState } from "react";
import "./Portfolio.css";
import Modal from "./Modal";
import Navbar from "./Navbar";

import oneImage from "../img/1.png";
import twoImage from "../img/2.png";
import threeImage from "../img/3.jpg";
import sunImage from "../img/sunset.jpg";
import stitchImage from "../img/stitch.png";
import empressImage from "../img/empress.jpg";
import vaImage from "../img/va.jpg";
import kapeImage from "../img/kape.jpg";
import cgImage from "../img/cg.jpg";
import atImage from "../img/at.jpg";
import she1Image from "../img/she1.jpg";
import she2Image from "../img/she2.jpg";

const Portfolio = () => {
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
      <section id="port">
        <div className="container">
          <div className="row">
            <h1 className="display-1 fw-bold ms-5">Projects</h1>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
          </div>
          <div className="isotope">
            <div className="row">
              {/* Websites Section */}
              <p className="display-6">Websites</p>
              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img
                    src={oneImage}
                    alt="one"
                    className="thumbnail"
                    onClick={() => openModal(oneImage)}
                  />
                  <div className="isotope-overlay">
                    <a href="https://dreavon.github.io/PSIT01_project/">
                      <h3>PSIT-01_Frontend-Project</h3>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img
                    src={twoImage}
                    alt="two"
                    className="thumbnail"
                    onClick={() => openModal(twoImage)}
                  />
                  <div className="isotope-overlay">
                    <a href="https://harvestingscheduler.000webhostapp.com/">
                      <h3>Thesis Web-App</h3>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img
                    src={threeImage}
                    alt="three"
                    className="thumbnail"
                    onClick={() => openModal(threeImage)}
                  />
                  <div className="isotope-overlay">
                    <a href="#">
                      <h3>React-Js_Portfolio</h3>
                    </a>
                  </div>
                </div>
              </div>

              <hr />
              <p className="display-6">Digital Arts</p>
              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={sunImage}
                    alt="sun"
                    className="thumbnail"
                    onClick={() => openModal(sunImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={stitchImage}
                    alt="stitch"
                    className="thumbnail"
                    onClick={() => openModal(stitchImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={empressImage}
                    alt="empress"
                    className="thumbnail"
                    onClick={() => openModal(empressImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={atImage}
                    alt="at"
                    className="thumbnail"
                    onClick={() => openModal(atImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={kapeImage}
                    alt="kape"
                    className="thumbnail"
                    onClick={() => openModal(kapeImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={cgImage}
                    alt="cg"
                    className="thumbnail"
                    onClick={() => openModal(cgImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={vaImage}
                    alt="va"
                    className="thumbnail"
                    onClick={() => openModal(vaImage)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={she1Image}
                    alt="she1"
                    className="thumbnail"
                    onClick={() => openModal(she1Image)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="item">
                  <img
                    src={she2Image}
                    alt="she2"
                    className="thumbnail"
                    onClick={() => openModal(she2Image)}
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <Modal
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

export default Portfolio;
