import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import akoImage from "../img/about-iamge.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faInstagramSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faX } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <section id="abt">
        <div className="container">
          <div className="row">
            <h1 className="display-1 fw-bold ms-5">About</h1>
          </div>
        </div>
      </section>

      <section id="carton1" class="carton1">
        <div className="container mt-5">
          <div className="col">
            <div className="row">
              <div className="col-lg-7 text">
                <h2 className="text-secondary display-5">About Me</h2>
                <p>
                  I am a passionate and dedicated college student pursuing a
                  Bachelor of Science in Information Technology (BSIT) at
                  Central Philippines State University. I have a keen interest
                  in software development, cybersecurity, and emerging
                  technologies.
                </p>
                <br />
                <h2 className="text-secondary display-5">Academic Journey</h2>
                <p>
                  During my time at the College of Computer Studies, I have
                  gained valuable knowledge in programming languages such as
                  C++, Web development, and JavaScript.
                </p>
                <br />
                <ul>
                  <li className="display-5 fw-bold me-5">Follow Me</li>
                  <li>
                    <a href="https://www.facebook.com/jeelo.hernandez.73?mibextid=ZbWkL">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faFacebookSquare}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jeel.ayy?igsh=ajkYWJzcXUx">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faInstagramSquare}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/HernandezJeelo?t=K8elaPXHh4XcmtJ-SaccYw&s=09">
                      <FontAwesomeIcon className="icons" icon={faX} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Dreavon?tab=repositories">
                      <FontAwesomeIcon className="icons" icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@streakstroke2616">
                      <FontAwesomeIcon className="icons" icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-5">
                <center>
                  <img
                    src={akoImage}
                    width={500}
                    alt="Profile Picture of Jeelo Hernandez"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid edu">
          <div className="row pt-5">
            <div className="col-lg-6">
              <div class="section-heading text-center mb-5">
                <h2>
                  <u>Education</u>
                </h2>
              </div>
              <div class="container">
                <div class="education-horizontal-timeline">
                  <div class="col text-center mb-3">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>2024</h2>
                      </div>
                      <div class="timeline-horizontal-border">
                        <FontAwesomeIcon className="i" icon={faCircle} />
                      </div>
                      <div class="timeline text-center mb-5">
                        <div class="timeline-content">
                          <h4 class="title">
                            Central Philippines State University
                          </h4>
                          <p className="text-secondary">
                            Brgy. Camingawan, Kabankalan City, Negros Occidental
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col text-center mb-3">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>2019</h2>
                      </div>
                      <div class="timeline-horizontal-border">
                        <FontAwesomeIcon className="i" icon={faCircle} />
                      </div>
                      <div class="timeline text-center mb-5">
                        <div class="timeline-content">
                          <h4 class="title">
                            Florentino Galang Sr. National High School
                          </h4>
                          <p className="text-secondary">
                            Brgy. Oringao, Kabankalan City, Negros Occidental
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col text-center mb-3">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>2014</h2>
                      </div>
                      <div class="timeline-horizontal-border">
                        <FontAwesomeIcon className="i" icon={faCircle} />
                      </div>
                      <div class="timeline text-center mb-5">
                        <div class="timeline-content">
                          <h4 class="title">Oringao Elementary School</h4>
                          <p className="text-secondary">
                            Brgy. Oringao, Kabankalan City, Negros Occidental
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="col skills">
                <h2 className="text-center mb-5">
                  <u>Skills</u>
                </h2>
                <div class="row justify-content-center">
                  <div class="col-lg-6 mb-4">
                    <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
                    <p className="text-center">90%</p>
                    <span class="bar">
                      <span class="html"></span>
                    </span>

                    <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
                    <p className="text-center">70%</p>
                    <span class="bar">
                      <span class="css"></span>
                    </span>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <h5 class="card-title fw-bold text-center mt-5">
                      JAVASCRIPT
                    </h5>
                    <p className="text-center">50%</p>
                    <span class="bar">
                      <span class="javascript"></span>
                    </span>

                    <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
                    <p className="text-center">35%</p>
                    <span class="bar">
                      <span class="php"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default About;
