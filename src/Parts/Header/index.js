import React from "react";
import { ILogo } from "../../Assets";
import { Button, Menu } from "../../Components";

import styles from "./header.module.css";
const index = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.brandLogo} src={ILogo}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Menu></Menu>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.buttonMasuk}>
            <Button title="Masuk" type="buttonSecondary"></Button>
          </div>
          <div>
            <Button title="Daftar" type="buttonPrimary"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
