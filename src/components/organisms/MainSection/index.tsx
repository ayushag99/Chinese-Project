import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

import styles from "./styles.module.css";

import main_image from "../../../assets/HeroImage.png";

import bg_img from "../../../assets/Background_Graphis/Main Section/bg_graphics.png";

export default () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <Heading
            styles={{ fontSize: "44px", lineHeight: "62px", textAlign: "Left" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo.
          </Heading>
          <Button buttonType="secondary"> View on OpenSea</Button>
        </div>
        <div className={styles.main_image_container}>
          <img src={main_image} alt="" />
        </div>
      </div>
      <img src={bg_img} alt="" className={styles.bg_image} />
    </section>
  );
};
