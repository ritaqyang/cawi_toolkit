import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import {ModulePage, ModuleContent} from '../../../components/modules/modules.styles';
import ModuleNav from '../../../components/modules/m1/moduleNav/moduleNav.component';
import {PageOne} from '../../../components/modules/m1/pages/m1Pages/pageOne.component';
import {PageTwo} from '../../../components/modules/m1/pages/m1Pages/pageTwo.component';
import {PageThree} from '../../../components/modules/m1/pages/m1Pages/pageThree.component';
import {PageFour} from '../../../components/modules/m1/pages/m1Pages/pageFour.component';
import {PageFive} from '../../../components/modules/m1/pages/m1Pages/pageFive.component';
import {PageSix} from '../../../components/modules/m1/pages/m1Pages/pageSix.component';
import {PageSeven} from '../../../components/modules/m1/pages/m1Pages/pageSeven.component';
import {PageEight} from '../../../components/modules/m1/pages/m1Pages/pageEight.component';
import {PageNine} from '../../../components/modules/m1/pages/m1Pages/pageNine.component';

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

/*
<section className="m-nav" ref={navRef}>
<div className="hide-and-show">
                    <Link className="hide-link" ref={hideRef} onClick={handleNavHide} to="#">HIDE</Link>
                    <Link className="show-link" ref={showRef} onClick={handleNavShow} to="#">SHOW</Link>
                </div> 
<ul className="nav-elements" ref={navElRef}>
                    <ModuleNavElement isActive={activeOption === "1"} to="#" onClick={() => handleDisplayOptionChange("1")}>1. WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "2"} to="#" onClick={() => handleDisplayOptionChange("2")}>2. HEALTH EQUITY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "3"} to="#" onClick={() => handleDisplayOptionChange("3")}>3. SOCIAL DETERMINANTS OF HEALTHCARE</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "4"} to="#" onClick={() => handleDisplayOptionChange("4")}>4. PUBERTY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "5"} to="#" onClick={() => handleDisplayOptionChange("5")}>5. REPRODUCTIVE HEALTH SYSTEMS</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "6"} to="#" onClick={() => handleDisplayOptionChange("6")}>6. FEMALE GENTIAL MUTILATION</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "7"} to="#" onClick={() => handleDisplayOptionChange("7")}>7. HIV, STI'S AND SAFE SEX</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "8"} to="#" onClick={() => handleDisplayOptionChange("8")}>8. PERIODS AND PERIOD PAIN (MENSTRUAL CARE)</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "9"} to="#" onClick={() => handleDisplayOptionChange("9")}>9. PREGNANCY</ModuleNavElement>
                </ul> 
                </section>*/

const Module1Page = () => {

    const [displayOption, setDisplayOption] = useState("1");
    const [activeOption, setActiveOption] = useState("1");

    const handleDisplayOptionChange = (option) => {
        setDisplayOption(option);
        setActiveOption(option);
    };

    const contentRef = useRef(null);

    return (
        <ModulePage>
            <ModuleNav
                navElements={navElements} 
                activeOption={activeOption} 
                handleDisplayOptionChange={handleDisplayOptionChange} 
                contentRef={contentRef}
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


