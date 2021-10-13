import React from "react";

// Importing styles
import styles from "./styles.module.css";

const NavElement: React.FC<{ onClickHandler?: () => {}, link?: string }> = (
  props
) => {
  return (
    <a
      href={props.link}
      className={styles.navElement}
      onClick={props.onClickHandler}
    >
      {props.children}
    </a>
  );
};
export default NavElement;
