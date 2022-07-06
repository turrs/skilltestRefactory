import React from "react";
import styles from "./cardIcon.module.css";
export default function CardIcon({ icon }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapperImage}>
          <img src={icon} className={styles.image}></img>
        </div>
      </div>
    </div>
  );
}
