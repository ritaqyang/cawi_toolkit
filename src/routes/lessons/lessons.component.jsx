import React from "react";
import img from '../../assets/homepage.png';
import {  LessonPageContainer, SidebarContainer,SidebarContent, MainContent } from "./lessons.styles"
import LessonGrid from "../../components/lessons-page/modules-grid/modulegrid.component";
import { PdfDisplay } from "../../components/lessons-page/pdf-download/pdfdisplay.component";


const modules = [
    { id: 1, name: 'Module 1', description: 'What is Sexual & Reproductive Health?', image: img },
    { id: 2, name: 'Module 2', description: 'Navigating Relationships', image: img },
    { id: 3, name: 'Module 3', description: 'Consent & Boundaries', image: img },
    { id: 4, name: 'Module 4', description: 'Anti-Racism & Anti-Oppression in SRH', image: img },
    { id: 5, name: 'Module 5', description: 'LGBTQ2S & Queer Communities', image: img },
    { id: 6, name: 'Module 6', description: 'Creating Safe Spaces', image: img },


];


//TODO: make the sidebar dissapper when the window gets small / make a hamburger menu??
//todo: figure out how to make pdf load faster
//todo: add a fun load css when pdf is loading 
//todo: implement a download option for the pdf 
//todo: change the style for the pdfview buttons

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
                    <PdfDisplay />

                </MainContent>
               

            </LessonPageContainer>
           


        </div>
    );
}
export default LessonsHome; 