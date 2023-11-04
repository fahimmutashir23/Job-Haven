import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/job_haven_1.png";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 max-w-6xl mx-auto text-base-content">
        <div className="flex flex-col justify-center items-center text-center">
          <img src={logo} alt="" className="w-32" />
          <p>
            Job Heaven Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>

        <div className="flex footer">
          <nav className="flex flex-col footer">
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav className="flex flex-col footer">
            <header className="footer-title">Social Media</header>
            <p className="flex items-center text-lg link link-hover"><AiFillFacebook></AiFillFacebook> <span>Facebook</span></p>
            <p className="flex items-center text-lg link link-hover"><AiFillLinkedin></AiFillLinkedin> <span>Linkedin</span></p>
            <p className="flex items-center text-lg link link-hover"><AiFillTwitterSquare></AiFillTwitterSquare> <span>Twitter</span></p>
          </nav>
        </div>
      </footer>
      <div className="pb-7">
        <p className="text-center">
          Copyright © 2023 - All right reserved by Job Heaven Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
