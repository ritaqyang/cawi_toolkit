import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    NavLinkOut,
    GreetingsContainer,
} from './navigation.styles';


const Navigation = () => {

    return (
        <Fragment>
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

            <Outlet />
        </Fragment>

    )
}


export default Navigation; 