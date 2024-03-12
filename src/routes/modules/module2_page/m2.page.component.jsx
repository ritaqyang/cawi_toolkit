import react from 'react';
import LessonOverview from '../../../components/modules/m2/LessonOverview/LessonOverview.component';
import RelationshipNavigator from '../../../components/modules/m2/elements/elements.component';

const M2Page = () => {
    return (
        <div>
            <h1>Module 2 Page</h1>
            <LessonOverview />
            <RelationshipNavigator />
        </div>
    );
}

export default M2Page;