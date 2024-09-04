import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center text-2xl"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/jeremycook1/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JC00K" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/JC00KCS" target="_blank">
          <RiTwitterXLine />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
