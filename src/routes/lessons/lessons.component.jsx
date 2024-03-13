import React from "react";
import img from '../../assets/homepage.png';
import { Outlet, Link } from "react-router-dom";
import {  LessonPageContainer } from "./lessons.styles"
import LessonGrid from "../../components/lessons-page/modules-grid/modulegrid.component";


const modules = [
    { id: 1, name: 'Module 1', description: 'What is Sexual & Reproductive Health?', image: img },
    { id: 2, name: 'Module 2', description: 'Navigating Relationships', image: img },
    { id: 3, name: 'Module 3', description: 'Consent & Boundaries', image: img },
    { id: 4, name: 'Module 4', description: 'Anti-Racism & Anti-Oppression in SRH', image: img },
    { id: 5, name: 'Module 5', description: 'LGBTQ2S & Queer Communities', image: img },
    { id: 6, name: 'Module 6', description: 'Creating Safe Spaces', image: img },


];
const LessonsHome = ()  => {

   
    return (
        <div>
            <LessonPageContainer>
                <LessonGrid modules= {modules} />

            </LessonPageContainer>
           


        </div>
    );
}
export default LessonsHome; 