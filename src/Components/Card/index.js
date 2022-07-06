import React from "react";
import { ILlandingpage1 } from "../../Assets";
import styles from "./card.module.css";
export default function Card({ title, data, image, type }) {
  if (type === "secondary") {
    return (
      <div className={styles.containerSecondary}>
        <div className={styles.wrapperImage}>
          <img src={image} className={styles.imgSecondary}></img>
        </div>
        <div>
          <p className={styles.textTitleSecondary}>{title}</p>
        </div>
        <div>
          <p className={styles.textDataSecondary}>{data}</p>
        </div>
      </div>
    );
  }
  if (type === "tertiary") {
    return (
      <div className={styles.wrapperTertiary}>
        <div className={styles.textTitleTertiary}>{title}</div>
        <div className={styles.textDataTertiary}>{data}</div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImage}>
        <img className={styles.img} src={image}></img>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.text1}>{title}</p>
        </div>
        <div>
          <p className={styles.text2}>{data}</p>
        </div>
      </div>
    </div>
  );
}
