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
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/lessons-home'>LESSONS</a></li>
                    <li><a href='/about'>ABOUT US</a></li>
                </ul>
            </header>
            <Outlet />
        </Fragment>

    );
}


export default Navigation; 