import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagramSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contacts">
        <div className="container">
          <div className="row">
            <h1 className="display-1 fw-bold ms-5">Contact</h1>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <div class="contact-content">
            <div class="row pb-5">
              <div class="col-lg-6">
                <div class="single-contact-box">
                  <div class="contact-form">
                    <form>
                      <div class="row">
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Name*"
                              name="name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Email*"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="8"
                              id="comment"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="single-contact-btn">
                            <a class="contact-btn" href="#" role="button">
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single-contact-box">
                  <div class="contact-adress">
                    <div class="contact-add-head">
                      <FontAwesomeIcon className="icons" icon={faUser} />
                      <span className="display-5 ms-3">Jeelo Hernandez</span>
                      <p className="diplay-4 ms-4">
                        Digital Artist & Web Designer
                      </p>
                    </div>
                    <div class="contact-add-info">
                      <div class="single-contact-add-info">
                        <FontAwesomeIcon className="icons" icon={faPhone} />
                        <span className="display-5 ms-3">Phone</span>
                        <p className="diplay-4 ms-4">0970-466-7515</p>
                      </div>
                      <div class="single-contact-add-info">
                        <FontAwesomeIcon className="icons" icon={faEnvelope} />
                        <span className="display-5 ms-3">Email</span>
                        <p className="diplay-4 ms-4">
                          jeelohernandez99@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="https://m.me/jeelo.hernandez.73?hash=AbY_BQh6NdZf6gM7&source=qr_link_share">
                          <FontAwesomeIcon
                            className="icons"
                            icon={faFacebookMessenger}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/HernandezJeelo?t=K8elaPXHh4XcmtJ-SaccYw&s=09">
                          <FontAwesomeIcon className="icons" icon={faX} />
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
                        <a href="/Contact">
                          <FontAwesomeIcon className="icons" icon={faDiscord} />
                        </a>
                      </li>
                    </ul>
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

export default Contact;
