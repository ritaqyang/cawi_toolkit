import React, {useRef, useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './modulesquare.css';
import { gsap } from "gsap";
import ProgressBar from "../../course-progress/ProgressBar";

const ModuleContainer = styled.div`

    display: flex;
    flex-direction: row; 
    background-color: yellow;
`
const Module = styled.div`
  width: 20rem;
  height: 18rem;
  border-radius: 25px; 
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 0;
  background-color: white;
  border: 2px solid #CEB180;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: hidden;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow: hidden;
`;
const ModuleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distorting */
`;


export const Square = ({ module, progress}) => {
    const moduleRef = useRef(null);

    const handleHover = () => {
        gsap.to(moduleRef.current, {
            height: '20rem'
        })
    }

    const handleHoverOut = () => {
        gsap.to(moduleRef.current, {
            height: '18rem'
        })
    }

    return (
        <div>
            
                 <Module className="module-wrapper" ref={moduleRef} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                    <Link className="lesson-link" to={`/modules/${module.id}`}>
                        {/* <img className="module-img" src={module.image} alt={module.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} /> */}
                    <ImageContainer>
                    <ModuleImage src={module.image} alt={module.name} />
                    </ImageContainer>
                        <div className="module-info" >
                            <ProgressBar progress={progress} />
                            <span className="module-info-content">
                            <p style={{marginTop: 0}}>{module.name}</p> 
                            {/*<ProgressBar progress={progress} moduleName={module.name} />*/}
                            <p className="module-d" style={{ marginTop: 0}}>{module.description}</p>
                            </span>
                        </div>
                    </Link>
                </Module>
           
           
        </div>
    )
};