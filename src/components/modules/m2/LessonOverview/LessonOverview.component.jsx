import React from 'react';
import styled from 'styled-components';
import ListWithCheckboxes from '../checkbox/checkbox.component';
import ListItem from '../checkbox/checkbox.component';
import { L2content, L2objectives } from './Lesson2.overview';
import { LessonOverviewWrapper, TopicsCovered, LessonObjectives } from './LessonOverview.styles';


const LessonOverview = () => {

    const formattedContent = L2content.map(item => <ListItem item={item} />);
    const formattedObjectives = L2objectives.map(item => <ListItem item={item}/>); 
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
