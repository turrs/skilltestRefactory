import React from "react";
import { ILkokoacademy } from "../../Assets";
import { Footer } from "../../Components";
import { Header, Jumbotron } from "../../Parts";
import styles from "./academy.module.css";
export default function Academy() {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div>
          <div>
            <p>test</p>
          </div>
          <div>
            <img src={ILkokoacademy}></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
