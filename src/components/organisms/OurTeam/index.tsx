import React, { useRef, useState, useLayoutEffect } from "react";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

import styles from "./styles.module.css";

import main_image from "../../../assets/HeroImage.png";

import niels from "../../../assets/Team/NIELS.png";
import valli from "../../../assets/Team/VALLI.png";
import marli from "../../../assets/Team/marli.png";
import patricio from "../../../assets/Team/PATRICIO.png";
import emre from "../../../assets/Team/EMRE.png";
import path from "../../../assets/Background_Graphis/Team/Path.png";

export default () => {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <Heading
          styles={{ color: "#242D42", fontSize: "52px", lineHeight: "62px" }}
        >
          Our Team
        </Heading>
        <p className={styles.container_para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus urna,
          velit vulputate quis placerat purus dui. Urna ac sed pellentesque
          vestibulum phasellus
        </p>
        <img src={path} alt="" className={styles.bg_graphics} />
        <div className={styles.image_container}>
          <img src={niels} alt="" />
          <img src={valli} alt="" />
          <img src={marli} alt="" />
          <img src={patricio} alt="" />
          <img src={emre} alt="" />
        </div>
      </div>
    </section>
  );
};
