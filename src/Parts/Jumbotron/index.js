import React, { useState } from "react";
import styles from "./jumbotron.module.css";
export default function Jumbotron({ title, text, data1, data2, type, card }) {
  const [faq, setFaq] = useState(false);
  const [box, setBox] = useState(true);
  useState(() => {
    if (type === "FAQ") {
      setFaq(true);
    }
    if (card === "false") {
      setBox(false);
    }
  }, [faq, card]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.wrapperLine}>
            <div className={styles.line}></div>
          </div>
          <p className={styles.text1}>{title}</p>
          <p className={styles.text2}>{text}</p>
        </div>
      </div>
      <div>
        <div className={styles.containerAbout}>
          {box && (
            <div className={styles.card}>
              <h2 className={styles.text3}>{data1}</h2>
              {!faq && <p className={styles.text4}>{data2}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
