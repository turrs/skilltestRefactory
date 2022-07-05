import React from "react";
import { ILogo } from "../../Assets";
import styles from "./loginContent.module.css";
export default function LoginContent() {
  return (
    <div className={styles.container}>
      <img src={ILogo}></img>
    </div>
  );
}
