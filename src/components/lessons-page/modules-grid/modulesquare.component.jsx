import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ModuleContainer = styled.div`

    display: flex;
    flex-direction: row; 
    background-color: yellow;
`
const Module = styled.div`
  width: 15rem;
  height: 15rem; 
  display: flex;
  margin: 2rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
  

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