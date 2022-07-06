import React from "react";
import styles from "./landingPage.module.css";
import {
  ContentLandingPage1,
  ContentLandingPage2,
  ContentLandingPage3,
  ContentLandingPage4,
  Header,
} from "../../Parts";
import { Button, DataOverview, Footer } from "../../Components";
import { ImgIndo } from "../../Assets";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <div className={styles.content}>
            <p className={styles.textBig}>
              Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia
            </p>
            <p className={styles.textNormal}>
              Ikutan diskusi forum tanya jawab, tulis blog dan Membangun
              portofolio semua di Kotakode
            </p>
            <div className={styles.register}>
              <div className={styles.inputWrapper}>
                <input
                  placeholder="Masukkan Email Kamu"
                  className={styles.input}
                ></input>
              </div>
              <div>
                <Button
                  type="buttonOrange"
                  buttonText="Daftar"
                  title="Daftar"
                ></Button>
              </div>
            </div>
            <div className={styles.wrapperDataOverview}>
              <DataOverview type="User Bergabung" data="28100"></DataOverview>
              <DataOverview type="Blog Ditulis" data="1019"></DataOverview>
              <DataOverview
                type="Total Pertanyaan & Jawaban"
                data="28100"
              ></DataOverview>
            </div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <img src={ImgIndo}></img>
        </div>
      </div>
      <div>
        <ContentLandingPage1></ContentLandingPage1>
        <ContentLandingPage2></ContentLandingPage2>
        <ContentLandingPage3></ContentLandingPage3>
        <ContentLandingPage4></ContentLandingPage4>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
