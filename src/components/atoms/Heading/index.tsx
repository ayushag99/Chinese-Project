import React from "react";

import styles from "./styles.module.css";

const Heading: React.FC<{ styles?: object }> = (props) => {
  return (
    <h2 style={props.styles} className={styles.heading}>
      {props.children}
    </h2>
  );
};

export default Heading;
