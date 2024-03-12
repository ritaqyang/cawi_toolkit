import React, { useRef } from 'react';
import styled from 'styled-components';
import { RelationshipElement } from '../elements/elements.component';
import ListItem from '../checkbox/checkbox.component';
import Honesty from '../elements/content';
import img from '../../../../assets/homepage.png';


const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  &:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const RedCard = styled(Card)`
  background-color: #007e9e;
`;

const BlueCard = styled(Card)`
  background-color: #0062ff;
`;

const GreenCard = styled(Card)`
  background-color: #18cd5e;
`;

const TipText = styled.p`
  font-size: 1em;
  font-weight: 700;
`;

const SecondText = styled.p`
  font-size: .7em;
`;

const ScrollToComponent = styled.div`
  height: 500px; /* Example height, adjust as needed */
  width: 100%;
  background-color: lightgray;
`;

const StyledCards = () => {
    const scrollRef = useRef(null);

    const handleCardClick = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <CardsContainer>
                <RedCard onClick={handleCardClick}>
                    <TipText>Honesty</TipText>
                </RedCard>
                <BlueCard onClick={handleCardClick}>
                    <TipText>Hover Me</TipText>
                </BlueCard>
                <GreenCard onClick={handleCardClick}>
                    <TipText>Hover Me</TipText>
                </GreenCard>
                <RedCard onClick={handleCardClick}>
                    <TipText>Hover Me</TipText>
                </RedCard>
                <BlueCard onClick={handleCardClick}>
                    <TipText>Hover Me</TipText>
                </BlueCard>
                <GreenCard onClick={handleCardClick}>
                    <TipText>Hover Me</TipText>
                </GreenCard>
            </CardsContainer>



            <ListItem item="Honesty" />

            <RelationshipElement
                title="Honesty"
                content="lalallallal"

            />

            <ListItem item="Trust" />
            <RelationshipElement
                title="Trust"
                content="Trust is essential for building a strong connection with your partner. It means relying on each other and believing that your partner has your best interests at heart."
            />

            <ListItem item="Respect" />
            <RelationshipElement
                title="Respect"
                content="Respect is treating your partner with kindness, empathy, and consideration. It involves valuing their opinions, boundaries, and autonomy."
            />

            <img src={img} alt="Description of the image" />
            <div ref={scrollRef}>  

                scroll to me 
                <Honesty />

            </div>

            


            
        </>
    );
};

export default StyledCards;
