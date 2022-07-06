import React from "react";
import { ILmicroblogging, ILonlineForum, ILsoon } from "../../Assets";
import { Card, CardPlatform } from "../../Components";

import styles from "./contentLandingPage2.module.css";
export default function ContentLandingPage2() {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <p className={styles.text1}>Satu Platform, Banyak Solusi</p>
        <p className={styles.text2}>
          Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik
          dan terbaik untuk mengembangkan ekosistem IT anak bangsa.
        </p>
      </div>
      <div className={styles.column2}>
        <div className={styles.wrapperCard1}>
          <CardPlatform
            title="Online Forum"
            data="Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas"
            type="primary"
            image={ILonlineForum}
            buttonText="Tanya Sekarang"
          ></CardPlatform>
        </div>
        <div className={styles.wrapperCard2}>
          <CardPlatform
            title="Microblogging"
            data="Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT"
            type="primary"
            buttonText="Tulis Sekarang"
            image={ILmicroblogging}
          ></CardPlatform>
        </div>
        <div className={styles.wrapperCard3}>
          <CardPlatform
            title="Job Hiring (Coming Soon)"
            data="Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan"
            type="disable"
            buttonText="Cari Kerja"
            image={ILsoon}
          ></CardPlatform>
        </div>
      </div>
    </div>
  );
}
