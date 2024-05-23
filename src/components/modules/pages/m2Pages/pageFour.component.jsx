import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        TitlePage, 
        Title, 
        SubTitle, 
        SubSubTitle,
        SubSubSubTitle, 
        BlueBox} from '../pages.styles';
import '../pages.css';
import styled from "styled-components";

export const M2PageFour = () => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>STRAINS THAT IMMIGRATION HAS ON RELATIONSHIPS</SubSubTitle>
                <p>Immigration can present strains on relationships due to the stress and uncertainty of the immigration 
                    process, language and cultural barriers, financial difficulties, and distance from family and support 
                    networks. Additionally, the emotional toll of being separated from loved ones can also take a toll on 
                    relationships. It can also lead to feelings of isolation and disconnection, which can be challenging 
                    for individuals and couples to navigate. Migration poses great challenges for couples. Distance from 
                    one’s homeland, financial strains, novelty, and social isolation are some of the challenges presented 
                    by migration.</p>
                
                <BlueBox>
                    <SubSubSubTitle>Activities:</SubSubSubTitle>
                    <SubSubSubTitle>Relationship Game:</SubSubSubTitle>
                    <p>We encourage facilitators to use activities from shore.ca such as the relationship game. The 
                        relationship game can be found on this <a href="https://www.shorecentre.ca/wp-content/uploads/Relationship-Game-min.pdf">link</a>.</p>

                    <SubSubSubTitle>We also encourage facilitators to have discussions and conversations around these topics. 
                        Here are a few discussion prompts:</SubSubSubTitle>
                    <ul>
                        <li><p>Aside from the 6 aspects of relationships that we shared, what do you think are some other 
                            important aspects of relationships?</p></li>
                        <li><p>What are some ways you can manage your relationships with a busy schedule (through work, 
                            school, etc)?</p></li>
                        <li><p>Do you think there are some other factors that may cause strains on relationships when 
                            immigrating from one country to another?</p></li>
                    </ul>

                    <SubSubSubTitle>Navigating Relationships Debrief:</SubSubSubTitle>
                    <p>Following each lesson place, it is a good idea to measure baseline knowledge and what the audience 
                        learned during the lesson. Here are a few questions you can ask students:</p>
                    <ul>
                        <li><p>Before: On a scale of 1 to 10, how would you rate your current knowledge around navigating relationships?</p></li>
                        <li><p>After: On a scale of 1 to 10, how would you rate your knowledge of navigating relationships after this session?</p></li>
                        <li><p>What are the three main takeaways from this session?</p></li>
                        <li><p>What is something new that you have learned?</p></li>
                        <li><p>What is something you wish you could learn about more that was not mentioned in the seminar?</p></li>
                        <li><p>What are some topics that you think would be beneficial to have as part of this section?</p></li>
                    </ul>
                </BlueBox>
            </Content>
        </Fragment>
    );
};