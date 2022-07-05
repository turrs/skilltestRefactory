import React from "react";
import { Card } from "../../Components";
import styles from "./contentLandingpPage.module.css";
export default function ContentLandingPage1() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className="column1">
            <div>
              <Card></Card>
            </div>

            <div>
              <Card></Card>
            </div>
          </div>
          <div className="column2">
            <p>test2</p>
          </div>
          <div className="column3">
            <p>test3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
