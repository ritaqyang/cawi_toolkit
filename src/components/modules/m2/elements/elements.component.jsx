import React, { useState } from 'react';
import ListItem from '../checkbox/checkbox.component';
import StyledCards from '../styledcards/styledcard.component';
import { Honesty } from './content';
import img from '../../../../assets/homepage.png';
import styled from 'styled-components';


const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;
//todo: fix expanding content
export const RelationshipElement = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div onClick={handleToggle}>
            <strong>expand </strong>
            {expanded && <p>{content}</p>}
        </div>
    );
};

const RelationshipNavigator = () => {

    const honesty = "Honesty and open communication are key to building trust and maintaining a healthy relationship.In the context of sexual health, it is especially important to be open and honest with your partner about STIs and any other related topics, such as sexual expectations and boundaries.This can help prevent the spread of STIs and ensure that both partners are on the same page regarding their sexual health and well - being."

    return (
        <div>
            
            <h2>Navigating Relationships and Dating Culture as an Immigrant Woman</h2>
            <p>
                How does one navigate relationships and dating culture? This question
                can become even more critical when you are a young immigrant woman.
            </p>
            <p>
                To begin, let’s consider what it means to be in a safe and healthy
                relationship.
            </p>
           
            <h2>Consider the following 6 elements</h2>
            <StyledCards />



           
            
        </div>
    );
};

export default RelationshipNavigator;






