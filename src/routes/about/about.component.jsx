import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
    AboutTitle,
    AboutWrapper,
    AboutContent,
} from './about.styles';
import backgroundImage from '../../assets/about-bg.png';
import gsap from 'gsap';

function About(){

    const container = document.querySelector('AboutWrapper');
    const sections = gsap.utils.toArray('.wrapper section');
    const texts = gsap.utils.toArray('.anim');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length -1),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          scrub: 1,
          end: "+=6000",
        }
      })  

    return (
        <AboutWrapper>
            <div style={{
                backgroundImage:`url(${backgroundImage})`,
                backgroundSize: '50%',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                width: '200%',
                height: '50vh',
                bottom: '0',
            }}>
            </div>
            <section>
                <AboutTitle>ABOUT US</AboutTitle>
                <AboutContent>
                    The Canadian Advisory of Women Immigrants (CAWI) is a community organization with the 
                    mission to empower immigrant women and girls across Canada. In 2021, the Sexual & Reproductive Health 
                    (SRH) Campaign team at CAWI received a small fund from the Regina Public Interest Research Group to 
                    conduct a community-based research project on the experiences of immigrant women and girls with the 
                    Canadian SRH curriculums. The team hoped to use the findings of the study to develop a curriculum and 
                    creative community-based solutions for SRH education. In 2022, the team received another grant from Oxfam 
                    Canada in partnership with Government of Canada to further continue their work on the campaign and create 
                    a toolkit, develop workshops, and host an event on the work of the SRH team. 

                    To learn more about the work CAWI does and the work of the SRH team at CAWI, please visit us at 
                    www.cawicanada.com or at our social media channels.
                </AboutContent>
            </section>
        </AboutWrapper>
    ); 
}

export default About; 