import React from "react";
import { Button } from "../../Components";
import style from "./menu.module.css";
export default function Menu() {
  return (
    <div className={style.container}>
      <Button title="Tentang" type="buttonMenu"></Button>
      <Button title="Produk" type="buttonMenu"></Button>
      <Button title="FAQ" type="buttonMenu"></Button>
      <Button title="Events" type="buttonMenu"></Button>
      <Button title="Partnership" type="buttonMenu"></Button>
      <Button title="Academy" type="buttonMenu"></Button>
    </div>
  );
}
