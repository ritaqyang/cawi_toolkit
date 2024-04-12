import React, { useEffect, useRef, Fragment, useLayoutEffect } from "react";
import { Outlet, Link } from 'react-router-dom';
import backgroundImage from '../../assets/about-bg.png';
import './about.css';
import {SubTitle} from '../../components/modules/m1/pages/pages.styles';
import styled from "styled-components";
import '../../components/modules/m1/pages/pages.css';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const AboutHero = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    transition: opacity 0.5s ease;
`;

export const AboutHeroText = styled.section`
    font-size: 3rem;
`;

export const AboutPage = styled.section`
   height: 100vh;
   width: 100vw;
   display: flex;
   /*justify-content: space-evenly;*/
   flex-wrap: wrap;
`;

export const AboutContent = styled.section`
    height: fit-content;
    margin-top: 4rem;
    margin-right: 45vw;
    margin-left: 5vw;
    padding: 2rem;
    width: 50vw;
    z-index: 3;
    @media (max-width: 950px) {
        display: none;
    }
`;

export const AboutContentMobile = styled.section `
    display: none;
    @media (max-width: 950px) {
        display: inline;
        height: fit-content;
        margin-top: 5rem;
        margin-right: 5vw;
        margin-left: 5vw;
        padding: 2rem;
        width: 90vw;
    }
`;

export const AckContent = styled.section`
    height: fit-content;
    margin-top: 4rem;
    margin-right: 5vw;
    margin-left: 45vw;
    padding: 2rem;
    width: 50vw;
    opacity: 0;
`;

export const AuthorsContent = styled.section`
    height: fit-content;
    margin-top: 4rem;
    margin-right: 45vw;
    margin-left: 5vw;
    padding: 2rem;
    width: 50vw;
    opacity: 0;
`;

export const PageContainer = styled.section`
    opacity: 0;
    transition: opacity 0.5s ease;
`;

export const AboutText = styled.section`
    padding: 2rem;
    border: 2px solid #ede2ce;
    border-radius: 25px 25px 25px 25px;
    
`;

export const AckText = styled.section`
    padding: 2rem;
    border: 2px solid #ede2ce;
    border-radius: 25px 25px 25px 25px;
   
`;

export const AuthorText = styled.section`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border: 2px solid #ede2ce;
    border-radius: 25px 25px 25px 25px;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const AuthorTextLeft = styled.section`
    padding-right: 1rem;
`;

export const AuthorTextRight = styled.section`
    padding-left: 2rem;
`;

