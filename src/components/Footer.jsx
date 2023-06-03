import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillCode,
  AiFillLinkedin
} from "react-icons/ai";
import img from "../assets/me.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
        />

        <h2>Priyank Pandit</h2>
        <a href="https://leetcode.com/priyankk607/" target={"blank"}>
          <AiFillCode />
        </a>
        <a href="https://instagram.com/priyankk____" target={"blank"}>
          <AiFillInstagram />
        </a>
        <a href="https://github.com/08priyank28" target={"blank"}>
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/priyank-pandit-5293671ba/" target={"blank"}>
          <AiFillLinkedin />
        </a>
        <p>Dream big, work hard, and make it happen</p>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
