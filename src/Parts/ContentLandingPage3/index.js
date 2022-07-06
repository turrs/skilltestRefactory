import React from "react";
import { Dtelegram } from "../../Assets";
import { Button } from "../../Components";
import styles from "./contentLandingPage3.module.css";
export default function ContentLandingPage3() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={styles.wrapperTelegram}>
            <img className={styles.imgTelegram} src={Dtelegram} />
          </div>
        </div>
        <div>
          <p className={styles.text1}>Gabung Komunitas Telegram Kotakode</p>
        </div>
        <div>
          <p className={styles.text2}>
            Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
            bersama mencapai tujuan yang besar
          </p>
        </div>
        <div className={styles.buttonSection}>
          <div className={styles.wrapperButton}>
            <Button buttonText="Ikuti Telegram!" type="buttonOrange" />
          </div>
        </div>
      </div>
    </div>
  );
}
