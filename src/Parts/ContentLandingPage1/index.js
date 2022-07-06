import React from "react";
import { ILlandingpage1 } from "../../Assets";
import { Card } from "../../Components";
import styles from "./contentLandingpPage.module.css";
export default function ContentLandingPage1() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.column1}>
            <div>
              <Card
                title="Jawaban cepat, tepat & gratis"
                data="Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya."
                image={ILlandingpage1}
                type="primary"
              ></Card>
            </div>
            <div>
              <Card
                title="Konsep Gamifikasi"
                data="Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer."
                image={ILlandingpage1}
                type="primary"
              ></Card>
            </div>
          </div>
          <div className={styles.column2}>
            <Card
              title="Bangun Online Portofolio"
              data="Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas."
              image={ILlandingpage1}
              type="secondary"
            ></Card>
          </div>
          <div className={styles.column3}>
            <div>
              <Card
                type="tertiary"
                data="Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya"
                title="Mengapa perlu menggunakan Kotakode?"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
