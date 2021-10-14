import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

import styles from "./styles.module.css";

import left_bg_img from "../../../assets/Background_Graphis/section2/left_bg.png";
import right_bg_img from "../../../assets/Background_Graphis/section2/right_bg.png";

export default () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Heading
          styles={{
            fontSize: "40px",
            lineHeight: "150%",
            textAlign: "Center",
            color: "#242D42",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </Heading>
        <p className={styles.container_para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus urna,
          velit vulputate quis placerat purus dui. Urna ac sed pellentesque
          vestibulum phasellus vitae commodo malesuada. Aliquam aliquam viverra
          proin in posuere ipsum, ut gravida. Feugiat nisl{" "}
        </p>
        <Button buttonType="tertiary">OpenSea</Button>
      </div>
      <img src={left_bg_img} alt="" className={styles.left_bg} />
      <img src={right_bg_img} alt="" className={styles.right_bg} />
    </section>
  );
};
