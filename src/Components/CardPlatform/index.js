import React from "react";
import styles from "./cardPlatform.module.css";
import { Button } from "../../Components";
export default function CardPlatform({ title, image, data, type, buttonText }) {
  if (type === "disable") {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.positionImage}>
            <div className={styles.wrapperImageSoon}>
              <img src={image} className={styles.img}></img>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.paddingLeft}>
              <div>
                <p className={styles.title}>{title}</p>
              </div>
              <div>
                <p className={styles.description}>{data}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  title="Daftar"
                  type={type}
                  buttonText={buttonText}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.positionImage}>
          <div className={styles.wrapperImage}>
            <img src={image} className={styles.img}></img>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.paddingLeft}>
            <div>
              <p className={styles.title}>{title}</p>
            </div>
            <div>
              <p className={styles.description}>{data}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                title="Daftar"
                type="buttonOrange"
                buttonText={buttonText}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
