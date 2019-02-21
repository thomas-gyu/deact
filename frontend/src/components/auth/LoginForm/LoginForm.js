import React from "react";
import './LoginForm.scss';
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes);

const AuthForm = ({
  kind,
  onChangeInput,
  username,
  password,
  onLogin,
  onRegister,
  error
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      switch (kind) {
        case "register":
          onRegister();
          return;
        case "login":
          onLogin();
          return;
        default:
          return;
      }
    }
  };


  return (
    <div classNale={'body'}>
      <div className={'login-box'}>
        <div className={'hide-login-btn'}><FontAwesomeIcon icon="times" /></div>
        <div className={'login-form'}>  
          <h1>Welcome</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={'textb'}
            value={username}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={'textb'}
            value={password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <div className={"login-btn"} onClick={onRegister}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
