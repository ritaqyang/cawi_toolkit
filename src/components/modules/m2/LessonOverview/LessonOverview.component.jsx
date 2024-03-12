import React from 'react';
import styled from 'styled-components';
import ListWithCheckboxes from '../checkbox/checkbox.component';
import ListItem from '../checkbox/checkbox.component';
const content = [
    "Aspects of a healthy relationship",
    "Repeating Cycles of Trauma",
    "Understanding what works best for you in relationships",
    "Religious and Cultural Differences in Relationships",
    "Strains that Immigration has on Relationships",
    "Activities and Discussion Prompts"
];

const objectives = [
    "Understanding the importance of effective communication in relationships.",
    "Learning how one sets and maintains healthy boundaries.",
    "Examine the impact of cultural, societal, and personal beliefs and values on relationships.",
    "Understanding power and consent in relationships.",
    "Examining what self-awareness and empathy in relationships look like.",
    "Understanding the importance of maintaining self-care in healthy relationships."
];


const LessonOverviewWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TopicsCovered = styled.div`
  margin-bottom: 20px;
`;

const LessonObjectives = styled.div`
  margin-top: 20px;
`;

const LessonOverview = () => {

    const formattedContent = content.map(item => <ListItem item={item} />);
    const formattedObjectives = objectives.map(item => <ListItem item={item}/>); 
    return (
        <LessonOverviewWrapper>
            <h4>Lesson Overview</h4>
            <TopicsCovered>
                <h4>Topics Covered:</h4>
                {formattedContent}
               
            </TopicsCovered>
            <LessonObjectives>
                <h4>Lesson Objectives:</h4>
                {formattedObjectives}
            </LessonObjectives>
        </LessonOverviewWrapper>
    );
};

export default LessonOverview;
