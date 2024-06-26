import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 25px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 25px;
  background-color: #76c7c0;
  text-align: center;
  line-height: 25px;
  color: white;
  border-radius: 25px 0 0 25px;
  transition: width 0.5s ease-in-out;
`;

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Bar style={{ width: `${progress}%` }}>
        {progress}%
      </Bar>
    </Container>
  );
};

export default ProgressBar;
