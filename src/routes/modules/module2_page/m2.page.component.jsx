import react from 'react';
import LessonOverview from '../../../components/modules/m2/LessonOverview/LessonOverview.component';
import RelationshipNavigator from '../../../components/modules/m2/elements/elements.component';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%; 
  padding-top:7rem; 
  background-color: #F9E29C; 
`;

const Sidebar = styled.div`
  flex: 0 0 250px; /* Sidebar width */
  background-color: #E3B778; /* Sidebar background color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.div`
  flex: 1; /* Take remaining space */
  padding: 20px;
`;
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
                <MainContent>
                    <LessonOverview />
                    <RelationshipNavigator />
                </MainContent>
            </Wrapper>
            
           
        </div>
    );
}

export default M2Page;