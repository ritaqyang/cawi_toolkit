import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        TitlePage, 
        Title, 
        SubTitle, 
        SubSubTitle,
        SubSubSubTitle, 
        BlueBox} from './pages.styles';
import './pages.css';
import styled from "styled-components";
import { howToGive } from "./m3p1.content";



export const M3PageOne = () => {
    return (
        <Fragment>
            <TitlePage>
                <SubTitle>LESSON PLAN #3:</SubTitle>
                <Title>WHAT IS CONSENT?</Title>
            </TitlePage>
            <Content>
                    

                            <SubSubTitle> Definition  </SubSubTitle>
                    <ul className="m-list">
                        <li><p>Consent is actively saying yes when asked for permission to do something.</p></li>
                        <li><p> You can give consent when you have the knowledge of what the action involves, its likely consequences, and the option to say no. </p></li>
                        <li><p>Sexual consent should be enthusiastic, mutual, voluntary, informed, and ongoing.. </p></li>
                
                    </ul>
                   
                            
                <SubSubTitle> When should you ask for consent? </SubSubTitle>
                <ul className="m-list">
                                    <li><p>You should always ask for consent before you begin any sexual activity, including kissing, cuddling, and any kind of sex</p></li>
                                    <li><p> You should always ask for consent even if your partner has consented in the past. </p></li>
                                    <li><p>You should ask in a way that makes it clear that it would be okay to say no.  </p></li>

                </ul>


                    <BlueBox>
                <SubSubSubTitle>How do I give consent? </SubSubSubTitle>
                    <p>
                       {howToGive}
                    </p> 

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