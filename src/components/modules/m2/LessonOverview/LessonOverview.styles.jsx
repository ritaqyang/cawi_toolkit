import styled from "styled-components";

export const LessonOverviewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
  padding: 1rem;
  margin: 2rem 2rem 2rem 3rem; 
  border-radius: 19px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e0e0;
  flex-wrap: nowrap; 

    @media (max-width: 768px) {
        flex-wrap: wrap; /* Items will wrap when container width is 768px or smaller */
    }
`;

export const TopicsCovered = styled.div`
  margin-bottom: 20px;
`;

export const LessonObjectives = styled.div`
  margin-top: 20px;
`;
