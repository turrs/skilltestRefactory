import React from "react";
import { Footer, Question } from "../../Components";
import { Header, Jumbotron } from "../../Parts";
import styles from "./faq.module.css";
export default function FAQ() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Jumbotron
        title="Pertanyaan & Jawaban terkait Kotakode"
        text="Punya pertanyaan seputar produk dan layanan Kotakode? Temukan berbagai informasi yang tersedia di bawah ini."
        data1="FAQ"
        type="FAQ"
        card="true"
      />

      <div className={styles.wrapperFaq}>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </div>

      <Footer></Footer>
    </div>
  );
}
