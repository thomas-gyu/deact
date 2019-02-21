import React from "react";
// import styles from "./MainStructure.scss";
import HeaderContainer from "containers/HeaderContainer";

const MainStructure = ({ children }) => (
  <div>
    <HeaderContainer />
    <main>{ children }</main>
  </div>
);

export default MainStructure;
