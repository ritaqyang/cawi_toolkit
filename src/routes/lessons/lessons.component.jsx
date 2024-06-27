import React, {useLayoutEffect, useEffect} from "react";
import img from '../../assets/homepage.png';
import {  LessonPageContainer, SidebarContainer,SidebarContent, MainContent } from "./lessons.styles"
import LessonGrid from "../../components/lessons-page/modules-grid/modulegrid.component";
import { gsap } from "gsap";
import m2 from '../../assets/lessons-page/m2_img.png';


const modules = [
    { id: 1, name: 'MODULE 1', description: 'What is Sexual & Reproductive Health?', image: img },
    { id: 2, name: 'MODULE 2', description: 'Navigating Relationships', image: m2 },
    { id: 3, name: 'MODULE 3', description: 'Consent & Boundaries', image: img },
    { id: 4, name: 'MODULE 4', description: 'Anti-Racism & Anti-Oppression in SRH', image: img },
    { id: 5, name: 'MODULE 5', description: 'LGBTQ2S & Queer Communities', image: img },
    { id: 6, name: 'MODULE 6', description: 'Creating Safe Spaces', image: img },


];

const LessonsHome = ()  => {

    return (
        <div>
            <LessonPageContainer>
                
                <MainContent>
                    <LessonGrid modules={modules} />

                </MainContent>
               

            </LessonPageContainer>
           


        </div>
    );
}
export default LessonsHome; 