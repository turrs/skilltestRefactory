import React from "react";
import styles from "./dataOverview.module.css";
export default function DataOverview({ type, data }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.data}>{data}</p>
      <p className={styles.type}>{type}</p>
    </div>
  );
}
