import React from "react";

// Importing styles
import styles from "style.module.css";

const Button: React.FC<{
  buttonType: "primary" | "secondary" | "tertiary";
  onClickHandler?: () => {};
}> = (props) => {
  return (
    <button
      className={styles[`button_${props.buttonType}`]}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};
export default Button;
