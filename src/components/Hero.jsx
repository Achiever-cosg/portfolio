import "../dist/styles.css";
import Waving from "../images/waving.png";
// import Html from "../images/html.svg";

// import { ReactComponent as Html } from "../images/icons/html.svg";
// import { ReactComponent as Css } from "../images/icons/css3.svg";
// import { ReactComponent as Js } from "../images/icons/javascript.svg";
// import { ReactComponent as React } from "../images/icons/react.svg";
// import { ReactComponent as Tailwind } from "../images/icons/tailwind.svg";
// import Sass from "../images/icons/scss.svg";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full-Stack MERN Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Samshul Ajam. A passionate Full-Stack
                  Developer based in Kolkata, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/samshul-ajam-a4aa84190/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/achiever-cosg/"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            {/* <div className="skills">
              <p>Tech Stack</p>
               <div className="logos">
                <ul>
                  <li>
                    <img src={Html} title="HTML5" alt="program_img" />
                  </li>
                  <li>
                    <img src={Css} title="CSS3" alt="program_img" />
                  </li>
                  <li>
                    <img src={Js} title="Javascript" alt="program_img" />
                  </li>
                  <li>
                    <img src={React} title="React JS" alt="program_img" />
                  </li>
                  <li>
                    <img
                      src={Tailwind}
                      title="Tailwind CSS"
                      alt="program_img"
                    />
                  </li>
                  <li>
                    <img src={Sass} title="Sass/Scss" alt="program_img" />
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <i className="fa-brands fa-html5 fa-2xl" style={{color: "#e11414",}} />
                  </li>
                  <li>
                    <i className="fa-brands fa-css3-alt fa-2xl" style={{color: "#245ec2",}} />
                  </li>
                  <li>
                    <i className="fa-brands fa-js fa-2xl" style={{color: "#f2f53d",}} />
                  </li>
                  <li>
                    <i className="fa-brands fa-react fa-2xl" style={{color: "#119ebb",}} />
                  </li>
                  <li>
                    <i className="fa-brands fa-node fa-2xl" style={{color: "#0d9b03",}} />
                  </li>
                  <li>
                    <i className="fa-brands fa-sass fa-2xl" style={{color: "#e11414",}} />
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
