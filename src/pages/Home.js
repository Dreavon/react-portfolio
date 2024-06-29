import "./Home.css";

import myImage from "../img/akoni.png";
import ibisImage from "../img/ibis-paint-x.png";
import vscodeImage from "../img/vc-code.png";
import gcbImage from "../img/gcb.png";
import warcraftImage from "../img/warcraft.png";
import generalImage from "../img/general.png";
import battleImage from "../img/battle.png";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="banner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ok">
              <div className="card">
                <div className="text">
                  <h1 className="text text-light display-4 fw-bold">
                    Hello, I'm
                  </h1>
                  <h1 className="text text-light display-4 fw-bold">
                    Jeelo Hernandez
                  </h1>
                  <br />
                  <p className="self text-light">
                    I'm a Gamer, Digital Artist & Web Designer
                  </p>
                </div>
                <a href="/about" className="btn btn-brand shadow">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-lg-6 ok">
              <div className="card">
                <img src={myImage} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card p-5 shadow">
                <img src={ibisImage} alt="ibis" />
                <h4 className="text-center">IbisPaintX</h4>
                <p>
                  IbisPaint X is a popular digital art app designed for creating
                  illustrations and manga on mobile devices. You can also share
                  your creations with others and get feedback from a community
                  of artists within the app. IbisPaint X provides a convenient
                  way to unleash your creativity.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card p-5 shadow">
                <img src={vscodeImage} alt="vscode" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Visual Studio Code (VS Code) is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility, extensive
                  features, and customizable nature.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card p-5 shadow">
                <img src={gcbImage} alt="gcb" />
                <h4 className="text-center">Gaming Center Base</h4>
                <p>
                  Gaming center base is a venue where gamers gather to play
                  video games together on high-end computers and consoles. It
                  offers a social and competitive environment with comfortable
                  amenities like chairs and snacks, making it a popular spot for
                  gaming enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3 mt-5 mb-5">
              Recent <br /> Played Games
            </h3>
            <div class="isotope">
              <div class="row">
                <div class="col-lg-4">
                  <div class="item">
                    <h4 className="ms-3 mt-3">
                      1. Warcraft III: <br />
                      FrozenThrone
                    </h4>
                    <img src={warcraftImage} alt="one" />
                    <div class="overlay"></div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="item">
                    <h4 className="ms-3 mt-3">
                      2. Command & Conquer: Generals
                    </h4>
                    <img src={generalImage} alt="two" />
                    <div class="overlay"></div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div class="item">
                    <h4 className="ms-3 mt-3">
                      3. Battle Realms: Winter of the Wolf
                    </h4>
                    <img src={battleImage} alt="three" />
                    <div class="overlay"></div>
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

export default Home;
