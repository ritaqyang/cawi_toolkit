import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './moduleNav.styles.css';

const ModuleNavElement = ({isActive, onClick, to, children}) => {

    return (
        <li>
            <Link className={isActive ? "topic-link active" : "topic-link"} to={to} onClick={onClick}>
                {children}
            </Link>
            {/* /** completion box (take an argument that memorizes the state of the course completion
            (consider user, module, moduleindex ))
            onclick = change box to green with checkmark
            another function: increment progress value  */ }
        </li>
    );
}

export default ModuleNavElement;