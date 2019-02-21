import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ onLogout }) => (
  <div className={'header'}>
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" color="inherit" className={'grow'}>
            <FontAwesomeIcon icon="dove" />
            <Link to={"/"} className={'logo'}>
              V.O.K
            </Link>
          </Typography>
          <Button color="inherit" onClick={onLogout}>Logout</Button>
        </Toolbar>
    </AppBar>
  </div>
);

export default Header;
