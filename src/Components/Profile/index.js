import React from "react";
import { Igithub, Ilinkedin } from "../../Assets";
import styles from "./profile.module.css";
function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImage}>
        <img
          src="https://www.kotakode.com/static/media/peter.834b20a0.svg"
          className={styles.img}
        ></img>
      </div>
      <div className={styles.wrapperText}>
        <p className={styles.textName}>Peter Tanugraha</p>
        <p className={styles.textPosition}>Cofounder & CEO</p>
        <p className={styles.textAlumnus}>
          Computer Engineering @University of Toronto 2019
        </p>
        <li className={styles.experience}>
          Deep Learning Engineer @IBM Canada (1.5 years)
        </li>
        <li className={styles.experience}>
          Deep Learning Engineer / Software Engineer @Nightingtale.ai Canada
          (1.5 years)
        </li>
        <div>
          <img src={Ilinkedin} className={styles.socialmedia}></img>
          <img src={Igithub} className={styles.socialmedia}></img>
        </div>
      </div>
    </div>
  );
}

export default Profile;
