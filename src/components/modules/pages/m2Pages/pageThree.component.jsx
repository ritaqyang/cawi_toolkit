import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content, 
        TitlePage, 
        Title, 
        SubTitle, 
        SubSubTitle,
        SubSubSubTitle,
        TextBox, 
        BlueBox} from '../pages.styles';
import '../pages.css';
import styled from "styled-components";

export const M2PageThree = () => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>UNDERSTANDING WHAT WORKS BEST FOR YOU IN RELATIONSHIPS</SubSubTitle>
                <SubSubSubTitle>Understanding that what might work for others might not work for you</SubSubSubTitle>

                <TextBox>
                <SubSubSubTitle>Hook-up culture</SubSubSubTitle>
                <p>Many of your colleagues might be open to hooking up and being in short-term relationships. Even 
                    though nothing is wrong with that, you might find yourself almost pressured to do the same just 
                    because everyone around you is. It is important that you continue to put your wishes and 
                    boundaries first as your relationship should be what makes you comfortable.</p>

                <SubSubSubTitle>Committed relationships</SubSubSubTitle>
                <p>You might find that committed relationships are not working for you, maybe you want to try something 
                    short-term. It is important to do what you want, rather than what those around you may be pursuing. 
                    However, it is important to get tested and make sure that your partner(s) have also been tested to 
                    avoid any stress down the road. The same goes for using protection. </p>

                <SubSubSubTitle>Cost of time and effort</SubSubSubTitle>
                <p>Relationships cost a lot of money and effort and time. As immigrant women, we already face barriers 
                    to various support and employment opportunities, so it is important that we recognize that not 
                    everyone has the luxury to date, whether exclusively or not. Many immigrant women, particularly 
                    newcomers, work two or more jobs while still being in school. This is why we must never ask others 
                    why they have not been dating or why they won’t go on a double date- it might simply be because they 
                    don’t have the time and privilege to do so.</p>

                <SubSubSubTitle>Religious and Cultural Differences in Relationships</SubSubSubTitle>
                <p>You might be in a situation where your family does not approve of your relationship due to many 
                    reasons such as religion or culture, ideas of only dating to marry, not dating at all, or opinions 
                    on sex before marriage. This is really difficult because it is not as easy as “cutting off your 
                    family”- that does not work when your family has abandoned everyone and everything to move to a 
                    different country for you. It is important to address.</p>
                </TextBox>

                <SubSubSubTitle>What can you do?</SubSubSubTitle>
                <ul className="m-list">
                    <li><p>Educate your family about issues like this: Talk to your family about how you feel (if it 
                        is safe and it will not cause any party any harm). They may be more receptive to the idea of 
                        you being with your partner if you tell them how you feel about them honestly. Your family 
                        might just be worried that you will fall behind in school or work or that you will not spend 
                        time with them anymore. This is why it is important to show them that you are able to balance 
                        everything without hurting yourself in the process.</p></li>
                    <li><p>Find ways to incorporate culture into your relationship, your family might be more accepting 
                        of it if they feel that they are not ‘losing’ you. Now, you may say something like “but it is 
                        my life, why should I take their opinions into account”. The thing is that many immigrants come 
                        from collectivistic cultures and Canada is a very individualistic country. You may have grown 
                        up here and fallen into the individualistic cultural pattern, but your parents most likely did 
                        not. To them, you are all one family. Because of this, it is important to be patient with your 
                        parents, however, when those opinions/wishes become abused, that is very different.</p></li>
                    <li><p>Keep your relationship separate from your family if you think that will help your overall 
                        well-being. If you think that there is no way to get your family to be accepting of your 
                        relationship, just don’t tell them. This will help you keep your relationship with your family 
                        and also your partner without losing one party. This may feel lonely and you might even experience 
                        guilt, however, it is important to prioritize your well-being and whatever that may look like 
                        for you.</p></li>
                </ul>
            </Content>
        </Fragment>
    );
};