import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        SubSubTitle,
        SubSubSubTitle, 
        TextBox} from '../pages.styles';
import '../pages.css';



export const M3PageTwo = () => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>BOUNDARIES</SubSubTitle>

                <SubSubSubTitle> What do you do if someone crosses your boundaries? </SubSubSubTitle>
                    <p>It is important to remember that your partner should be responsive to all signs that you are not 
                        consenting to an activity. If you are unsure whether your partner understands your nonverbal cues, 
                        try communicating your lack of consent verbally. It is never your fault if someone ignores your 
                        nonverbal or verbal cues and does not respect your boundaries. If you feel that your boundaries are 
                        violated, try and talk to a teacher or a friend or someone you trust. You can also try talking to a 
                        counsellor or a trusted adult, for support and guidance on how to handle the situation if you feel 
                        that this is something that might work better for you.</p>  
                            
                <SubSubSubTitle> Can I change my mind after I have already given consent? </SubSubSubTitle>
                    <p>Absolutely! You can change your mind at any time. You do not have to continue with anything that is 
                        uncomfortable, painful, or unenjoyable in any way.</p>

                <SubSubSubTitle><a href="https://www.verywellmind.com/boundaries-in-relationships-and-stress-3144984#:~:text=Boundaries%20can%20be%20described%20as,deciding%20to%20call%20it%20quits">Respecting other boundaries and making sure you have asked for consent</a></SubSubSubTitle>
                    <ul className="m-list">
                        <li><p>Always remember to <b>ask for consent before you begin having sex or engaging in sexual activity.</b> Don’t just assume that you know what a partner likes, or that they will like something because you or a previous partner liked it. Instead, <strong>ask</strong> them about it!</p></li>
                        <li><p><b>Check in with a partner during sex or sexual activity.</b> Ask if they want to keep going or if you should do something different and let them know that you can <strong>stop</strong> at any time.</p></li>
                        <li><p><b>Be attentive to nonverbal cues from partners.</b> If a partner becomes quiet, distracted, uncomfortable, upset, or is not reciprocating, <strong>pause and check-in</strong>.</p></li>
                        <li><p><b>Don’t</b> have sex or engage in sexual activity with <b>partners who are intoxicated. People cannot give consent if they are incapacitated by drugs, alcohol, or for other reasons.</b></p></li>
                        <li><p><b>Discuss triggers.</b> If you know that your partner has experienced relationship violence or sexual trauma, discussing their boundaries, triggers, and how they’d like to be treated during sex or sexual activities <a href="https://www.verywellmind.com/boundaries-in-relationships-and-stress-3144984#:~:text=Boundaries%20can%20be%20described%20as,deciding%20to%20call%20it%20quits">can help them feel more at ease</a>.</p></li>
                    </ul>

                <TextBox>
                <SubSubSubTitle>What if a partner is trying to change my mind?</SubSubSubTitle>
                    <p>You should never do anything you are not comfortable doing. If the idea of engaging in an activity makes you 
                        uncomfortable, anxious, or unsafe, say no. </p>
                    
                <SubSubSubTitle>What if a partner is offended when I say no or disagree with doing something?</SubSubSubTitle>
                    <p>Saying, “no,” is the expression of a personal boundary, not a rejection of the other person. 
                        That boundary helps you maintain your bodily autonomy and is a line between safe and unsafe. 
                        It is also okay if a partner’s feelings are hurt when you say, “no.” You can 
                        explain the importance of boundaries in any relationship and encourage them to communicate their 
                        boundaries, too. It is not okay for a partner to use feeling hurt or offended to manipulate you 
                        into doing something you don’t want to do.</p>
                </TextBox> 
                 
            </Content>
        </Fragment>
    );
};