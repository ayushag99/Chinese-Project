import Heading from "../../atoms/Heading";

import styles from "./styles.module.css";
import roadmap_marker from "../../../assets/roadmap_marker.png";

export default () => {
  return (
    <section className={styles.section} id="roadmap">
      <div className={styles.container}>
        <Heading>Roadmap</Heading>
        <div className={styles.roadmap_container}>
          <div className={styles.roadmap_container_timeline_bar}></div>
          <div className={styles.roadmap_container_timeline_bar_blur}></div>
          <div className={styles.roadmap_container_checkpoint}>
            <img
              src={roadmap_marker}
              alt=""
              className={styles.roadmap_marker}
            />
            <h3>OCTOBER 2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className={styles.roadmap_container_checkpoint}>
            <img
              src={roadmap_marker}
              alt=""
              className={styles.roadmap_marker}
            />

            <h3>OCTOBER 2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className={styles.roadmap_container_checkpoint}>
            <img
              src={roadmap_marker}
              alt=""
              className={styles.roadmap_marker}
            />

            <h3>OCTOBER 2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className={styles.roadmap_container_checkpoint}>
            <img
              src={roadmap_marker}
              alt=""
              className={styles.roadmap_marker}
            />

            <h3>OCTOBER 2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className={styles.roadmap_container_checkpoint}>
            <img
              src={roadmap_marker}
              alt=""
              className={styles.roadmap_marker}
            />

            <h3>OCTOBER 2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
