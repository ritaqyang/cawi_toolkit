import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content,  
    SubSubTitle,
    SubSubSubTitle} from '../pages.styles';
import '../pages.css';

export const PageTwo = () => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>HEALTH EQUITY</SubSubTitle>
                    <p>Healthy inequity within SRH recognizes systems that ensure that all persons, regardless of 
                        age, gender, sex, race, immigrant or refugee identities as well as disabilities. Government 
                        policy, healthcare systems, and other structures must value and support everyone fairly and 
                        justly. Even though there is responsibility placed on the government to do the work that I 
                        briefly mentioned, there are things that we can do in our day-to-day lives, as well as in our 
                        careers or academic spaces that promote health equity in SRH settings (<a href="https://www.npwomenshealthcare.com/what-is-sexual-and-reproductive-health-equity-and-why-does-it-matter-for-nurse-practitioners/#:~:text=Sexual%20and%20reproductive%20health%20equity%20means%20that%20systems%20ensure%20that,and%20achieving%20their%20reproductive%20goals">Nurse Practitioners in 
                        Women's Health</a>). </p>
                    <SubSubSubTitle>What can we do?</SubSubSubTitle>
                    <ul>
                        <li><p>Acknowledge histories of injustice</p></li>
                        <li><p>Engage in individual and institutional self-reflection</p></li>
                        <li><p>Interrogate and reform research practices</p></li>
                        <li><p>Develop and implement equitable policy solutions</p></li>
                        <li><p>Redefine clinical practice</p></li>
                    </ul>
            </Content>
        </Fragment>
    );
};