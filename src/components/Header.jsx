import { Logo } from "../assets";
import "./Header.css";

function Header() {
  return (
    <header>
      <a href="#" className="HeaderLogo" aria-label="clipboard">
        <img src={Logo} alt="clipboard" />
      </a>
      <h1 className="HeaderTitle">A history of everything you copy</h1>
      <p className="HeaderPara">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="HeaderBtnsBox">
        <button className="HeaderBtnsBox-IOSBtn">Download for iOS</button>
        <button className="HeaderBtnsBox-MacBtn">Download for Mac</button>
      </div>
    </header>
  );
}
export default Header;
