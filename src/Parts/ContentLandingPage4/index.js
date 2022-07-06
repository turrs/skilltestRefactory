import React from "react";
import { CardIcon, Covered } from "../../Components";
import styles from "./contentLandingPage4.module.css";
import { Button } from "../../Components";
import { Iandroid } from "../../Assets";

export default function ContentLandingPage4() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.wrapperText1}>
          <p className={styles.text1}>
            Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di
            Seluruh Indonesia
          </p>
        </div>
        <div>
          <p className={styles.text2}>
            Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan
            Contoh Pengembangan Proyek
          </p>
        </div>
        <div>
          <div className={styles.wrapperCardIcon}>
            <CardIcon icon={Iandroid}></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
            <CardIcon></CardIcon>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <div className={styles.wrapperButton}>
            <Button buttonText="Ajukan Pertanyaan" type="buttonOrange" />
          </div>
        </div>
        <div className={styles.coveredSection}>
          <Covered></Covered>
        </div>
      </div>
    </div>
  );
}
