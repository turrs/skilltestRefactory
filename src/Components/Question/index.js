import React, { useState } from "react";
import { Iminus, Ishow } from "../../Assets";
import style from "./question.module.css";
function Question() {
  const [show, setShow] = useState(false);
  const Showing = () => {
    setShow(true);
  };
  const Minimize = () => {
    setShow(false);
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div>
            <p className={style.textQuestion}>Apa itu Kotakode?</p>
          </div>
          <div className={style.wrapperIcon}>
            {!show && <img src={Ishow} onClick={Showing}></img>}
            {show && (
              <img
                src={Iminus}
                onClick={Minimize}
                className={style.minus}
              ></img>
            )}
          </div>
        </div>
      </div>
      {show && (
        <div className={style.content}>
          <p>content</p>
        </div>
      )}
    </div>
  );
}

export default Question;
