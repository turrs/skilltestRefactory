import React from "react";
import { Dliputan } from "../../Assets";
import styles from "./covered.module.css";
export default function Covered() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <p className={styles.title}>Diliput Oleh</p>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.wrapperImage}>
            <img src={Dliputan} className={styles.img}></img>
          </div>
          <div className={styles.wrapperImage}>
            <img src={Dliputan} className={styles.img}></img>
          </div>
          <div className={styles.wrapperImage}>
            <img src={Dliputan} className={styles.img}></img>
          </div>
          <div className={styles.wrapperImage}>
            <img src={Dliputan} className={styles.img}></img>
          </div>
          <div className={styles.wrapperImage}>
            <img src={Dliputan} className={styles.img}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
