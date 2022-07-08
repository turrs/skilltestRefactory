import React from "react";
import { Button } from "../../Components";
import style from "./menu.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className={style.container}>
      <Link to="/about">
        <Button title="Tentang" type="buttonMenu"></Button>
      </Link>
      <ul className={style.nav}>
        <li>
          <a href="#">About</a>
          <ul>
            <li>
              <a href="#">The product</a>
            </li>

            <li>
              <a href="#">Meet the team</a>
            </li>
          </ul>
        </li>
      </ul>
      <Link to="/faq">
        <Button title="FAQ" type="buttonMenu"></Button>
      </Link>
      <Link to="/events">
        <Button title="Events" type="buttonMenu"></Button>
      </Link>
      <Link to="/partnership">
        <Button title="Partnership" type="buttonMenu"></Button>
      </Link>
      <Link to="/academy">
        <Button title="Academy" type="buttonMenu"></Button>
      </Link>
    </div>
  );
}
