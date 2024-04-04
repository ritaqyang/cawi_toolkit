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
import landackimg from '../../../../../assets/quote-bg.png';

export const LandAck = styled.section`
        padding: 13rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        text-align: center;
`;

export const LandAckContent = styled.section`
        padding: 5rem;
        padding-top: 6rem;
        background-image: url(${landackimg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
`;

export const PageOne = () => {
    return (
        <Fragment>
            <TitlePage>
                <SubTitle>LESSON PLAN #1:</SubTitle>
                <Title>WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</Title>
            </TitlePage>
            <Content>
                    <SubSubTitle>WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</SubSubTitle>

                    <p className="m-p">Sexual and reproductive health means your physical, mental, emotional 
                        and social well-being as it relates to your sexuality (<a href="https://myhealth.alberta.ca/sexual-reproductive-health">My Health Alberta</a>). 
                        Sexuality is an important part of being human and can change as you go 
                        through different stages of life. Your sexuality includes your:</p>
                    <ul className="m-list">
                        <li><p>Values and relationships include the perception of relationships as 
                                well as a person’s values, beliefs and attitudes.</p></li>
                        <li><p>Sexual activity which can depend on the mode of life such as student, 
                                full-time worker, part-time worker, etc. </p></li>
                        <li><p>Communication and socialization such as learning and unlearning social 
                                cues of how to act in sexual relationships. </p></li>
                        <li><p>Experiences, self-image, and personality such as good and bad experiences 
                                that can impact a person's relationship to their sexuality differently. </p></li>
                        <li><p>Sex assigned at birth which can impact how one interacts with their 
                                sexuality depending on society’s expectations or norms. </p></li>
                        <li><p>Sexual orientation, for example heteronormativity often directs us in one 
                                direction and may disclude experiences. </p></li>
                        <li><p>Gender identity and expression which can impact how people interact with 
                                others in the dating world and also how they perceive themselves in the dating world. </p></li>
                    </ul>
                    <p>Workshops, seminars or sessions should always begin with Treaty Acknowledgements 
                        or Land Based Reflections. Here is an example: </p>

                    <LandAck>
                        <LandAckContent>“I would like to begin our session today with a land based reflection by sharing 
                            my own lived experience. I am a settler located on ______ Territory and I came to 
                            Canada from ______ with my family _ years ago. I would like to take a moment to 
                            acknowledge the land we call Canada today and the injustices towards Indigenous 
                            peoples that were taken for us to be here today. Please take 30 seconds to reflect 
                            on where you come from, the land you are situated on, and what your lived experiences 
                            are. If you feel comfortable, please share yours in the chat as well.”</LandAckContent>
                    </LandAck>

                    <BlueBox>
                    <SubSubSubTitle>Setting guidelines at the beginning of the workshop: </SubSubSubTitle>
                    <ul>
                        <li><p>What’s said here, stays here and what’s learned, here leaves here;</p></li>
                        <li><p>Important to acknowledge and respect that we are all experts in our own opinions;</p></li>
                        <li><p>Leave space for humour to ensure that it is a light atmosphere for everyone, but 
                                keep in mind that we should remain respectful when allowing people to share their stories;</p></li>
                        <li><p>Make sure to check your own assumptions and biases;</p></li>
                    </ul>
                    </BlueBox>

                    <SubSubSubTitle>Aspects of Sexual and Reproductive Health</SubSubSubTitle>
                    <p>There are many aspects to sexual and reproductive health, such as emotional, physical, mental 
                        and social aspects. It is affected by how one relates to their sexuality. The importance of 
                        SRH is your physical and mental health and social well-being in all matters relating to the 
                        reproductive system. </p>
                    <ul>
                        <li><p><b>Social aspects</b> of SRH appear as having strong support systems when discussing 
                                topics around SRH or overcoming stigma and encouraging those around you to engage in these 
                        conversations. </p></li>
                        <li><p><b>Mental aspects</b> of SRH may include having abortions, miscarriages, and the mental 
                                health impacts that individuals may have with these experiences. SRH looks different for 
                                everyone. Different experiences in SRH can have different impacts on mental health based on 
                                context and lived experiences. </p></li>
                        <li><p><b>Physical aspects</b> of SRH may be one’s confidence regarding their own body 
                                considering past experiences they’ve had, or reducing anxiety with one’s own physical body 
                                when equipped with proper SRH tools.</p></li>
                    </ul>
            </Content>
        </Fragment>
    );
};