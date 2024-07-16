import React, { useEffect, useRef, useState } from "react";
import {ModulePage, ModuleContent} from '../../../components/modules/modules.styles';
import ModuleNav from '../../../components/modules/moduleNav/moduleNav.component';
import { M3PageOne } from '../../../components/modules/pages/m3Pages/pageOne.component';
import { M3PageTwo } from '../../../components/modules/pages/m3Pages/pageTwo.component';
import { M3PageThree } from '../../../components/modules/pages/m3Pages/pageThree.component';


const navElements = [
  { label: "1. WHAT IS CONSENT?", option: "1" },
  { label: "2. BOUNDARIES", option: "2" },
  { label: "3. SEXUAL COERCION", option: "3" },
  
];


//using this page to work on components for M2 
export const Module3Page = () => {

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
    <ModulePage>
      <ModuleNav
        navElements={navElements}
        activeOption={activeOption}
        handleDisplayOptionChange={handleDisplayOptionChange}
        contentRef={contentRef}
        progress={progress}
      />
      <ModuleContent ref={contentRef}>
        {displayOption === "1" && <M3PageOne onCompleteToggle={() => handleCompleteToggle("1")} checked={completedPages["1"]} />}
        {displayOption === "2" && <M3PageTwo onCompleteToggle={() => handleCompleteToggle("2")} checked={completedPages["2"]} />}
        {displayOption === "3" && <M3PageThree onCompleteToggle={() => handleCompleteToggle("3")} checked={completedPages["3"]} />}
       
      </ModuleContent>
    </ModulePage>
  );
}; 