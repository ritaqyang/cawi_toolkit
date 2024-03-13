import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ModuleContainer = styled.div`

    display: flex;
    flex-direction: row; 
    background-color: yellow;
`
const Module = styled.div`
  width: 10rem;
  height: 14rem; 
  display: flex;
  margin: 2rem;
  padding: 2rem;
  background-color: #FFE5B4;
  border: 2px solid #CEB180;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  

`;
export const Square = ({ module }) => {
    return (
        <div>
            
                 <Module>
                    <Link className="nav-link" to={`/modules/${module.id}`}>
                    <img src={module.image} alt={module.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                    <p>{module.name}</p>
                    <p>{module.description}</p>
                    </Link>
                </Module>
           
           
        </div>
    )
};