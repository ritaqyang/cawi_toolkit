import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ProgressContainer = styled.div`
  width: 20%;
  background-color: #ddd;
  position: fixed;
`;

const Bar = styled.div`
  width: ${props => props.width}%;
  height: 30px;
  background-color: #4CAF50;
  transition: width 0.4s ease;
`;

const Breakpoints = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ProgressButton = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color:  #b40a0a;
  }
`;

// ProgressBar component
const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleButtonClick = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <div>
            <ProgressContainer>
                <Bar width={progress} />
            </ProgressContainer>
            <Breakpoints>
                {[20, 40, 60, 80, 100].map(percent => (
                    <ProgressButton key={percent} onClick={() => handleButtonClick(percent)}>
                        {percent}%
                    </ProgressButton>
                ))}
            </Breakpoints>
        </div>
    );
};

export default ProgressBar;
