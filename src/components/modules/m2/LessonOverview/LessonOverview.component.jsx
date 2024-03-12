import React from 'react';
import styled from 'styled-components';

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
    return (
        <LessonOverviewWrapper>
            <h2>Lesson Overview</h2>
            <TopicsCovered>
                <h3>Topics Covered:</h3>
                <ul>
                    <li>Aspects of a healthy relationship</li>
                    <li>Repeating Cycles of Trauma</li>
                    <li>Understanding what works best for you in relationships</li>
                    <li>Religious and Cultural Differences in Relationships</li>
                    <li>Strains that Immigration has on Relationships</li>
                    <li>Activities and Discussion Prompts</li>
                </ul>
            </TopicsCovered>
            <LessonObjectives>
                <h3>Lesson Objectives:</h3>
                <ol>
                    <li>Understanding the importance of effective communication in relationships.</li>
                    <li>Learning how one sets and maintains healthy boundaries.</li>
                    <li>Examine the impact of cultural, societal, and personal beliefs and values on relationships.</li>
                    <li>Understanding power and consent in relationships.</li>
                    <li>Examining what self-awareness and empathy in relationships look like.</li>
                    <li>Understanding the importance of maintaining self-care in healthy relationships.</li>
                </ol>
            </LessonObjectives>
        </LessonOverviewWrapper>
    );
};

export default LessonOverview;
