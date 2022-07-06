import React from "react";
import styles from "./button.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function index({ type, title, buttonText }) {
  if (type === "buttonPrimary") {
    return (
      <Link to="/register">
        <button className={styles.buttonPrimary} onclick="/login">
          {title}
        </button>
      </Link>
    );
  }
  if (type === "buttonMenu") {
    return (
      <button className={styles.buttonMenu} onclick="/login">
        {title}
      </button>
    );
  }
  if (type === "buttonOrange") {
    return (
      <button className={styles.buttonOrange} onclick="/login">
        {buttonText}
      </button>
    );
  }
  if (type === "disable") {
    return (
      <button className={styles.buttonDisable} onclick="/login">
        {buttonText}
      </button>
    );
  }
  if (type === "Link") {
    return (
      <button className={styles.buttonLink} onclick="/login">
        {buttonText}
      </button>
    );
  }
  return (
    <Link to="/login">
      <button className={styles.buttonSecondary} onclick="/login">
        {title}
      </button>
    </Link>
  );
}
