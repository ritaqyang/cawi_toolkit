import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        SubSubTitle,
        SubSubSubTitle, 
        BlueBox} from './pages.styles';
import './pages.css';



export const M3PageTwo = () => {
    return (
        <Fragment>
            
            <Content>
                    

                <SubSubTitle> What do you do if someone crosses your boundaries?  </SubSubTitle>
                    <ul className="m-list">
                    
                        <li><p>It is important to remember that your partner should be responsive to all signs that you are not consenting to an activity.</p></li>
                        <li><p>If you are unsure whether your partner understands your nonverbal cues, try communicating your lack of consent verbally.</p></li>
                        <li><p>It is never your fault if someone ignores your nonverbal or verbal cues and does not respect your boundaries.</p></li>
                        <li><p>If you feel that your boundaries are violated, try and talk to a teacher or a friend or someone you trust.</p></li>
                        <li><p>You can also try talking to a counsellor or a trusted adult, for support and guidance on how to handle the situation if you feel that this is something that might work better for you.</p></li>

                    </ul>
                   
                            
                <SubSubTitle> When should you ask for consent? </SubSubTitle>
                <ul className="m-list">
                                    <li><p>You should <strong>always</strong> ask for consent before you begin any sexual activity, including kissing, cuddling, and any kind of sex.</p></li>
                    <li><p> You should ask for consent <strong>even if </strong> your partner has consented in the past. </p></li>
                                    <li><p>You should ask in a way that makes it clear that it would be okay to say no.  </p></li>

                </ul>

                <SubSubTitle> Resepecting boundaries </SubSubTitle>

                        <ul className="m-list">
                                        <li><p><strong>Always remember</strong> to <strong>ask for consent</strong> before you begin having sex or engaging in sexual activity. Don’t just assume that you know what a partner likes, or that they will like something because you or a previous partner liked it. Instead, <strong>ask</strong> them about it!</p></li>
                                        <li><p><strong>Check in</strong> with a partner during sex or sexual activity. Ask if they want to keep going or if you should do something different and let them know that you can <strong>stop</strong> at any time.</p></li>
                                        <li><p><strong>Be attentive</strong> to nonverbal cues from partners. If a partner becomes quiet, distracted, uncomfortable, upset, or is not reciprocating, <strong>pause and check-in</strong>.</p></li>
                                        <li><p><strong>Don’t have sex</strong> or engage in sexual activity with partners who are intoxicated. People cannot give consent if they are incapacitated by drugs, alcohol, or for other reasons.</p></li>
                                        <li><p><strong>Discuss triggers</strong>. If you know that your partner has experienced relationship violence or sexual trauma, discussing their boundaries, triggers, and how they’d like to be treated during sex or sexual activities can help them feel more at ease.</p></li>
                                </ul>
                    <BlueBox>
                    <SubSubSubTitle>Can I change my mind after I have already given consent? </SubSubSubTitle>
                    <p>
                        Absolutely! You can change your mind at any time. You do not have to continue with anything that is uncomfortable, painful, or unenjoyable in any way.

                    </p> 
                    <SubSubSubTitle>What if a partner is trying to change my mind?</SubSubSubTitle>
                   
                    
                        
                        <p>You should <strong>never</strong> do anything you are not comfortable doing. If the idea of engaging in an activity makes you uncomfortable, anxious, or unsafe, <strong>say no</strong>.</p>
                    <SubSubSubTitle>
                        What if a partner is offended when I say no or disagree with doing something?</SubSubSubTitle>
                        <p>Saying, <strong>“no,”</strong> is the expression of a personal boundary, not a rejection of the other person. That boundary helps you maintain your bodily autonomy and is a line between safe and unsafe. It is also okay if a partner’s feelings are hurt when you say, <strong>“no.”</strong> You can explain the importance of boundaries in any relationship and encourage them to communicate their boundaries, too. It is not okay for a partner to use feeling hurt or offended to manipulate you into doing something you don’t want to do.</p>
                 

             

               
                    </BlueBox>

                  
            </Content>
        </Fragment>
    );
};