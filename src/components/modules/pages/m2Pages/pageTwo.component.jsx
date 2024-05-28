import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        TitlePage, 
        Title, 
        SubTitle, 
        SubSubTitle,
        SubSubSubTitle, 
        BlueBox} from '../pages.styles';
import '../pages.css';
import styled from "styled-components";

export const M2PageTwo = () => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>REPEATING CYCLES OF TRAUMA</SubSubTitle>
                <SubSubSubTitle>Repetition Compulsion</SubSubSubTitle>
                <p>Repetition compulsion, in relationships, can look like pursuing the same traits in different people to 
                    fix our own behaviours in relationships.</p>
                <p>Repetition compulsion has two components. The first is the reliving of past emotions, beliefs, and 
                    sensory experiences that have not been fully processed or integrated and the second is the repetitive 
                    use of defence mechanisms to keep the fear and trauma at bay (Levy, 2000). The compulsion to repeat is 
                    a psychological phenomenon that can occur in individuals who have experienced traumatic events or been 
                    exposed to chronic stress. It is also considered a manifestation of post-traumatic stress disorder 
                    (PTSD) and is characterized by a desire to repeatedly engage in behaviours or activities that serve as 
                    a coping mechanism or provide a sense of control or safety (Levy, 2000). </p>
                <p>The compulsion to repeat can be understood as having both an intrusion dimension and an avoidance 
                    dimension (Levy, 2000). The intrusion dimension refers to the experience of traumatic events again and 
                    again through intrusive thoughts, memories, or flashbacks. The avoidance dimension refers to the efforts 
                    that are made by the individual to avoid reminders of the traumatic event. This may include avoiding 
                    certain memories, people, locations, etc.</p>
                <p>It should be noted that this is a mechanism of repeating trauma and often people do not have a choice nor 
                    want to be a part of this cycle. This is why we would like to emphasize that it is important to be 
                    sensitive and understanding toward other people's needs and circumstances.</p>
            </Content>
        </Fragment>
    );
};