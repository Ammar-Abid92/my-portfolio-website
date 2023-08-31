import React, { useState } from "react";
import { styles } from "../styles";
// import { github } from "../assets";
import github from "../assets/github-mark-white.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";


const Footer = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
      <nav
        className={`${styles.paddingX} w-full flex flex-col items-center py-5  z-20 mt-20 border-t`}
      >
        <p className="text-white text-[18px] font-bold cursor-pointer">
          &copy; 2023 - Muhammad Ammar Abid
        </p>
        <div className="flex gap-4 items-center pt-4">
          <a href="https://github.com/Ammar-Abid92" target="_blank">
            <img src={github} alt="github" className="w-[50px] h-[50px]" />
          </a>
  
          <a href="https://www.linkedin.com/in/muhammad-ammar-abid-7645951b7/" target="_blank">
            <img src={linkedin} alt="linkedin" className="w-[65px]" />
          </a>
  
          <a href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`} target="_blank">
            <img
              src={mail}
              alt="mail"
              className=" w-[60px]"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(36deg) brightness(110%) contrast(100%)",
              }}
            />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Footer;