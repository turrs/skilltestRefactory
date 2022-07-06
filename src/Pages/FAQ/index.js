import React from "react";
import { Footer } from "../../Components";
import { Header, Jumbotron } from "../../Parts";

export default function FAQ() {
  return (
    <div>
      <Header></Header>
      <Jumbotron
        title="Pertanyaan & Jawaban terkait Kotakode"
        text="Punya pertanyaan seputar produk dan layanan Kotakode? Temukan berbagai informasi yang tersedia di bawah ini."
        data1="FAQ"
      />
      <Footer></Footer>
    </div>
  );
}
