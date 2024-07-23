import ProgressBar from "../../../components/course-progress/ProgressBar";
import React from "react";
import Checkbox from "../../../components/modules/checkbox.component";
import { Container } from "./m5.styles";
import { useSelector } from "react-redux";
import { selectSections } from "../../../store/user/user.selector";

export const Module5Page = () => {

    const sections = useSelector(selectSections)
    
    return (
        <>
        <Container>
            <h1>Module 5 Page</h1>
            {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2>Module {sectionIndex + 1}</h2>
          <ul>
            {section.map((value, valueIndex) => (
              <li key={valueIndex}>
                section {valueIndex + 1}: {value}
              </li>
            ))}
          </ul>
        </div>
      ))}

            <Checkbox sectionName='m1' index='p1' />
            <Checkbox sectionName='m1' index='p2' />
            <Checkbox sectionName='m2' index='p1' />
            <Checkbox sectionName='m2' index='p2' />
           

        </Container>
           

        </>
    );
}