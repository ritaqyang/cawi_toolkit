
import React from 'react';
import { HomePageWrapper, Header, Section, PortfolioItems, PortfolioItem } from './home.styles'; 

import img from '../../assets/homepage.png'; 
const Home = () => {
    return (
        <HomePageWrapper>
            <Header>
                <h1>Welcome to My Website</h1>
            </Header>
            <Section>
                <h2>About Me</h2>
                <p>This is where you can introduce yourself and provide some information about you or your website.</p>
            </Section>
            <Section>
                <h2>Services</h2>
                <p>Here you can list the services you offer or the main features of your website.</p>
            </Section>
            <Section>
                <h2>Portfolio</h2>
                <PortfolioItems>
                    
                    <PortfolioItem>
                        <img src={img} alt="Portfolio Item" />
                        <h3>Portfolio Item Title</h3>
                        <p>Description of portfolio item.</p>
                    </PortfolioItem>
                </PortfolioItems>
            </Section>
            <footer>
                <p>Footer content goes here.</p>
            </footer>
        </HomePageWrapper>
    );
}
export default Home; 