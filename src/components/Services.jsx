import React from "react";
import { motion } from "framer-motion";
import react from "../assets/react.png"
import node from "../assets/node.png"
import reduxx from "../assets/redux.png"
import sass from "../assets/sass.png"
import flutter from "../assets/flutter.png"
import mongodb from "../assets/mongodb.png"
import firebase from "../assets/firebase.png"
import sql from "../assets/sql.png"
import js from "../assets/javascript.png"

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    left: {
      opacity: 0,
      x: "-100%",
    },

    right: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.left}
        >
          <img src={react} alt="React JS" />
          <span>React JS</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.left}
        >
          <img src={node} alt="Node JS" />
          <span>Node JS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.right}
          transition={{
            delay: 0.2,
          }}
        >
          <img src={reduxx} alt="Redux" />
          <span>Redux</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.right}
        >
          <img src={js} alt="JavaSctipt" />
          <span>JS</span>
        </motion.div>
        <motion.div
          className="serviceBox5"
          whileInView={animations.whileInView}
          initial={animations.right}
        >
          <img src={sass} alt="SASS" />
          <span>SASS</span>
        </motion.div>
        <motion.div
          className="serviceBox6"
          whileInView={animations.whileInView}
          initial={animations.left}
        >
          <img src={flutter} alt="Flutter" />
          <span>Flutter</span>
        </motion.div>
        <motion.div
          className="serviceBox7"
          whileInView={animations.whileInView}
          initial={animations.left}
        >
          <img src={mongodb} alt="Mongo DB" />
          <span>Mongo DB</span>
        </motion.div>
        <motion.div
          className="serviceBox8"
          whileInView={animations.whileInView}
          initial={animations.left}
        >
          <img src={sql} alt="SQL" />
          <span>SQL</span>
        </motion.div>
        <motion.div
          className="serviceBox9"
          whileInView={animations.whileInView}
          initial={animations.right}
        >
          <img src={firebase} alt="Firebase" />
          <span>Firebase</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
