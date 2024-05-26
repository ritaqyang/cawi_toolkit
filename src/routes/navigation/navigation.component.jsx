import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import logo from '../../assets/logo.png';
import './navigation.css';


const Navigation = () => {
  return (
    <Fragment>
      <header className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/lessons-home'>LESSONS</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
          <li><Link to='/sign-in'>SIGN IN</Link></li>
        </ul>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;


