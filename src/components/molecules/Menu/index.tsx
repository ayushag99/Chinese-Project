import React from "react";

// Importing styles
import styles from "./styles.module.css";
import NavElement from "../../atoms/NavElement";
import Button from "../../atoms/Button";

const Menu: React.FC = (props) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__elements}>
        <li>
          <NavElement link="#about">About</NavElement>
        </li>
        <li>
          <NavElement link="#roadmap">Roadmap</NavElement>
        </li>
        <li>
          <NavElement link="#team">Team</NavElement>
        </li>
        <li>
          <NavElement link="#join">Join Now</NavElement>
        </li>
      </ul>
      <Button buttonType={"primary"}>Connect Wallet</Button>
    </nav>
  );
};
export default Menu;
