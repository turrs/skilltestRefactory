import React from "react";
import { Footer } from "../../Components";
import { Header, Jumbotron, TeamKotakode } from "../../Parts";
import styles from "./about.module.css";
export default function About() {
  return (
    <div>
      <Header></Header>
      <Jumbotron
        title="Dukung kami dalam menciptakan ekosistem yang inklusif bagi programmer di seluruh Indonesia"
        data1="Tentang Kotakode"
        data2="Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT terkini untuk mendukung memberikan pertumbuhan perekonomian di Indonesia."
      ></Jumbotron>
      <TeamKotakode></TeamKotakode>
      <Footer></Footer>
    </div>
  );
}
