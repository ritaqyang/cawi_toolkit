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

  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
    setActiveOption(option);
  };

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [displayOption]);

  return (
    <ModulePage>
      <ModuleNav
        navElements={navElements}
        activeOption={activeOption}
        handleDisplayOptionChange={handleDisplayOptionChange}
        contentRef={contentRef}
      />
      <ModuleContent ref={contentRef}>
        {displayOption === "1" && <M3PageOne />}
        {displayOption === "2" && <M3PageTwo />}
        {displayOption === "3" && <M3PageThree />}
       
      </ModuleContent>
    </ModulePage>
  );
}; 
export default Module3Page;