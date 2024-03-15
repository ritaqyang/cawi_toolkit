import React, { useEffect, useRef } from "react";
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import backgroundImage from '../../assets/about-bg.png';
import gsap from 'gsap';
import './about.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About(){ 
    const pageOneRef = useRef(null);
    const pageTwoRef = useRef(null);
    const pageThreeRef = useRef(null);
    const pageFourRef = useRef(null);

    useEffect(() => {
        const pageOne = pageOneRef.current;
        const pageTwo = pageTwoRef.current;
        const pageThree = pageThreeRef.current;
        const pageFour = pageFourRef.current;

        if(pageTwo && pageThree) {
            gsap.to(pageTwo, {
                scrollTrigger: {
                    trigger: pageTwo,
                    start: "top top",
                    endTrigger: pageThree,
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                }
            });
        }
        if(pageThree && pageFour) {
            gsap.to(pageThree, {
                scrollTrigger: {
                    trigger: pageThree,
                    start: "top top",
                    endTrigger: pageFour,
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                }
            });
        }

    }, []);

    return (
        <div className="content">
            <div className="wrapper">
                <section className="ab-title">
                    <h1>ABOUT US</h1>
                </section>
                <section ref={pageTwoRef} className="about">
                    <p className="ab-text">The Canadian Advisory of Women Immigrants (CAWI) is a community organization with the 
                    mission to empower immigrant women and girls across Canada. In 2021, the Sexual & Reproductive Health 
                    (SRH) Campaign team at CAWI received a small fund from the Regina Public Interest Research Group to 
                    conduct a community-based research project on the experiences of immigrant women and girls with the 
                    Canadian SRH curriculums. The team hoped to use the findings of the study to develop a curriculum and 
                    creative community-based solutions for SRH education. In 2022, the team received another grant from Oxfam 
                    Canada in partnership with Government of Canada to further continue their work on the campaign and create 
                    a toolkit, develop workshops, and host an event on the work of the SRH team. 

                    To learn more about the work CAWI does and the work of the SRH team at CAWI, please visit us at 
                    www.cawicanada.com or at our social media channels.</p>
                </section>
                <section ref={pageThreeRef} className="ack">
                    <p className="ab-text">This toolkit and curriculum has been funded by Oxfam Canada (in partnership with the Government of Canada) 
                    and the Regina Public Interest Research Group. We are grateful for their generosity and support through 
                    various stages of the current project. We would also like to thank all the organizations and community 
                    members who participated in community consultations for the toolkit, including Alisa Tukkimäki from the 
                    End FGM Canada Network. We would also like to acknowledge that all of the graphics used in this toolkit/curriculum 
                    are from www.canva.com.

                    We would like to acknowledge and thank the volunteers at the Canadian Advisory of Women Immigrants (CAWI), 
                    who have dedicated their time and energy to this toolkit and curriculum. To learn who has contributed, 
                    please refer to the list below containing names of volunteers from CAWI.</p>
                </section>
                <section ref={pageFourRef} className="authors">
                    <p className="ab-text">
                        Rehma Khan (she/her)
                        Curriculum Developer
                    </p>
                    <p className="ab-text">
                        Hani Rukh-E-Qamar (she/her)
                        Executive Director
                    </p>
                    <p className="ab-text">
                        Ana Maria Dumitrache (they/them)
                        Senior Project Lead
                    </p>
                    <p className="ab-text">
                        Isabella Kakish (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Crystal Yang (she/her)
                        Outreach Manager
                    </p>
                    <p className="ab-text">
                        Naomi Phung (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Yasemin Erdogan (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Roma Ranade (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Marianne Djigo (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Harini Aiyer (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Zara Ahmed (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Cassandra De Freitas (she/her)
                        Research Assistant
                    </p>
                    <p className="ab-text">
                        Karishma Joshi (she/her)
                        Graphic Designer
                    </p>
                </section>
            </div>
        </div>
        
    ); 
}

export default About; 