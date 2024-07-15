import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import {ModulePage, ModuleContent} from '../../../components/modules/modules.styles';
import ModuleNav from '../../../components/modules/moduleNav/moduleNav.component';
import {M2PageOne} from '../../../components/modules/pages/m2Pages/pageOne.component';
import {M2PageTwo} from '../../../components/modules/pages/m2Pages/pageTwo.component';
import {M2PageThree} from '../../../components/modules/pages/m2Pages/pageThree.component';
import {M2PageFour} from '../../../components/modules/pages/m2Pages/pageFour.component';

const navElements = [
    { label: "1. ASPECTS OF A HEALTHY RELATIONSHIP", option: "1" },
    { label: "2. REPEATING CYCLES OF TRAUMA", option: "2" },
    { label: "3. UNDERSTANDING WHAT WORKS BEST FOR YOU IN RELATIONSHIPS", option: "3" },
    { label: "4. STRAINS THAT IMMIGRATION HAS ON RELATIONSHIPS", option: "4" },
];

export const Module2Page = () => {

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
                {displayOption === "1" && <M2PageOne />}
                {displayOption === "2" && <M2PageTwo />}
                {displayOption === "3" && <M2PageThree />}
                {displayOption === "4" && <M2PageFour />}
            </ModuleContent>
        </ModulePage>        
    );

};