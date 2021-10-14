import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import Menu from "../../molecules/Menu";
import styles from "./styles.module.css";

import main_image from "../../../assets/HeroImage.png";

import bg_img from "../../../assets/Background_Graphis/Main Section/bg_graphics.png";

export default () => {
  return (
    <header className={styles.header}>
      <Heading styles={{ fontSize: "24px", lineHeight: "62px" }}>Logo</Heading>
      <Menu></Menu>
    </header>
  );
};
