import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    NavLinkOut,
    GreetingsContainer,
    NavBar,
    Logo,
} from './navigation.styles';
import logo from '../../assets/logo.png';
import './navigation.css';


const Navigation = () => {

    return (
        <Fragment>
            <NavBar>
                <Logo>
                    <img className="logo" src={logo}/>
                </Logo>
                <NavLinks>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='nav-link' to='/lessons-home'>
                        Lessons
                    </NavLink>
                    <NavLink className='nav-link' to='/about'>
                        About Us 
                    </NavLink>
                </NavLinks>
            </NavBar>
            <Outlet />
        </Fragment>

    );
}


export default Navigation; 