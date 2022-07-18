import React from "react";
import { EventsCard, Footer } from "../../Components";
import { Header, Jumbotron } from "../../Parts";
import styles from "./events.module.css";
export default function Events() {
  return (
    <div>
      <Header></Header>
      <Jumbotron
        title="KOTAKODE"
        text="Dapatkan wawasan seputar pemrograman melalui webinar Kotakode"
        data1=""
        data2=""
        card="false"
      ></Jumbotron>
      <div className={styles.content}>
        <div>
          <p>Acara Yang Akan Datang</p>
        </div>
        <div>
          <p>
            Ayo segera daftar di acara terbaru dari Kotakode dan dapatkan
            wawasan menarik seputar pemrograman!
          </p>
        </div>
        <div>
          <p>Acara Sebelumnya</p>
        </div>
        <div>
          <p>
            Belum sempat mengikuti acara dari Kotakode sebelumnya? Tenang saja
            kalian masih bisa menontonnya melalui Youtube channel Kotakode!
            Jangan lupa subscribe juga ya!
          </p>
        </div>
        <div className={styles.wrapperCard}>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
          <div>
            <EventsCard></EventsCard>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
