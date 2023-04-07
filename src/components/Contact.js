import gitHubIcon from "../img/icons8-github.svg";
import linkedinIcon from "../img/icons8-linkedin.svg";
import facebookIcon from "../img/icons8-facebook.svg";
const Contact = () => {
  console.log("contact");
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="contactElements">
        <div className="aLink">
          <a href="https://github.com/Harshahari1207">
            <img src={gitHubIcon} alt="" />
          </a>
        </div>
        <div className="aLink">
          <a href="https://www.linkedin.com/in/bali-harsha-kumar-reddy-4b21031b5/">
            <img src={linkedinIcon} alt="" />
          </a>
        </div>
        <div className="aLink">
          <a href="https://www.facebook.com/harsha.hari.92775">
            <img src={facebookIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
