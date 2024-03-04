
import React from 'react';
import styled from 'styled-components';
import img from '../../assets/homepage.png';
const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;

const Content = styled.div`
  flex: 1;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;


const Home = () => {
    return (

        
        <PageContainer>
            
        
           
            <img src={img} alt="Description of the image" /> 
            
        </PageContainer>
    );
  
}
export default Home; 