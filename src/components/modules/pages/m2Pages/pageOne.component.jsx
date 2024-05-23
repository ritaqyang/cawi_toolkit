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
                
                <SubSubSubTitle>Communication (<a href="https://www.betterhealth.vic.gov.au/health/healthyliving/relationships-and-communication#:~:text=be%20clear%20about%20what%20you,want'%20and%20'I%20feel">Relationships and Communication</a>)</SubSubSubTitle>
                <p>When communicating with your partner, try to be clear and concise in what you are trying to communicate. This will 
                    help your partner understand what you are trying to say and how it affects you.  Try and be expressive with your 
                    partner by using "I" statements such as: "I need," "I want," and "I feel." This can help your partner better 
                    understand your perspective and what you are looking for in the relationship. This may also avoid miscommunications 
                    in your relationships. </p>
                <p><a href="https://anchorlighttherapy.com/expectations-in-a-relationship-a-reality-check/">Unspoken expectations 
                    can have a significant impact on relationships</a>, and can be related to various aspects such as 
                    quality time, finances, household tasks, and sex. Some people may believe that it is better to not have any 
                    expectations in a relationship in order to avoid disappointment.  Understanding the balance between reasonable 
                    and unreasonable expectations can also be beneficial for creating a strong and well-rounded relationship. Each 
                    partner brings different experiences, perspectives, and values to the relationship. It can be helpful to consider 
                    where your expectations come from, such as past relationships, relationships with friends and family, or your own 
                    self-awareness and ability to meet your own needs. Some expectations may be more challenging to meet or understand 
                    than others.</p>
                <p>Effective communication of expectations is essential for maintaining healthy relationships. It is not realistic to 
                    assume that our partner knows all of our needs and wants. Our expectations will also not remain the same. 
                    Expectations may change based on the history of the relationship and how they may evolve with transitions and 
                    milestones. Clear communication about expectations is important during significant life transitions such as getting 
                    engaged, getting married, having children, and career changes. This can help to create a sense of stability and 
                    reliability as a couple navigates challenging times together. Improper communication can lead to further 
                    misunderstandings.</p>

                <SubSubSubTitle>Boundaries</SubSubSubTitle>
                <p>Boundaries can be described as how emotionally close you let people get to you. They are also where you draw the 
                    line within a relationship. They say how much you are willing to give or take before requiring that things change 
                    or deciding to call it quits. For example, you may be okay with your partner going out one night a week without 
                    you but feel that two or three nights per week is unacceptable. Boundaries are one of the measures of 
                    <a href="https://www.verywellmind.com/all-about-healthy-relationship-4774802"> relationship health</a>. As such, 
                    they can contribute to your relationships with your partner, children, family, and friends in positive or negative 
                    ways. </p>

                <SubSubSubTitle><a href="https://www.ourrelationship.com/ways-to-get-and-give-emotional-support-in-your-relationship/#:~:text=At%20its%20core%2C%20however%2C%20emotional,positive%20foundation%20for%20both%20partners">Emotional Support</a></SubSubSubTitle>
                <p>Emotional support involves providing love, understanding, and support to your partner when they are going through 
                    difficult times or facing challenges. You can support your partner emotionally by listening to them without judgment, 
                    offering reassurance and encouragement, and providing a safe and supportive space for them to express their feelings. 
                    It's important to remember that emotional support is not just about being there for your partner during times of 
                    crisis. This can involve things like being there to listen, offering words of encouragement, and showing appreciation 
                    and affection.</p>

                <SubSubSubTitle><a href="https://www.masterclass.com/articles/emotional-labor-in-relationships">Emotional Labour</a></SubSubSubTitle>
                <p>Emotional labor in relationships is the effort that a person puts into managing their own emotions, as well as the 
                    emotions of others, in order to maintain a positive and harmonious relationship. This can include things like 
                    suppressing negative feelings, putting on a happy face, or going out of one's way to make their partner feel loved 
                    and supported.</p>

                <SubSubSubTitle>How can we talk about emotional labour?</SubSubSubTitle>
                <ol className="m-list">
                    <li><p>It's important to choose a time and place that is calm and free from stress when discussing a difficult 
                        topic with your partner. This will help create a comfortable and safe environment where you can both be more 
                        rational and open to hearing each other's perspectives. Try to avoid bringing up the topic during an argument 
                        or other stressful situation, as this may not be the best time for a constructive conversation.</p></li>
                    <li><p>When communicating with your partner, it's helpful to use "I" statements rather than "you" statements. For 
                        example, instead of saying "You haven't been supporting me," try saying "I feel like I'm not getting the 
                        support I need." This helps to avoid an accusatory tone and prevents the conversation from becoming defensive 
                        or argumentative. By using clear and direct "I" statements that describe your own emotions and needs, you can 
                        create a more open and productive dialogue with your partner.</p></li>
                    <li><p>It's important to give your partner time to process when you disclose that you have been feeling overwhelmed 
                        by emotional labor. Your partner may be surprised by this revelation and may need some time to think and feel 
                        their own emotions before continuing the conversation. Be patient and don't expect an immediate response or 
                        solution. It's okay to give your partner time to process and come to terms with their own feelings before 
                        discussing further.</p></li>
                </ol>

                <p>Now that we have a deeper understanding of what it means to be in a healthy and safe relationship, let’s consider 
                    the ways in which navigating relationships and dating culture can be different and at times, challenging, for 
                    immigrant women and girls.</p>
            </Content>
        </Fragment>
    );
};