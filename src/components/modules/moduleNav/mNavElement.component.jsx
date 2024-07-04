import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './moduleNav.styles.css';
import Checkbox from "../checkbox.component";

const ModuleNavElement = ({isActive, onClick, to, children}) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
        <li>
            <Link className={isActive ? "topic-link active" : "topic-link"} to={to} onClick={onClick}>
                <Checkbox label="COMPLETE" value={checked} onChange={handleChange} />
                
                {children}
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