const About = () => {

    const pageRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                //entry.target.style.opacity = entry.intersectionRatio;
                /*gsap.to(entry.target, {
                    opacity: entry.intersectionRatio,
                    duration: 0.5,
                })*/
                console.log(entry.intersectionRatio)
                if (entry.intersectionRatio > 0) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        duration: 0.5,
                    })
                    //entry.target.style.opacity = "1"; // When entering viewport, set opacity to 1 (fade in)
                } else {
                    gsap.to(entry.target, {
                        opacity: 0,
                        duration: 0.5,
                    })
                    //entry.target.style.opacity = "0"; // When leaving viewport, set opacity to 0 (fade out)
                }
            });
        });

        pageRef.current.forEach(page => {
            observer.observe(page);
        });

        return () => {
            pageRef.current.forEach(page => {
                observer.unobserve(page);
            });
        };
    }, []);
    
    return (
        <Fragment>
       
        <AboutPage>
            <AboutContent>
            <PageContainer ref={el => (pageRef.current[0] = el)}>
            <SubTitle>ABOUT US</SubTitle>
                <AboutText>
                <p>The Canadian Advisory of Women Immigrants (CAWI) is a community organization with the 
                    mission to empower immigrant women and girls across Canada. In 2021, the Sexual & Reproductive Health 
                    (SRH) Campaign team at CAWI received a small fund from the Regina Public Interest Research Group to 
                    conduct a community-based research project on the experiences of immigrant women and girls with the 
                    Canadian SRH curriculums. The team hoped to use the findings of the study to develop a curriculum and 
                    creative community-based solutions for SRH education. In 2022, the team received another grant from Oxfam 
                    Canada in partnership with Government of Canada to further continue their work on the campaign and create 
                    a toolkit, develop workshops, and host an event on the work of the SRH team.</p> 
                <p>    
                    To learn more about the work CAWI does and the work of the SRH team at CAWI, please visit us at 
                    www.cawicanada.com or at our social media channels.</p>
                <p>
                    For more information and questions, please contact our general email admin@cawicanada.com </p>
                </AboutText>
            </PageContainer>
            </AboutContent>

            <AboutContentMobile>
            <SubTitle>ABOUT US</SubTitle>
                <AboutText>
                <p>The Canadian Advisory of Women Immigrants (CAWI) is a community organization with the 
                    mission to empower immigrant women and girls across Canada. In 2021, the Sexual & Reproductive Health 
                    (SRH) Campaign team at CAWI received a small fund from the Regina Public Interest Research Group to 
                    conduct a community-based research project on the experiences of immigrant women and girls with the 
                    Canadian SRH curriculums. The team hoped to use the findings of the study to develop a curriculum and 
                    creative community-based solutions for SRH education. In 2022, the team received another grant from Oxfam 
                    Canada in partnership with Government of Canada to further continue their work on the campaign and create 
                    a toolkit, develop workshops, and host an event on the work of the SRH team. 

                    To learn more about the work CAWI does and the work of the SRH team at CAWI, please visit us at 
                    www.cawicanada.com or at our social media channels.</p>
                </AboutText>
            </AboutContentMobile>

            <AboutContent>
            <PageContainer ref={el => (pageRef.current[1] = el)}>
            <SubTitle>ACKNOWLEDGEMENTS</SubTitle>
                <AckText>
                <p>This toolkit and curriculum has been funded by Oxfam Canada (in partnership with the Government of Canada) 
                    and the Regina Public Interest Research Group. We are grateful for their generosity and support through 
                    various stages of the current project. We would also like to thank all the organizations and community 
                    members who participated in community consultations for the toolkit, including Alisa Tukkimäki from the 
                    End FGM Canada Network. We would also like to acknowledge that all of the graphics used in this toolkit/curriculum 
                    are from www.canva.com.</p>
                <p>
                    We would like to acknowledge and thank the volunteers at the Canadian Advisory of Women Immigrants (CAWI), 
                    who have dedicated their time and energy to this toolkit and curriculum. To learn who has contributed, 
                    please refer to the list below containing names of volunteers from CAWI.</p>
                </AckText>
            </PageContainer>
            </AboutContent>

            <AboutContentMobile>
            <SubTitle>ACKNOWLEDGEMENTS</SubTitle>
                <AckText>
                <p>This toolkit and curriculum has been funded by Oxfam Canada (in partnership with the Government of Canada) 
                    and the Regina Public Interest Research Group. We are grateful for their generosity and support through 
                    various stages of the current project. We would also like to thank all the organizations and community 
                    members who participated in community consultations for the toolkit, including Alisa Tukkimäki from the 
                    End FGM Canada Network. We would also like to acknowledge that all of the graphics used in this toolkit/curriculum 
                    are from www.canva.com.

                    We would like to acknowledge and thank the volunteers at the Canadian Advisory of Women Immigrants (CAWI), 
                    who have dedicated their time and energy to this toolkit and curriculum. To learn who has contributed, 
                    please refer to the list below containing names of volunteers from CAWI.</p>
                </AckText>
            </AboutContentMobile>

            <AboutContent>
            <PageContainer ref={el => (pageRef.current[2] = el)}>
            <SubTitle>AUTHORS</SubTitle>
            <AuthorText>
                <AuthorTextLeft>
                    <p>Rehma Khan (she/her)<br></br><b>Curriculum Developer</b></p>
                    <p> Hani Rukh-E-Qamar (she/her)<br></br><b>Executive Director</b></p>
                    <p>Ana Maria Dumitrache (they/them)<br></br><b>Senior Project Lead</b></p>
                    <p>Isabella Kakish (she/her)<br></br><b>Research Assistant</b></p>
                    <p> Crystal Yang (she/her)<br></br><b>Outreach Manager</b></p>
                    <p>Naomi Phung (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Yasemin Erdogan (she/her)<br></br><b>Research Assistant</b> </p>
                </AuthorTextLeft>
                <AuthorTextRight>
                    <p>Roma Ranade (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Marianne Djigo (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Harini Aiyer (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Zara Ahmed (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Cassandra De Freitas (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Karishma Joshi (she/her)<br></br><b>Graphic Designer</b></p>
                </AuthorTextRight>
                </AuthorText>
            </PageContainer>
            </AboutContent>

            <AboutContentMobile>
            <SubTitle>AUTHORS</SubTitle>
            <AuthorText>
                    <p>Rehma Khan (she/her)<br></br><b>Curriculum Developer</b></p>
                    <p> Hani Rukh-E-Qamar (she/her)<br></br><b>Executive Director</b></p>
                    <p>Ana Maria Dumitrache (they/them)<br></br><b>Senior Project Lead</b></p>
                    <p>Isabella Kakish (she/her)<br></br><b>Research Assistant</b></p>
                    <p> Crystal Yang (she/her)<br></br><b>Outreach Manager</b></p>
                    <p>Naomi Phung (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Yasemin Erdogan (she/her)<br></br><b>Research Assistant</b> </p>
                    <p>Roma Ranade (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Marianne Djigo (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Harini Aiyer (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Zara Ahmed (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Cassandra De Freitas (she/her)<br></br><b>Research Assistant</b></p>
                    <p>Karishma Joshi (she/her)<br></br><b>Graphic Designer</b></p>
                </AuthorText>
            </AboutContentMobile>

        </AboutPage>
        </Fragment>
    ); 
}

export default About; 