function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Wanna get in touch? Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-file"></i>
                </span>
                <div className="contact__info">
                  <h3>Resume</h3>
                  <a
                    aria-label="resume"
                    target="_blank"
                    rel="noreferrer" 
                    href="https://drive.google.com/file/d/1qoa9BVV-XOHFKtXbecUovbUYny41rg4p/view?usp=share_link">
                    See My Resume
                  </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:sam.ajam6758@gmail.com">
                    sam.ajam6785@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-map-location-dot"></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
