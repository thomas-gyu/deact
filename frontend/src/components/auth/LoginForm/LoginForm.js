import React from "react";
import './LoginForm.scss';
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      onLogin();
    }
  };


  return (
    <div className={'body'}>
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
          <div className={"login-btn"} onClick={onLogin}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
