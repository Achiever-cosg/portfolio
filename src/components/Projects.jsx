import ShopVerse from "../images/shopverse-full.webp";
import FlashType from "../images/flashtype-full.webp";
import ProBox from "./ProBox";
import YouTubeClone from "../images/youtube-clone-app-full.webp";
import CryptoCartel from "../images/crypto-cartel-full.webp";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="YouTube Clone"
                img={YouTubeClone}
                description="A YouTube Clone website is an online platform similar to youtube having a user-friendly interface. The website fetches data from Youtube API and provide features such as playback speed control, subtitles and so on."
                techno1="React"
                techno2="Node"
                code="https://github.com/Achiever-cosg/Youtube-Clone"
                demo="https://youtube-clone-app-v2.netlify.app/"
                scrollY="-21%"
                icon="📺"
              />

              <ProBox
                title="CryptoCartel"
                img={CryptoCartel}
                description="CryptoCartel is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/Achiever-cosg/CryptoCartel"
                demo="https://crypto-cartel.vercel.app/"
                scrollY="-72%"
                icon="🪙"
                cName="reversed-proj"
              />

              <ProBox
                title="ShopVerse"
                img={ShopVerse}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="HTML"
                techno2="CSS"
                code="https://github.com/Achiever-cosg/ShopVerse"
                demo="https://shopverse.vercel.app/"
                scrollY="-82%"
                icon="🛒"
              />

              <ProBox
                title="FlashType"
                img={FlashType}
                description="A typing speed test website which let users improve their typing speed and tells their typing speed in words per minute."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/Achiever-cosg/FlashType"
                demo="https://flashtype-typing-app.netlify.app/"
                scrollY="-60%"
                icon="⚡"
                cName="reversed-proj" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
