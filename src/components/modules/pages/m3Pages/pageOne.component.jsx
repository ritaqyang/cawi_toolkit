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



export const M3PageOne = () => {
    return (
        <Fragment>
            <TitlePage>
                <SubTitle>LESSON PLAN #3:</SubTitle>
                <Title>CONSENT AND BOUNDARIES</Title>
            </TitlePage>
            <Content>
                <SubSubTitle>WHAT IS CONSENT?</SubSubTitle>
                <p>Consent is actively saying yes when asked for permission to do something. You can give consent 
                    when you have the knowledge of what the action involves, its likely consequences, and the option to 
                    say no. <a href="https://www.verywellmind.com/boundaries-in-relationships-and-stress-3144984#:~:text=Boundaries%20can%20be%20described%20as,deciding%20to%20call%20it%20quits">Sexual consent</a> should be enthusiastic, mutual, voluntary, informed, and ongoing.</p>
                   
                            
                <SubSubSubTitle> When should you ask for consent? </SubSubSubTitle>
                <p>You should always ask for consent before you begin any sexual activity, including kissing, cuddling, 
                    and any kind of sex - even if your partner has consented in the past. You should ask in a way that makes 
                    it clear that it would be okay to say no. You do not want to pressure people to do something they are not 
                    comfortable doing. </p>


                <BlueBox>
                <SubSubSubTitle>How do I give consent? </SubSubSubTitle>
                    <p>One of the effective ways to give consent is directly and verbally. Some ways that you can give consent 
                        are verbally by saying "yes" or using affirmative phrases like "I want to" or "let's try that", 
                        and nonverbal consent by nodding or giving positive feedback. At the same time, it is always best to use 
                        both verbal and nonverbal cues to give consent as some nonverbal cues may be misunderstood.</p> 

                <SubSubSubTitle> How do I withdraw consent? </SubSubSubTitle>

                <p>Say "no" or "stop," or use phrases like, "I don’t want to," "I need to think about it," or "Can we discuss that later?"</p>
                <p>Give feedback using phrases like, "I don’t like that; can you try this," "That doesn’t work for me," or "I’d rather..."</p>
                <p>It is important to communicate consent through both verbal and nonverbal cues. It is especially important to use verbal communication when it comes to matters of consent, as nonverbal cues can be easily misunderstood or ignored.</p>
                <p>Consent must be freely given, enthusiastic, and ongoing. If you are unsure about whether your partner is consenting to a particular activity, it is always best to ask for verbal confirmation before proceeding.</p>
                <p>It is important to have open and honest communication about what you are comfortable with and what your boundaries are. Consent can be withdrawn at any time, even if it was given initially.</p>
                <p>It is important to check in with your partner and make sure that they are still comfortable with the activity you are engaging in.</p>
        
                </BlueBox>

                  
            </Content>
        </Fragment>
    );
};