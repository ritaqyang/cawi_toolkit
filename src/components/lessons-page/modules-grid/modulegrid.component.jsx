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
    background-color:  #F9E29C;
  
`;

const LessonGrid = ({ modules }) => {
    return (

        <div >
            <LessonPlanContainer>
                {modules.map(module => (
                    <Square key={module.id} module={module} />

                ))}
            </LessonPlanContainer>

        </div>
    )
};

export default LessonGrid; 
