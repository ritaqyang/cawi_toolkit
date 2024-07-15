import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './moduleNav.styles.css';
import Checkbox from "../checkbox.component";

const ModuleNavElement = ({isActive, onClick, to, children, progress}) => {
    /*const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const [scrolled, setScrolled] = useState(0);

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrolled(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/

    return (
        <>
        <li>
            <Link className={isActive ? "topic-link active" : "topic-link"} to={to} onClick={onClick}>
                <div className="progress-indicator" style={{ width: `${progress}%`}}></div>
                <span className="link-content">
                    {children}
                </span>
            </Link>
            {/* /** completion box (take an argument that memorizes the state of the course completion
            (consider user, module, moduleindex ))
            onclick = change box to green with checkmark
            another function: increment progress value  */ }
        </li>
        </>
    );
}

export default ModuleNavElement;