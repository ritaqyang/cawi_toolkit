import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
    AboutTitle
} from './about.styles';
import backgroundImage from '../../../public/about-bg.png'

function About(){

    return (
        <div style={{
            backgroundImage:`url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200%',
            height: '50vh',
        }}>
            <section>
            <AboutTitle>ABOUT US</AboutTitle>
            </section>
        </div>
    ); 
}

export default About; 