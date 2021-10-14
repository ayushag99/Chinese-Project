import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

import styles from "./styles.module.css";

import bg_image from "../../../assets/Background_Graphis/Community/bg.png";

export default () => {
  return (
    <section className={styles.section} id="join">
      <div className={styles.container}>
        <Heading
          styles={{
            fontSize: "40px",
            lineHeight: "150%",
          }}
        >
          Join the Community
        </Heading>
        <p className={styles.container_para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. s vitae
          commodo malesuada. Aliquam aliquam viverra proin in posuere ipsum, ut
          gravida. Feugiat nisl
        </p>
        <Button buttonType="secondary">Join Discord Server</Button>
      </div>
      <img src={bg_image} alt="" className={styles.bg_graphics} />
    </section>
  );
};
