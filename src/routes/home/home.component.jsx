
import React, {useRef, useLayoutEffect, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/homepage.png';
import './home.styles.css';
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
  justify-content: flex-start;
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
  margin-top: 10%;
  height: 10%;
  opacity: 0;
  display: none;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: hidden;
  background-color: white;
  border: 2px solid #CEB180;
  border-radius: 25px 25px 25px 25px;
`

const HomeNav = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: white;
  border: 2px solid #CEB180;
  border-radius: 25px 25px 25px 25px;
`

const Filler = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: hidden;
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
  padding: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const HomeSubTitle = styled.section`
  font-size: 2rem;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;


const Home = () => {

    const heroRef = useRef(null);
    const heroContentRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroSubTitleRef = useRef(null);
    const homeContentRef = useRef(null);
    const homeNavElRef1 = useRef(null);
    const homeNavElRef2 = useRef(null);
    const homeNavElRef3 = useRef(null);
    const homeNavElRef4 = useRef(null);
    const homeNavElRef5 = useRef(null);


    useLayoutEffect(() => {
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

        const homeContentAnimIn = () => {
          gsap.to(homeContentRef.current, {
            duration: 1,
            display: 'flex',
            opacity: 1,
            delay: 8.5
          })
        }

        homeContentAnimIn();
        heroTitleAnimIn();
        heroSubTitleAnimIn();

    }, []);

    return (

        <Fragment>

          <Hero ref={heroRef}>
            <HeroText ref={heroTitleRef}></HeroText>
            <HeroSubText ref={heroSubTitleRef}></HeroSubText>
          </Hero>
          <Filler>
          <HomeContent ref={homeContentRef}>
            
          </HomeContent>
          </Filler>
        </Fragment>

        
        /*<PageContainer>
            

        <HomeSubTitle>UNDERSTANDING SEXUAL & REPRODUCTIVE HEALTH THROUGH AN ANTI-OPPRESSIVE LENS</HomeSubTitle>
            <Text>The current curriculum and toolkit aim to address various topics of sexual and reproductive health (SRH) 
              through the use of an anti-oppressive lens. This package will aim to recognize and dig deeper into the power 
              and privilege of working with immigrant communities and how one can be an effective advocate and educator for 
              them. Various topics of SRH education are often pursued using a white-feminist, cis-gender, and ableist lens 
              without giving any particular attention to the intersectional identities of participants and students who may 
              also be immigrants, refugees, asylum-seekers, or migrants. Through the use of inclusive language, diversity of 
              content, and lived experiences, this package aims to raise awareness on the issues that immigrant communities, 
              particularly women, girls and other gender-diverse folks face, and educate the younger generations on topics of 
              SRH that are often overlooked in the immigrant community.</Text>
            <Text>This resource is intended to support teachers, facilitators, and community organizers particularly serving 
              immigrant communities, however, the content can be utilized to serve educators who may be providing service to 
              non-immigrant communities or broader youth populations. We would also like to acknowledge the intersectionality 
              in SRH which refers to the ways in which an individual's various identities, such as race, gender, sexuality, 
              socioeconomic status, and ability, interact and impact their experiences and access to healthcare related to 
              sexuality and reproduction. Recognizing the intersectionality of these identities is important in order to provide 
              inclusive and equitable health care that addresses the unique needs and challenges faced by individuals from 
              marginalized communities. It is important to understand how these different factors interact with one another and 
              can exacerbate health disparities.</Text>
            <Text>This resource will use language recommendations from Khan et al., 2022 to create a sense of safety for underserved 
              communities such as immigrant women, girls, and gender-diverse folks who are often not given the privilege of attaining 
              culturally appropriate education. </Text>

              <HomeSubTitle>WHAT IS IN THE CURRICULUM & TOOLKIT?</HomeSubTitle>
              <Text>The curriculum intends to bring sexual health education to immigrant women, girls, and gender-diverse folks by 
                making SRH knowledge accessible. Additionally, we aim to increase confidence and self-efficacy in our participants in 
                the hopes that they are better able to advocate for their own sexual and reproductive health needs. Through our efforts, 
                our team also hopes to normalize conversations surrounding SRH in immigrant communities where it is highly stigmatized. 
                The goals and vision of the curriculum include (1) addressing the SRH needs of different demographics by using clear 
                terminology and avoiding jargon , (2) ensuring the curriculum is culturally sensitive and uses culturally responsive 
                language, including the importance of self-designated pronouns, (3) offering unbiased and evidence-based information 
                while acknowledging that everyone has unique circumstances and preferences, and (4) emphasizes that any information 
                that is shared or conversations that take place remain confidential in order for people to feel more comfortable 
                discussing sexual and reproductive health needs. Learning about the needs of immigrant populations may lead to higher 
                sexual health education and knowledge within these communities, which may contribute to increased feelings of 
                empowerment and bodily autonomy within immigrant populations. </Text>
              <Text>This curriculum hopes to help people understand the intersections of SRH with gender, race/ethnicity, and sexual 
                identities while challenging ethnocultural and sexual inequities in ways that would help people assert their rights 
                in areas encompassed by SRH. Our team also plans on assessing validity and reliability of information presented in 
                the curriculum, to ensure information is updated periodically. </Text>
              <Text>According to the Canadian Guidelines for Sexual Health Education, effective sexual health education should be 
                provided in an age-appropriate, culturally sensitive manner that is respectful of individual choice and that: </Text>
              <Text>
              <ol>
                <li>
                  Does not discriminate on the basis of race, ethnicity, gender, sexual orientation, religious background, or 
                    disability in terms of access to relevant information;
                </li>
                <li>
                  Focuses on self-worth, respect, and dignity of the individual;
                </li>
                <li>
                  Integrates the positive, life-enhancing and rewarding aspects of human sexuality while also seeking to prevent 
                    and reduce negative sexual health outcomes;
                </li>
                <li>
                  Incorporates a lifespan approach that provides information, motivational support and skill-building opportunities
                     that are relevant to individuals at different ages, abilities and stages in their lives.
                </li>
                <li>
                  Provides accurate information to reduce discrimination based on race, ethnicity, gender, sexual orientation, 
                    religious background and disability;
                </li>
                <li>
                  Encourages critical thinking about gender role stereotyping, while recognizing the importance of gender-related 
                    issues in society, the increasing variety of choices available to individuals and the need for better understanding 
                    and communication to bring about positive social change;
                </li>
                <li>
                  Recognizes and responds to the specific sexual health education needs of particular groups such as adults, 
                    seniors, people who are physically or developmentally disabled, children and adults who have experienced sexual 
                    abuse and marginalized populations such as Aboriginal people, immigrants, gay, lesbian, bisexual and transgendered 
                    people as well as youth and street youth (Health Canada, 2003, p. 8).
                </li>
              </ol>
              </Text>
              <Text>Sources: <a href="https://www.sieccan.org/pdf/guidelines-eng.pdf">Canadian Guidelines for Sexual Health Education </a></Text>

              <HomeSubTitle>FOR FACILITATORS, TEACHERS, AND EDUCATORS</HomeSubTitle>

              <HomeSubTitle>CULTURAL ADAPTATIONS TO SRH EDUCATION</HomeSubTitle>

              <HomeSubTitle>INCLUSIVE AND ACCESSIBLE LANGUAGE GUIDE</HomeSubTitle>
        
           
            <img src={img} alt="Description of the image" /> 
            
        </PageContainer>*/
    );
  
}

export default Home; 