//this is the main grid on lessons page that shows all 6 lesson modules
//takes client to each lesson onclick
import styled from "styled-components";
import React from "react";
import { Square }  from "./modulesquare.component";

export const LessonPlanContainer = styled.div`
    padding: 5rem;   
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    border-radius: 8px;
    background-color:  white;
    justify-content: space-around;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

const LessonGrid = ({ modules }) => {
    return (

        <div >
            <LessonPlanContainer>
                {modules.map(module => (
                    <Square key={module.id} module={module} progress={50}/>

                ))}
            </LessonPlanContainer>

        </div>
    )
};

export default LessonGrid; 
