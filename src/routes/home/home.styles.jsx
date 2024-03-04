import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex; 
  margin: 0 auto;
  padding: 20px;
  background-color: 
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const PortfolioItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PortfolioItem = styled.div`
  margin-bottom: 20px;
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
