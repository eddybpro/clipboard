import { Logo } from "../assets";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="clipboard">
        <img src={Logo} alt="clipboard" />
      </a>
      <div className="FooterLinksWrapper">
        <ul>
          <li className="FooterLinksWrapper-Link">
            <a href="#">FAQs</a>
          </li>
          <li className="FooterLinksWrapper-Link">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li className="FooterLinksWrapper-Link">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="FooterLinksWrapper-Link">
            <a href="#">Press Kit</a>
          </li>
        </ul>
        <ul>
          <li className="FooterLinksWrapper-Link">
            <a href="#">Install Guide</a>
          </li>
        </ul>
        <ul className="FooterLinksWrapper-SocialIcons">
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" aria-label="facebook">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaFacebookSquare />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" aria-label="twitter">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" aria-label="instagram">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
