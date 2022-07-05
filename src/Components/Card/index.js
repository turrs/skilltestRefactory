import React from "react";
import { ILlandingpage1 } from "../../Assets";
import styles from "./card.module.css";
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImage}>
        <img className={styles.img} src={ILlandingpage1}></img>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.text1}>Jawaban cepat, tepat & gratis</p>
        </div>
        <div>
          <p className={styles.text2}>
            Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya
          </p>
        </div>
      </div>
    </div>
  );
}
