import React from "react";
import img from '../../assets/homepage.png';
import './lessons.styles.css'; 
import { Outlet, Link } from "react-router-dom";

const modules = [
    { id: 1, name: 'Module 1', description: 'Description for Module 1', image: img },
    { id: 2, name: 'Module 2', description: 'Description for Module 2', image: img },
    { id: 3, name: 'Module 3', description: 'Description for Module 3', image: img },
    { id: 4, name: 'Module 1', description: 'Description for Module 1', image: img },
    { id: 5, name: 'Module 2', description: 'Description for Module 2', image: img },
    { id: 6, name: 'Module 3', description: 'Description for Module 3', image: img },
    { id: 7, name: 'Module 1', description: 'Description for Module 1', image: img },
    { id: 8, name: 'Module 2', description: 'Description for Module 2', image: img },
    { id: 9, name: 'Module 3', description: 'Description for Module 3', image: img },
 
];
const Square = ({ module }) => (
    <div className="square">
        
        
        <Link className="nav-link" to={`/modules/1`}>
            <img src={module.image} alt={module.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            <h3>{module.name}</h3>
            <p>{module.description}</p>
        </Link>
    </div>
);

const Grid = ({ modules }) => (
    <div className="grid">
        {modules.map(module => (
            <Square key={module.id} module={module} />
        ))}
    </div>
);


const LessonsHome = ()  => {

   
    return (
        <div>

            <Grid modules= {modules} />


        </div>
    );
}
export default LessonsHome; 