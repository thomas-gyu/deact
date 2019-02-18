import React from "react";
// import styles from "./MainStructure.scss";
import Header from "components/structure/Header";

const MainStructure = ({ children }) => (
  <div>
    <Header />
    <main>{ children }</main>
  </div>
);

export default MainStructure;
