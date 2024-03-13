import React from 'react';
import styled from 'styled-components';
import ListWithCheckboxes from '../checkbox/checkbox.component';
import { L2content, L2objectives } from './Lesson2.overview';
import { LessonOverviewWrapper, TopicsCovered, LessonObjectives } from './LessonOverview.styles';
import { ObjectivesList } from './objectiveslist/objectiveslist.component';

const LessonOverview = () => {



    return (
        <LessonOverviewWrapper>
            <ObjectivesList listitems={L2objectives} title="Objectives" />
            <ObjectivesList listitems={L2content} title="Topics" />
        </LessonOverviewWrapper>
    );
};

export default LessonOverview;
