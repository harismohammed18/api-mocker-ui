import React from "react";
import { Header, SideMenu } from "../../components";

const Home = () => {
  return (
    <>
      <section className="header-section">
        <Header />
      </section>
      <section className="main-content">
        <section className="side-menu">
          <SideMenu />
        </section>
        <section className="content"></section>
      </section>
    </>
  );
};

export default Home;
