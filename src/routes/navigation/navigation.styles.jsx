import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const NavigationContainer = styled.div`
 
      width: 100%;
      height: 75px;
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      
  


`;

export const GreetingsContainer = styled.div`
  padding-left: 0;
  
  font-family: 'Verdana';
`;

export const NavLinks = styled.div`
  display: none;
  @media (min-width: 950px) {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10rem;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-size: 2rem;
  cursor: pointer;å
  color: black; 
  text-decoration: none;
  color:rgb(165, 165, 165);
  &:hover {
    
    color: black;
  }
`;

export const NavLinkOut = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;å
  color: black; 
  &:hover {
    color: grey; 
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
  background-color: white;
`;

