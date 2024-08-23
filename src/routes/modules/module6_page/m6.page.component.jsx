import React, { useEffect, useRef, useState } from "react";
import {ModulePage, ModuleContent} from '../../../components/modules/modules.styles';
import ModuleNav from '../../../components/modules/moduleNav/moduleNav.component';
/*import { M4PageOne } from '../../../components/modules/pages/m4Pages/pageOne.component';
import { M4PageTwo } from '../../../components/modules/pages/m4Pages/pageTwo.component';
import { M4PageThree } from '../../../components/modules/pages/m4Pages/pageThree.component';*/

const navElements = [
    { label: "1. STIGMA", option: "1" },
    { label: "2. FAMILY SUPPORT", option: "2" },
    { label: "3. ANONYMITY", option: "3" },
    { label: "4. INCLUSIVE PRACTICES", option: "4" },
    { label: "5. ACCESSIBLE SPACES", option: "5" },
    
  ];

export const Module6Page = () => {

    const [displayOption, setDisplayOption] = useState("1");
    const [activeOption, setActiveOption] = useState("1");
    const [progress, setProgress] = useState(0);
    const [completedPages, setCompletedPages] = useState({});

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
        <div>
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
                {/*{displayOption === "1" && <M6PageOne onCompleteToggle={() => handleCompleteToggle("1")} checked={completedPages["1"]} />}
                {displayOption === "2" && <M6PageTwo onCompleteToggle={() => handleCompleteToggle("2")} checked={completedPages["2"]} />}
                {displayOption === "3" && <M6PageThree onCompleteToggle={() => handleCompleteToggle("3")} checked={completedPages["3"]} />}
                {displayOption === "4" && <M6PageThree onCompleteToggle={() => handleCompleteToggle("4")} checked={completedPages["4"]} />}
                {displayOption === "5" && <M6PageThree onCompleteToggle={() => handleCompleteToggle("5")} checked={completedPages["5"]} />}*/}            
            </ModuleContent>
            </ModulePage>   
        </div>
    );
}