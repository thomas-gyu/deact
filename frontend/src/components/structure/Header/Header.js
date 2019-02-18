import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";

const Header = ({ onLogout }) => (
  <div className={'header'}>
    <Link to={"/"} className={'logo'}>
      V.O.K
    </Link>
    <div className={'logout'}>
      <MdLock onClick={onLogout} />
    </div>
  </div>
);

export default Header;
