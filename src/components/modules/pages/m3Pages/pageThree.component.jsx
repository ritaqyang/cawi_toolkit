import React, { useRef, useLayoutEffect, Fragment } from "react";
import {
    Content,
    SubSubTitle,
    SubSubSubTitle,
    BlueBox,
    TextBox,
} from '../pages.styles';
import '../pages.css';



export const M3PageThree = () => {
    return (
        <Fragment>
            <Content>

                <SubSubTitle> SEXUAL COERCION</SubSubTitle>

                <SubSubSubTitle>What is <a href="ttps://www.thehotline.org/resources/a-closer-look-at-sexual-coercion/">sexual coercion?</a></SubSubSubTitle>
                    <p>Sexual coercion is any instance of a person pressuring or forcing someone else to have sex against 
                        their will, and can take many forms. Sexual coercion in a relationship is a form of intimate partner 
                        violence or a pattern of behaviours used by one partner to maintain power and control over another 
                        partner in an intimate relationship. If you are concerned about intimate partner violence, speak to a 
                        counsellor and take steps to ensure your safety.</p>


                <SubSubSubTitle>I gave consent, but why do I feel weird after sex or sexual activity?</SubSubSubTitle>
                    <p>Consent is a key element of a positive sexual experience, but it is not the only factor. It is important 
                        to be aware that even if consent is given, it does not necessarily guarantee a positive sexual experience. 
                        There are many other factors that can affect the overall quality of a sexual experience, such as 
                        communication,  and physical and emotional well-being.</p>
                    <p>It is important to remember that everyone is different, and people's feelings and bodies can be unpredictable. 
                        This is why it is important to be open and honest with your partner about your feelings and your boundaries. 
                        You should also be responsive to any changes in your partner's feelings. During an activity, you should be 
                        open to the possibility that your feelings or boundaries may change over time, and communicate those changes 
                        to your partner as they may occur.</p>
                    <p>If you feel that you are unsure about an activity or experience, it is okay to take a break. You and your 
                        partner should both be comfortable throughout the experience. It is important to prioritize your own well-being 
                        and to make sure that you are in a safe and consensual environment.</p>
                
                <TextBox>
                <SubSubSubTitle>How to talk about setting boundaries: </SubSubSubTitle>
                <p>Ensure that you are modelling good boundaries in your learning space and creating a safe environment for everyone 
                    where they are also encouraged to set boundaries with you and their peers</p>
                <ol className="m-list">
                    <li><p>When discussing what you would like to communicate as a boundary to another person, ensure you are being 
                        straightforward, and non-confrontational</p></li>
                    <li><p>Come from a positive standpoint, stating what you would like rather than what would not</p></li>
                    <li><p>Ensure that you are prepared for potential emotions from the other person</p></li>
                </ol>
                <p>Communicate to the other person what you would like and why it is important to you while staying simple.</p>
                </TextBox>

                <BlueBox>
                <SubSubSubTitle>Discussion Prompts:</SubSubSubTitle>
                <p>Prior to beginning the discussions, we encourage facilitators to use anonymous ways students can submit their 
                    responses such as jamboard, menti-meter, or mural. Then let the students or audience members know they are 
                    more than welcome to step away from the discussion if they feel uncomfortable during the conversation. 
                    Additionally, also have resources or counsellors on site in case a student needs further support during the 
                    conversation.</p>

                <SubSubSubTitle>Here are a few discussion prompts that you can use:</SubSubSubTitle>
                <ul className="m-list">
                    <li><p>What are a few words that come to mind when you hear the word “consent”?</p></li>
                    <li><p>How do you define boundaries?</p></li>
                    <li><p>What are some ways you can set boundaries verbally and non-verbally?</p></li>
                    <li><p>Can someone change their mind after they have already given consent?</p></li>
                    <li><p>When should someone ask for consent?</p></li>
                </ul>

                <SubSubSubTitle>Consent and Boundaries Debrief:</SubSubSubTitle>
                <p>Following each lesson place, it is a good idea to measure students' baseline knowledge and what they learned 
                    during the lesson. Here are a few questions you can ask students:</p>
                <ul className="m-list">
                    <li><p>What is something new that you have learned in this section?</p></li>
                    <li><p>What are the 3 main takeaways?</p></li>
                    <li><p>How can we improve this section?</p></li>
                    <li><p>Is there anything else that needs to be discussed or addressed?</p></li>
                </ul>
                </BlueBox>

            </Content>
        </Fragment>
    );
};