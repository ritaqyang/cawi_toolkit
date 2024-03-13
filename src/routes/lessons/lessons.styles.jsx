
import styled from "styled-components";


export const LessonPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
  padding-top: 7rem; 
  justify-content: space-around;
`;

export const Module = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
  background-color: #E3B778; 
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SidebarContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
`

export const MainContent = styled.div`
  flex: 1; /* Take remaining space */
  padding: 20px;
`;