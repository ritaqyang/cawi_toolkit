import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './homeNav.styles.css';

const HomeNavElement = ({isActive, onClick, to, children}) => {
    return (
        <>
        <li>
            <Link className={isActive ? "home-link active" : "home-link"} to={to} onClick={onClick}>
                    {children}
            </Link>
        </li>
        </>
    );
}

export default HomeNavElement;