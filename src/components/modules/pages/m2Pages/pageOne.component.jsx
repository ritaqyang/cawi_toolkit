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

export const M2PageOne = () => {
    return (
        <Fragment>
            <TitlePage>
                <SubTitle>LESSON PLAN #2</SubTitle>
                <Title>NAVIGATING RELATIONSHIPS</Title>
            </TitlePage>
            <Content>
                <SubSubTitle>ASPECTS OF A HEALTHY RELATIONSHIP</SubSubTitle>
                <p>Now, let’s consider each of the six elements in the context of sexual and reproductive health.</p>

                <SubSubSubTitle>Honesty</SubSubSubTitle>
                <p>Honesty and open communication are key to building trust and maintaining a healthy relationship. In the 
                    context of sexual health, it is especially important to be open and honest with your partner about STIs 
                    and any other related topics, such as sexual expectations and boundaries. This can help prevent the spread 
                    of STIs and ensure that both partners are on the same page regarding their sexual health and well-being.</p>
                <p>It is also important, to be honest about your expectations for the relationship. If you have different ideas 
                    about the level of commitment you are looking for, it is better to address these differences early on rather 
                    than letting them become a source of conflict later on. And it is essential that both partners feel comfortable 
                    being open and honest with each other about anything without fear of being judged or criticized. This can help 
                    build a strong foundation of trust and understanding in the relationship.</p>

                <SubSubSubTitle>Trust</SubSubSubTitle>
                <p>Trust is a crucial component of any healthy relationship. When trust is present, it allows both partners to feel 
                    secure and supported, which can create a sense of emotional connection and intimacy. Without trust, it can be 
                    difficult to build a strong foundation for the relationship and pursue shared goals and activities together. 
                    Lack of trust can lead to a number of problems in a relationship, including feelings of insecurity and anxiety, 
                    difficulty with communication and intimacy, and a sense of disconnection. If you don't trust your partner, you 
                    may worry about their loyalty and commitment, or you may feel that they are not being honest with you. This can 
                    erode the foundation of the relationship and make it difficult to feel satisfied and fulfilled in the 
                    partnership.</p>
                <p>It is important to address trust issues as soon as they arise in order to rebuild the foundation of the 
                    relationship and restore a sense of security and connection. This may involve open and honest communication, 
                    setting boundaries, and working together to rebuild trust through actions and behaviours that demonstrate 
                    commitment and loyalty.</p>

                <SubSubSubTitle>Respect</SubSubSubTitle>
                <p>Respect is an important aspect of healthy relationships. Respect involves treating people with kindness, 
                    consideration, and understanding, and also valuing thoughts, feelings, and opinions. It is also important 
                    to respect people's feelings even if they are different from others. When people feel respected, they are 
                    more likely to trust and feel safe in their relationships and this can lead to better emotional and physical 
                    health. Respect is something that is learned and developed over time through communication, listening, and 
                    understanding. Respect is something that should be practiced in all of your relationships, whether they are 
                    with friends, family, or colleagues, in order to build positive, healthy connections with others. 
                    (<a href="https://kidshelpline.com.au/teens/issues/all-about-respect#:~:text=Respect%20means%20that%20you%20accept,it%20is%20something%20you%20learn">All about respect - Kids Help Line</a>)</p>

                <SubSubSubTitle>What does respect look like?</SubSubSubTitle>
                <p>Respect might look different for everyone but can include aspects of feeling safe being around each other, 
                    knowing it’s okay for both of you to express who you are, listening to each other and being patient even when 
                    you disagree with each other, not yelling or talking over each other, being able to talk openly, giving your 
                    partner space when needed, and admitting when you have made a mistake. (<a href="https://kidshelpline.com.au/teens/issues/all-about-respect#:~:text=Respect%20means%20that%20you%20accept,it%20is%20something%20you%20learn">All about respect - Kids Help Line</a>)</p>
                <p>In order to have a healthy and respectful relationship, it is important to listen to your partner and show them 
                    kindness. If your partner shows controlling behaviour, by constantly checking on your whereabouts, accusing you 
                    of lying or cheating, belittling you, using derogatory language, or displaying physical aggression, it may be a 
                    sign of an abusive relationship. Abusive relationships are characterized by a lack of respect and an imbalance 
                    of power and control. (<a href="https://www.teenhealthcare.org/blog/6-ways-to-show-respect-in-your-relationship/">6 ways to show respect in your relationship</a>) </p>
                
                <SubSubSubTitle>Communication (<a href=""></a>Relationships and Communication)</SubSubSubTitle>
            </Content>
        </Fragment>
    );
};