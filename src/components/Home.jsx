import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.jpg";

const Home = () => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>

      <div id="home">
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I Am <br /> Priyank Pandit
            </motion.h1>
            <br />
            <h3>
              <Typewriter
                options={{
                  strings: ["A Learner", "A Thinker", "A Developer", "A Coder"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriterpara",
                }}
              />
            </h3>

            <div>
              <a href="mailto:08priyank28@gmail.com">Hire Me</a>
              <a href="#work">
                Projects <BsArrowUpRight />
              </a>
            </div>

          </div>
        </section>
        <section>
          <img className="my_img" src={me} alt="Priyank" />
        </section>
        <BsChevronDown />
      </div >
      <div className="home3" id="about">
        <div>
          <h1>A Little Bit About Me</h1>
          <p>
            Hello I am Priyank Pandit from Nadiad, Gujarat.I am a passionate Web Developer, currently studying B.Tech from Birla Vishvakarma Mahavidyalaya Engineering College. I am very enthusiastic to learn various new things.
            <br />
            I have a good grip on Fundamentals Of Computer Science , Apart from that I also do Competitive Coding and also I'm a MERN Stack Developer. <br />
            I am very hardworking and self motivated individual who can also perform Under Pressure.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
