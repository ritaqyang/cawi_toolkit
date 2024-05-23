import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './moduleNav.styles.css';

const ModuleNavElement = ({isActive, onClick, to, children}) => {

    return (
        <li>
            <Link className={isActive ? "topic-link active" : "topic-link"} to={to} onClick={onClick}>
                {children}
            </Link>
        </li>
    );
}

export default ModuleNavElement;