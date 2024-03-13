import React from "react";
import img from '../../assets/homepage.png';
import { Outlet, Link } from "react-router-dom";
import {  LessonPageContainer } from "./lessons.styles"
import LessonGrid from "../../components/lessons-page/modules-grid/modulegrid.component";
import styled from "styled-components";


const modules = [
    { id: 1, name: 'Module 1', description: 'What is Sexual & Reproductive Health?', image: img },
    { id: 2, name: 'Module 2', description: 'Navigating Relationships', image: img },
    { id: 3, name: 'Module 3', description: 'Consent & Boundaries', image: img },
    { id: 4, name: 'Module 4', description: 'Anti-Racism & Anti-Oppression in SRH', image: img },
    { id: 5, name: 'Module 5', description: 'LGBTQ2S & Queer Communities', image: img },
    { id: 6, name: 'Module 6', description: 'Creating Safe Spaces', image: img },


];


const SidebarContainer = styled.div`
  flex: 0 0 250px;
  background-color: #E3B778; 
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SidebarContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
`

const MainContent = styled.div`
  flex: 1; /* Take remaining space */
  padding: 20px;
`;
const LessonsHome = ()  => {

   
    return (
        <div>
            <LessonPageContainer>
                <SidebarContainer>
                    <SidebarContent>
                        <h2>Sidebar</h2>
                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>

                    </SidebarContent>
                    
                </SidebarContainer>
                <MainContent>
                    <LessonGrid modules={modules} />

                </MainContent>
               

            </LessonPageContainer>
           


        </div>
    );
}
export default LessonsHome; 