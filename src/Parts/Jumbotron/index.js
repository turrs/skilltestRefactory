import React from "react";
import styles from "./jumbotron.module.css";
export default function Jumbotron({ title, text, data1, data2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <p className={styles.text1}>{title}</p>
          <p className={styles.text2}>{text}</p>
        </div>
      </div>
      <div>
        <div className={styles.containerAbout}>
          <div className={styles.card}>
            <h2 className={styles.text3}>{data1}</h2>
            <p className={styles.text4}>{data2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
