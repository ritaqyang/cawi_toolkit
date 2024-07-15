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

    const [displayOption, setDisplayOption] = useState("1");
    const [activeOption, setActiveOption] = useState("1");
    const [progress, setProgress] = useState(0);

    const handleDisplayOptionChange = (option) => {
        setDisplayOption(option);
        setActiveOption(option);
    };

    const contentRef = useRef(null);

    const handleScroll = () => {
        const winScroll = contentRef.current.scrollTop;
        const height = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setProgress(scrolled);
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
            />
            <ModuleContent ref={contentRef}>
                {displayOption === "1" && <PageOne />}
                {displayOption === "2" && <PageTwo />}
                {displayOption === "3" && <PageThree />}
                {displayOption === "4" && <PageFour />}
                {displayOption === "5" && <PageFive />}
                {displayOption === "6" && <PageSix />}
                {displayOption === "7" && <PageSeven />}
                {displayOption === "8" && <PageEight />}
                {displayOption === "9" && <PageNine />}
            </ModuleContent>
        </ModulePage>        
    );

};
export default Module1Page; 


