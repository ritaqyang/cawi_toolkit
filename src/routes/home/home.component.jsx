
import React, {useRef, useLayoutEffect, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import img from '../../assets/homepage.png';
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);


const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;

const Hero = styled.div`
  width: 100%;
  height: 80vh;
  bottom: 0;
  //background-color: white;
  display: flex;
  position: fixed;
  /*align-items: center;*/
  flex-direction: column;
  justify-content: center;
  z-index: -3;
`;

const HeroText =styled.div`
  font-size: 4em; 
  margin-top: 0.67em; 
  margin-bottom: 0.67em; 
  margin-left: 5rem; 
  margin-right: 5rem;
  @media (max-width: 950px) {
    font-size: 2em;
  }
`;

const HeroSubText = styled.div`
  font-size: 2em; 
  color: grey;
  margin-top: 0.83em; 
  margin-bottom: 0.83em; 
  margin-left: 5rem; 
  margin-right: 5rem;
  @media (max-width: 950px) {
    font-size: 1em;
  }
`;

const HomeContent = styled.div`
  width: 90%;
  margin: 5%;
  height: 70vh;
  background-color: white;
  border: 2px solid #CEB180;
  border-radius: 25px 25px 25px 25px;
`

const Filler = styled.div`
  width: 100%;
  height: 80vh;
`

const Understanding = styled.div`
`;

const Curriculum = styled.div`
`;

const ForFacil = styled.div`
`;

const CulturalAdaptations = styled.div`
`;

const Language = styled.div`
`;

const Content = styled.div`
  flex: 1;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;


const Home = () => {

    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroSubTitleRef = useRef(null);


    /*useLayoutEffect(() => {
        const heroTitleAnimIn = () => {
            gsap.to(heroTitleRef.current, {
                duration: 4,
                text: {
                    value: "WELCOME TO THE SEXUAL AND REPRODUCTIVE HEALTH LEARNING TOOLKIT",
                    delimiter: ""
                },
                delay: 0.5,
            });
        }

        const heroSubTitleAnimIn = () => {
          gsap.to(heroSubTitleRef.current, {
              duration: 4,
              text: {
                  value: "FROM THE CANADIAN ADVISORY OF WOMEN IMMIGRANTS (CAWI)",
                  delimiter: ""
              },
              delay: 4.5,
          });
      }

        heroTitleAnimIn();
        heroSubTitleAnimIn();

    }, []);*/

    return (

        <Fragment>
          <Hero ref={heroRef}>
            <HeroText ref={heroTitleRef}>WELCOME TO THE SEXUAL AND REPRODUCTIVE HEALTH LEARNING TOOLKIT</HeroText>
            <HeroSubText ref={heroSubTitleRef}>FROM THE CANADIAN ADVISORY OF WOMEN IMMIGRANTS (CAWI)</HeroSubText>
          </Hero>

          <Filler />

          <HomeContent></HomeContent>

        </Fragment>

        
        /*<PageContainer>
            
        
           
            <img src={img} alt="Description of the image" /> 
            
        </PageContainer>*/
    );
  
}
export default Home; 