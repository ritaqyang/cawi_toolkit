import React, { useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import ModuleNavElement from './mNavElement.component';
import './moduleNav.styles.css';
import {gsap} from "gsap";

const ModuleNav = ({ navElements, activeOption, handleDisplayOptionChange, contentRef, progress, completedPages }) => {
    const navRef = useRef(null);
    const hideRef = useRef(null);
    const showRef = useRef(null);
    const navElRef = useRef(null);


    const handleNavHide = () => {
        gsap.to(navElRef.current, {
            height: '0px',
        })
        gsap.to(navRef.current, {
            width: '5%',
            delay: 0.5
        })
        gsap.to(contentRef.current, {
            width: '100%',
            delay: 0.5
        })
        gsap.to(showRef.current, {
            display: 'inline'
        })
        gsap.to(hideRef.current, {
            display: 'none'
        })
    }

    const handleNavShow = () => {
        gsap.to(contentRef.current, {
            width: '80%'
        })
        gsap.to(navRef.current, {
            width: '20%'
        })
        gsap.to(navElRef.current, {
            height: 'auto',
            delay: 0.5
        })
        gsap.to(showRef.current, {
            display: 'none',
        })
        gsap.to(hideRef.current, {
            display: 'inline'
        })
    }

    return (
        <section className="m-nav" ref={navRef}>
        <div className="hide-and-show">
                <Link className="hide-link" ref={hideRef} onClick={handleNavHide} to="#">HIDE</Link>
                <Link className="show-link" ref={showRef} onClick={handleNavShow} to="#">SHOW</Link>
        </div> 
        <ul className="nav-elements" ref={navElRef}>
            {navElements.map((navElement, index) => (
                <ModuleNavElement 
                    key={index} 
                    isActive={activeOption === navElement.option} 
                    onClick={() => handleDisplayOptionChange(navElement.option)}
                    progress={completedPages[navElement.option] ? 100 : (activeOption === navElement.option ? progress : 0)}
                >
                    {navElement.label}
                </ModuleNavElement>
            ))}
        </ul>
        <ul className="nav-elements-mobile">
            {navElements.map((navElement, index) => (
                <ModuleNavElement 
                    key={index} 
                    isActive={activeOption === navElement.option} 
                    onClick={() => handleDisplayOptionChange(navElement.option)}
                >
                    {navElement.option}
                </ModuleNavElement>
            ))}
        </ul>
        </section>
    );
};

export default ModuleNav;