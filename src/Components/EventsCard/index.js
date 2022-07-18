import React from "react";
import { Idate, Itime } from "../../Assets";
import styles from "./eventscard.module.css";
function EventsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImage}>
        <img
          className={styles.img}
          src="https://storage.googleapis.com/kotakode-prod-public/images/d662f300-8fc2-4bfa-8138-2635ea5ddeb5-kotatalks.jpeg"
        ></img>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <p className={styles.dateText}> Jan 30</p>
        </div>
        <div className={styles.text}>
          <div>
            <p className={styles.title}>
              KotaTalks 31: How to Kickstart your Tech Career with Kotakode
              Academy
            </p>
          </div>
          <div className={styles.attribute}>
            <img src={Idate} className={styles.attributeText}></img>
            <p className={styles.attributeText}>Minggu, 30 Januari</p>
          </div>
          <div className={styles.attribute}>
            <p className={styles.attributeText}>14.00 WIB</p>
          </div>
          <div className={styles.attribute}>
            <p className={styles.attributeText}>logo</p>
            <p className={styles.attributeText}>Minggu, 30 Januari</p>
          </div>
          <div className={styles.attribute}>
            <p className={styles.attributeText}>logo</p>
            <p className={styles.attributeText}>Minggu, 30 Januari</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
