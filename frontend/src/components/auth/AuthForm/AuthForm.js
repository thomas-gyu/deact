import React from "react";
import "./AuthForm.scss";
import { Link } from "react-router-dom";



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
    <div className={"auth-form"}>
      <div className={"title"}>{kind.toUpperCase()}</div>
      <div className={"line-wrapper"}>
        <div className={"input-title"}>username</div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={"line-wrapper"}>
        <div className={"input-title"}>password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      {kind === "register" ? (
        <div className={"auth-button"} onClick={onRegister}>
          {kind.toUpperCase()}
        </div>
      ) : (
        <div className={"auth-button"} onClick={onLogin}>
          {kind.toUpperCase()}
        </div>
      )}
      {kind === "register" ? (
        <Link to={`/auth/login`} className={"description"}>
          if you already have account...
        </Link>
      ) : (
        <Link to={`/auth/register`} className={"description"}>
          if you don't have an account...
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
