import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './moduleNav.styles.css';

const ModuleNavElement = ({isActive, onClick, to, children, progress}) => {
    return (
        <>
        <li>
            <Link className={isActive ? "topic-link active" : "topic-link"} to={to} onClick={onClick}>
                <div className="progress-indicator" style={{ width: `${progress}%`}}></div>
                <span className="link-content">
                    {children}
                </span>
            </Link>
        </li>
        </>
    );
}

export default ModuleNavElement;