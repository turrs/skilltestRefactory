import React from "react";
import styles from "./footer.module.css";
import { Button } from "../../Components";
import { Dblok, Dgoogle } from "../../Assets";

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <div className={styles.content}>
            <p className={styles.label}>Bagian Dari</p>
            <div className={styles.row}>
              <img src={Dgoogle} className={styles.image}></img>
              <img src={Dblok} className={styles.image}></img>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <p className={styles.label}>Produk</p>
            <Button type="Link" buttonText="Pertanyaan"></Button>
            <Button type="Link" buttonText="Blog"></Button>
            <Button type="Link" buttonText="Pengguna"></Button>
            <Button type="Link" buttonText="Events"></Button>
            <Button type="Link" buttonText="Partnership"></Button>
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <p className={styles.label}>Perusahaan</p>
            <Button type="Link" buttonText="About"></Button>
            <Button type="Link" buttonText="Fag"></Button>
            <Button type="Link" buttonText="Rules"></Button>
            <Button type="Link" buttonText="Legal"></Button>
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <p className={styles.label}>Hubungi Kami</p>
            <Button
              type="Link"
              buttonText="petertanugraha@kotakode.com"
            ></Button>
            <Button type="Link" buttonText="Blog"></Button>
          </div>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <p className={styles.textBottom}>PT. Kota Digital Nusantarah</p>
        <p className={styles.textBottom}>
          Copyright 2020 Kotakode. All rights reserved
        </p>
        <p className={styles.textBottom}>Made with ❤️ in 🇮🇩</p>
      </div>
    </div>
  );
}
