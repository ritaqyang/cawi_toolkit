import react from 'react';
import LessonOverview from '../../../components/modules/m2/LessonOverview/LessonOverview.component';
import RelationshipNavigator from '../../../components/modules/m2/elements/elements.component';
import {Wrapper, Sidebar, MainContentContainer, MainContent} from './m2.page.styles';


const M2Page = () => {
    return (
        <div>
            <Wrapper>
                <Sidebar>
                    <h2>Sidebar</h2>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </Sidebar>
                <MainContentContainer>
                    <MainContent>
                        helo

                    </MainContent>

                    <MainContent>
                        heklo
                    </MainContent>

                   
                </MainContentContainer>
            </Wrapper>
            
           
        </div>
    );
}

export default M2Page;