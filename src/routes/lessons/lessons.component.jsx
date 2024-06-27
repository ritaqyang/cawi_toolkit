import React, {useLayoutEffect, useEffect} from "react";
import img from '../../assets/homepage.png';
import {  LessonPageContainer, SidebarContainer,SidebarContent, MainContent } from "./lessons.styles"
import LessonGrid from "../../components/lessons-page/modules-grid/modulegrid.component";
import { gsap } from "gsap";
import m2 from '../../assets/lessons-page/m2_img.png';
import m1 from '../../assets/lessons-page/m1.png';
import m3 from '../../assets/lessons-page/m3.png';
import m4 from '../../assets/lessons-page/m4.png';
import m5 from '../../assets/lessons-page/m5.png';
import m6 from '../../assets/lessons-page/m6.png';

const modules = [
    { id: 1, name: 'MODULE 1', description: 'What is Sexual & Reproductive Health?', image: m1 },
    { id: 2, name: 'MODULE 2', description: 'Navigating Relationships', image: m2 },
    { id: 3, name: 'MODULE 3', description: 'Consent & Boundaries', image: m3 },
    { id: 4, name: 'MODULE 4', description: 'Anti-Racism & Anti-Oppression in SRH', image: m4 },
    { id: 5, name: 'MODULE 5', description: 'LGBTQ2S & Queer Communities', image: m5 },
    { id: 6, name: 'MODULE 6', description: 'Creating Safe Spaces', image: m6 },


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