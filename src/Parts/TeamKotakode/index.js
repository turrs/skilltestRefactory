import React from "react";
import styles from "./teamKotakode.module.css";
export default function TeamKotakode() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <p className={styles.text}>Tim kotakode</p>
        </div>
      </div>
      <div className={styles.maskot}>
        <div className={styles.maskotText}>
          <p className={styles.text2}>Maskot Kotakode</p>
          <p className={styles.text3}>Kucing Robot Koko!</p>
          <p className={styles.text4}>
            Banyak dari kita yang menyukai kucing, termasuk para programmer.
            Koko merupakan sebuah robot berbentuk kucing dengan kombinasi warna
            hijau dan putih. Koko adalah sebuah robot yang fanatik terhadap
            teknologi, khususnya di bidang IT. Ia datang dari masa depan dan
            diprogram untuk membantu orang-orang yang memiliki semangat yang
            sama dengan dirinya. Sama seperti Koko, Kotakode memiliki semangat
            untuk membantu para fanatik IT di Indonesia untuk mengembangkan
            ekosistem yang menyenangkan untuk mempelajari hal-hal yang berkaitan
            dengan dunia IT terkini.
          </p>
        </div>
        <div>
          <img
            className={styles.img}
            src="https://www.kotakode.com/static/media/aboutGraphic.de4e5344.svg"
          ></img>
        </div>
      </div>
      <div className={styles.question}>
        <div>
          <p className={styles.text}>Punya Pertanyaan Mengenai Kotakode?</p>
          <p className={styles.text5}>
            Kotakode merupakan platform yang dibuat untuk mengatasi permasalahan
            bagi para pegiat IT di Indonesia. Kami menyadari bahwa kami sangat
            membutuhkan kontribusi pengguna dalam membangun Kotakode. Agar
            setiap fitur, tombol, dan warna yang kami buat sesuai dengan
            kebutuhan pengguna. Oleh karena itu jika kamu memiliki pertanyaan,
            saran, atau tawaran kerjasama yang ingin ditanyakan dan diskusikan
            dengan kami. Silakan hubungi kami melalui:
          </p>
        </div>
        <div>
          <p>Kotakode:</p>
          <p className={styles.text5}>
            Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,
            Kuningan Timur, Setiabudi, Jakarta Selatan 12950
          </p>
        </div>
        <div>
          <p>Email:</p>
          <p>petertanugraha@kotakode.com</p>
        </div>
      </div>
    </div>
  );
}
