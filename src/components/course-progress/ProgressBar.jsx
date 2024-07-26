import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ModuleName = styled.div`
  margin-right: 1rem;  
  white-space: nowrap; 
`;
const Container = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 25px;
  overflow: hidden;
`;

const Bar = styled.div`
  /*height: 1.8rem;
  background-color: #76c7c0;
  text-align: center;
  line-height: 25px;
  color: white;
  border-radius: 25px 0 0 25px;
  transition: width 0.5s ease-in-out;*/

  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #d8edf2;
  z-index: 1;
  border-radius: 25px 0 0 25px;
`;

const ProgressPercent = styled.div`
  margin: 1rem;
  color: gray;
`;

/*const ProgressBar = ({ progress, moduleName }) => {*/
const ProgressBar = ({ progress }) => {
  return (
    <>
     {/*<Wrapper>
      <ModuleName>{moduleName}</ModuleName>
      <Container>
        <Bar style={{ width: `${progress}%` }}>
          {progress}%
        </Bar>
      </Container>
  </Wrapper>*/}
      <Bar style={{ width: `${progress}%`}} />
      {/*  <ProgressPercent>{progress}%</ProgressPercent>
      </Bar>*/}
    </>
  );
};

export default ProgressBar;
