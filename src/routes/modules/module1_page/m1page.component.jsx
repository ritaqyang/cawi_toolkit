import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import {ModulePage, ModuleContent} from '../../../components/modules/modules.styles';
import ModuleNav from '../../../components/modules/moduleNav/moduleNav.component';
import {PageOne} from '../../../components/modules/pages/m1Pages/pageOne.component';
import {PageTwo} from '../../../components/modules/pages/m1Pages/pageTwo.component';
import {PageThree} from '../../../components/modules/pages/m1Pages/pageThree.component';
import {PageFour} from '../../../components/modules/pages/m1Pages/pageFour.component';
import {PageFive} from '../../../components/modules/pages/m1Pages/pageFive.component';
import {PageSix} from '../../../components/modules/pages/m1Pages/pageSix.component';
import {PageSeven} from '../../../components/modules/pages/m1Pages/pageSeven.component';
import {PageEight} from '../../../components/modules/pages/m1Pages/pageEight.component';
import {PageNine} from '../../../components/modules/pages/m1Pages/pageNine.component';

const navElements = [
    { label: "1. WHAT IS SEXUAL & REPRODUCTIVE HEALTH?", option: "1" },
    { label: "2. HEALTH EQUITY", option: "2" },
    { label: "3. SOCIAL DETERMINANTS OF HEALTHCARE", option: "3" },
    { label: "4. PUBERTY", option: "4" },
    { label: "5. REPRODUCTIVE HEALTH SYSTEMS", option: "5" },
    { label: "6. FEMALE GENTIAL MUTILATION", option: "6" },
    { label: "7. HIV, STI'S AND SAFE SEX", option: "7" },
    { label: "8. PERIODS AND PERIOD PAIN (MENSTRUAL CARE)", option: "8" },
    { label: "9. PREGNANCY", option: "9" },
];

export const Module1Page = () => {

    const contentRef = useRef(null);

    const [displayOption, setDisplayOption] = useState("1");
    const [activeOption, setActiveOption] = useState("1");
    const [progress, setProgress] = useState(0);
    const [completedPages, setCompletedPages] = useState({});

    const handleDisplayOptionChange = (option) => {
        setDisplayOption(option);
        setActiveOption(option);
    };

    const handleScroll = () => {
        const winScroll = contentRef.current.scrollTop;
        const height = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setProgress(scrolled);
    };

    const handleCompleteToggle = (option) => {
        setCompletedPages(prevState => ({
            ...prevState,
            [option]: !prevState[option]
        }));
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
            contentRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [displayOption]);

    return (
        <ModulePage>
            <ModuleNav
                navElements={navElements} 
                activeOption={activeOption} 
                handleDisplayOptionChange={handleDisplayOptionChange} 
                contentRef={contentRef}
                progress={progress}
                completedPages={completedPages}
            />
            <ModuleContent ref={contentRef}>
                {displayOption === "1" && <PageOne onCompleteToggle={() => handleCompleteToggle("1")} checked={completedPages["1"]} />}
                {displayOption === "2" && <PageTwo onCompleteToggle={() => handleCompleteToggle("2")} checked={completedPages["2"]}/>}
                {displayOption === "3" && <PageThree onCompleteToggle={() => handleCompleteToggle("3")} checked={completedPages["3"]}/>}
                {displayOption === "4" && <PageFour onCompleteToggle={() => handleCompleteToggle("4")} checked={completedPages["4"]}/>}
                {displayOption === "5" && <PageFive onCompleteToggle={() => handleCompleteToggle("5")} checked={completedPages["5"]}/>}
                {displayOption === "6" && <PageSix onCompleteToggle={() => handleCompleteToggle("6")} checked={completedPages["6"]}/>}
                {displayOption === "7" && <PageSeven onCompleteToggle={() => handleCompleteToggle("7")} checked={completedPages["7"]}/>}
                {displayOption === "8" && <PageEight onCompleteToggle={() => handleCompleteToggle("8")} checked={completedPages["8"]}/>}
                {displayOption === "9" && <PageNine onCompleteToggle={() => handleCompleteToggle("9")} checked={completedPages["9"]}/>}
            </ModuleContent>
        </ModulePage>        
    );

};
export default Module1Page; 


