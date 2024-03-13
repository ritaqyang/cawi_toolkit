import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%; 
  padding-top:7rem; 
  background-color: #F9E29C; 
`;

export const Sidebar = styled.div`
  flex: 0 0 250px; 
  background-color: pink; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MainContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const MainContent = styled.div`
    display:flex;
    flex-direction: column; 
    background-color: green; 
    padding: 5rem; 
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;