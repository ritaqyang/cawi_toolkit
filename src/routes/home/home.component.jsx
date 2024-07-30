
import React, {useRef, useLayoutEffect, useEffect, Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/homepage.png';
import './home.styles.css';
import { HomePageOne } from '../../components/home/home-pages/homePageOne.component';
import { HomePageTwo } from '../../components/home/home-pages/homePageTwo.component';
import { HomePageThree } from '../../components/home/home-pages/homePageThree.component';
import { HomePageFour } from '../../components/home/home-pages/homePageFour.component';
import { HomePageFive } from '../../components/home/home-pages/homePageFive.component';
import {gsap} from "gsap";
import { TextPlugin, MotionPathPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin);

const Hero = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  position: fixed;
  /*align-items: center;*/
  flex-direction: column;
  justify-content: center;
  z-index: -3;
  /*border: 2px solid yellow;*/
`;

const HeroTitleText =styled.div`
  font-size: 4em; 
  margin-top: 0.67em; 
  margin-bottom: 0.1675em; 
  margin-left: 5rem; 
  margin-right: 5rem;
  @media (max-width: 950px) {
    font-size: 2em;
  }
`;

const HeroSubText = styled.div`
  color: #CEB180;
  font-size: 4em; 
  margin-top: 0.1675em; 
  margin-bottom: 0.67em; 
  margin-left: 5rem; 
  margin-right: 5rem;
`;

const HeroSubSubText = styled.div`
  font-size: 2em; 
  /*color: gray;*/
  margin-top: 0; 
  margin-bottom: 0.83em; 
  margin-left: 5rem; 
  margin-right: 5rem;
  @media (max-width: 950px) {
    font-size: 1em;
  }
`;

const HeroSubSubSubText = styled.div`
  font-size: 2em;
  color: rgb(193, 193, 193);
  margin-top: 0; 
  margin-bottom: 0.83em; 
  margin-left: 5rem; 
  margin-right: 5rem;
`

const HomeContent = styled.div`
  width: 100%;
  height: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  z-index:-2;
  /*border: 2px solid green;*/
`

const HomeNavPage = styled.div`
  width: 95%;
  margin: 0;
  padding: 0;
  height: 85vh;
  top: 100;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: white;
  /*border: 2px solid black;
  border-radius: 25px 25px 0px 0px;*/
`

const HomeNav = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  /*border: 2px solid blue;*/
`;

const HomeNavContent = styled.div`
  padding: 2rem;
  padding-bottom: 5rem;
  height: 85vh;
  width: 100%;
  margin: 2rem;
  /*background-color: white;
  border-radius: 25px;
  border: 2px solid #CEB180;*/
  display: none;
  opacity: 0;
`;

const More = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Less = styled.div`
  width: fit-content;
  height: fit-content;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: 0;
  opacity: 0;
`;

const Home = () => {

    const heroSubSubSubTitleRef = useRef(null);
    const moreRef = useRef(null);
    const lessRef = useRef(null);
    const homeContentRef = useRef(null);
    const homeNavContentRef = useRef(null);
    const homeNavRef = useRef(null);
    const homeNavPageRef = useRef(null);
    const homeNavElRef1 = useRef(null);
    const homeNavElRef2 = useRef(null);
    const homeNavElRef3 = useRef(null);
    const homeNavElRef4 = useRef(null);
    const homeNavElRef5 = useRef(null);
    const closeRef = useRef(null);

    /*NOTE: look into useGSAP() for best cleanup practices*/
    useLayoutEffect(() => {
        /*const heroSubSubSubTitleAnimIn = () => {
            gsap.to(heroSubSubSubTitleRef.current, {
                duration: 2,
                text: {
                    value: "BY THE CANADIAN ASSOCIATION OF WOMEN IMMIGRANTS (CAWI)",
                    delimiter: ""
                },
                delay: 0.5,
            });
        }*/

        const homeNavAnim = () => {
            gsap.to(".h-hide-and-show", {
              motionPath: [{x:0, y:-25}, {x:0, y:0}, {x:0, y:-25}, {x:0, y:0}],
              transformOrigin: "50% 50%",
              duration: 1.5,
              delay: /*2.5*/0.5,
              ease: "none",
            });
        }

        /*heroSubSubSubTitleAnimIn();*/
        homeNavAnim();

    }, []);

    // 1

    const handleNavHover1 = () => {
      gsap.to(homeNavElRef1.current, {
        text: {
          value: "1: UNDERSTANDING SEXUAL & REPRODUCTIVE HEALTH THROUGH AN ANTI-OPPRESSIVE LENS",
          delimiter: ""
        },
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    const handleHoverOut1 = () => {
      gsap.to(homeNavElRef1.current, {
        text: {
          value: "1",
          delimiter: ""
        }
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "inline",
        opacity: 1,
      } )
    }

    //click a nav el

    const handleNavClickPage = () => {
      gsap.to(homeNavPageRef.current, {
        overflowY: "scroll",
      })
      gsap.to(lessRef.current, {
        display: "none",
        opacity: 0,
      })
      gsap.to(homeNavContentRef.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      })
      gsap.to(homeNavRef.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      })
      gsap.to(closeRef.current, {
        display: "flex",
        opacity: 1,
        delay: 0.5,
      })
      gsap.to(homeNavElRef1.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef2.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    // 2

    const handleNavHover2 = () => {
      gsap.to(homeNavElRef2.current, {
        text: {
          value: "2: WHAT IS IN THE CURRICULUM & TOOLKIT?",
          delimiter: ""
        },
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    const handleHoverOut2 = () => {
      gsap.to(homeNavElRef2.current, {
        text: {
          value: "2",
          delimiter: ""
        }
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "inline",
        opacity: 1,
      } )
    }

    // 3

    const handleNavHover3 = () => {
      gsap.to(homeNavElRef3.current, {
        text: {
          value: "3: FOR FACILITATORS, TEACHERS, AND EDUCATORS",
          delimiter: ""
        },
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    const handleHoverOut3 = () => {
      gsap.to(homeNavElRef3.current, {
        text: {
          value: "3",
          delimiter: ""
        }
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "inline",
        opacity: 1,
      } )
    }

    // 4

    const handleNavHover4 = () => {
      gsap.to(homeNavElRef4.current, {
        text: {
          value: "4: CULTURAL ADAPTATIONS TO SRH EDUCATION",
          delimiter: ""
        },
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    const handleHoverOut4 = () => {
      gsap.to(homeNavElRef4.current, {
        text: {
          value: "4",
          delimiter: ""
        }
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef5.current, {
        //display: "inline",
        opacity: 1,
      } )
    }

    // 5

    const handleNavHover5 = () => {
      gsap.to(homeNavElRef5.current, {
        text: {
          value: "5: INCLUSIVE AND ACCESSIBLE LANGUAGE GUIDE",
          delimiter: ""
        },
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "none",
        opacity: 0,
        duration: 0.5,
      } )
    }

    const handleHoverOut5 = () => {
      gsap.to(homeNavElRef5.current, {
        text: {
          value: "5",
          delimiter: ""
        }
      } )
      gsap.to(homeNavElRef1.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef2.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef3.current, {
        //display: "inline",
        opacity: 1,
      } )
      gsap.to(homeNavElRef4.current, {
        //display: "inline",
        opacity: 1,
      } )
    }

    //close button

    const handleCloseClick = () => {
      gsap.to(homeNavPageRef.current, {
        overflowY: "hidden",
      })
      gsap.to(lessRef.current, {
          display: "flex",
          opacity: 1,
        })
      gsap.to(homeNavContentRef.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      })
      gsap.to(homeNavRef.current, {
        display: "flex",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      })
      gsap.to(closeRef.current, {
        display: "none",
        opacity: 0,
        duration: 0.5,
      })
      gsap.to(homeNavElRef1.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef2.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef3.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef4.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
      } )
      gsap.to(homeNavElRef5.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
      } )
    }

    // show button

     const handleShowClick = () => {
        /*window.scrollTo({
          top: homeNavPageRef.current.offsetTop,
          behavior: "smooth",
        })*/
        gsap.to(moreRef.current, {
          display: "none",
          opacity: 0,
        })
        gsap.to(homeContentRef.current, {
          height: "100vh",
        })
        gsap.to(lessRef.current, {
          display: "flex",
          opacity: 1,
        })
     }

     const handleLessClick = () => {
      /*window.scrollTo({
        top: homeNavPageRef.current.offsetTop,
        behavior: "smooth",
      })*/
      gsap.to(moreRef.current, {
        display: "flex",
        opacity: 1,
      })
      gsap.to(homeContentRef.current, {
        height: "180vh",
      })
      gsap.to(lessRef.current, {
        disaply: "none",
        opacity: 0,
      })
   }

    //display options

      const [displayHomeOption, setDisplayHomeOption] = useState("0");

      const handleDisplayOptionChange = (option) => {
        setDisplayHomeOption(option);
      };

      const handleNavClick = (option) => {
        handleNavClickPage();
        handleDisplayOptionChange(option);
      }

    return (

        <Fragment>

          <Hero>
            <HeroTitleText>A SEXUAL AND REPRODUCTIVE HEALTH </HeroTitleText>
            <HeroSubText>CURRICULUM & TOOLKIT</HeroSubText>
            <HeroSubSubText>FOR IMMIGRANT COMMUNITIES</HeroSubSubText>
            <HeroSubSubSubText ref={heroSubSubSubTitleRef}>BY THE CANADIAN ASSOCIATION OF WOMEN IMMIGRANTS (CAWI)</HeroSubSubSubText>
          </Hero>

          <HomeContent ref={homeContentRef} className="home-content">
          <More ref={moreRef} className="h-hide-and-show">
            <Link className="show-home-nav" onClick={handleShowClick} >MORE</Link>
          </More>
          <HomeNavPage ref={homeNavPageRef}>
            <HomeNav ref={homeNavRef}>
              <Link className="home-nav-link" ref={homeNavElRef1} onMouseEnter={handleNavHover1} onMouseLeave={handleHoverOut1} onClick={() => handleNavClick("1")}>1</Link>
              <Link className="home-nav-link" ref={homeNavElRef2} onMouseEnter={handleNavHover2} onMouseLeave={handleHoverOut2} onClick={() => handleNavClick("2")}>2</Link>
              <Link className="home-nav-link" ref={homeNavElRef3} onMouseEnter={handleNavHover3} onMouseLeave={handleHoverOut3} onClick={() => handleNavClick("3")}>3</Link>
              <Link className="home-nav-link" ref={homeNavElRef4} onMouseEnter={handleNavHover4} onMouseLeave={handleHoverOut4} onClick={() => handleNavClick("4")}>4</Link>
              <Link className="home-nav-link" ref={homeNavElRef5} onMouseEnter={handleNavHover5} onMouseLeave={handleHoverOut5} onClick={() => handleNavClick("5")}>5</Link>
            </HomeNav>
            <HomeNavContent ref={homeNavContentRef}>
            {displayHomeOption === "1" && <HomePageOne />}
            {displayHomeOption === "2" && <HomePageTwo />}
            {displayHomeOption === "3" && <HomePageThree />}
            {displayHomeOption === "4" && <HomePageFour />}
            {displayHomeOption === "5" && <HomePageFive />}
            </HomeNavContent>
            <Link className="home-nav-link-open" ref={closeRef} onClick={handleCloseClick}>CLOSE</Link>
            <Less ref={lessRef}>
              <Link className="show-home-nav" onClick={handleLessClick} >LESS</Link>
            </Less>
          </HomeNavPage>
          </HomeContent>
        </Fragment>
            
    );  
}

export default Home; 