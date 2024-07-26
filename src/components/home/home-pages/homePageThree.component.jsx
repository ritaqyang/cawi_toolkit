import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Text, HomeSubTitle} from "./homePages.styles";
import { Content } from "../../modules/pages/pages.styles";
import { LandAck, LandAckContent } from "../../modules/pages/m1Pages/pageOne.component";

export const HomePageThree = () => {
    return (
        <>
        <Content>
            <HomeSubTitle>FOR FACILITATORS, TEACHERS, AND EDUCATORS</HomeSubTitle>
            <Text>Prior to facilitating discussions or sessions on sexual and reproductive health (SRH), it is important 
                to begin by acknowledging that we do not have all the answers to the youths’ questions and will seek 
                information in partnership with the youth. It is also important to acknowledge that we do not know the 
                answers to every question and that this is as much of a process of learning for us as it is for them. </Text>
            <HomeSubTitle>Anti-Oppressive Teaching</HomeSubTitle>
            <Text>When working towards an anti-oppressive teaching approach, it is important to acknowledge that it will 
                look different for everyone. When talking about social justice in classrooms, it is imperative to use an 
                approach that touches on processes and goals to provide students with a critical understanding of social, 
                historical, cultural, political, economic, and ethical contexts. Anti-oppressive educators have recognized 
                the problematic nature of biased, non-inclusive curricula that are Eurocentric, and gender normative 
                (Kenway & Willis, 1998), heterosexist (Lipkin, 2000), or class-biased (Apple, 1995). It is important for 
                educators to move away from focusing only on certain stories and perspectives as such curricula may 
                privilege certain groups of students over others. For students who are only able to gain partial knowledge, 
                it may influence the way they perceive SRH, how they think, and how they relate to others. As a result, 
                inclusive curricula are important to ensure we are not only learning but also embracing various social 
                differences while affirming people’s personal identities (Kumashiro, 2002). </Text>
            <Text>In the context of SRH, anti-oppressive education would be one which does not marginalize any particular 
                way of being and instead focuses on an inclusive and accessible approach to learning and teaching. Many 
                curriculums will often omit or ignore the request to incorporate important SRH topics such as the spectrum 
                of sexuality, sexual pleasure, birth control, racialization, fetishization and the impact on the perception 
                of relationships, sexual assault, lack of abortion access, and many others. This may be due to various 
                factors as educators are often not supported by institutions to properly address the topics or due to the 
                fear of causing controversies with parents or guardians. Our current sexual health education is often 
                centred around heterosexuality, and topics around lesbian, gay, bisexual, transgender, queer, or queer 
                questioning sexualities are often not included in SRH education leading to a lack of general knowledge 
                about the LGBTQ2S+ community. This lack of knowledge may lead to further issues as there will be gaps or 
                less significance given to these topics, leading to more oppression and further marginalization of these 
                groups. </Text>
            <Text>
                <b>As educators, you can work towards an anti-oppressive teaching approach by:</b>
                <ul>
                    <li>Treating students from all backgrounds with dignity and respect.</li>
                    <li>Supporting students from diverse social and cultural backgrounds by paying attention to their needs.</li>
                    <li>Ensuring students feel physically and psychologically safe and secure during conversation or dialogue 
                        that is taking place and are able to bring forward any concerns either face to face or anonymously. </li>
                    <li>Ensuring that every student has a voice in the decisions that affect them and that they are able to 
                        bring their voices and opinions across in a way that is safe and comfortable for them. </li>
                </ul>
            </Text>
            <Text>
                Understanding that the “isms” happen at all levels, which are reinforced by societal norms, institutional biases, 
                interpersonal attractions, etc:
                <ul>
                    <li><b>Individual</b> e.g., feelings, beliefs, values</li>
                    <li><b>Interpersonal</b> e.g., actions, behaviours and language</li>
                    <li><b>Institutional</b> e.g., legal system, education system, public policy, hiring practices, media images</li>
                    <li><b>Societal/Cultural</b> e.g., collective ideas about what is “right”</li>
                </ul>
            </Text>
            <Text>Privilege is the systemic or structural advantages we experience based on our social identities or the:</Text>

            <LandAck>
                <LandAckContent>“unearned social power accorded by the formal and informal institutions of society to all members 
                    of a dominant group. It is usually invisible to those who have it, but nevertheless it puts them at an 
                    advantage over those who do not have it.” 
                    (<a href="https://www.coloursofresistance.org/definitions/privilege/">Colours of Resistance</a>)</LandAckContent>
            </LandAck>

            <Text>
                <b>How can we be aware of our privilege when pursuing a teaching role?</b>
                <ul>
                    <li>Pay attention to trends. Who is speaking up? Who is staying silent and why may this be? How can you change 
                        the way you facilitate conversations to encourage new voices to join the discussion?</li>
                    <li>Give time for participants to process individually or with their partners before beginning big group 
                        discussions.</li>
                    <li>Consider the layout of the room and how it can be structured in a way to includes more voices. </li>
                    <li>Go where the learning is. The learning may be in the activity you planned as a facilitator, but this could 
                        also be a story or critical incident that comes up during teaching.</li>
                </ul>
            </Text>
            <Text>
                <b>How do we create, implement and ensure safer spaces?</b>
                <ul>
                    <li>Setting clear guidelines and expectations for behaviour, actively promoting inclusivity and diversity, and 
                        providing resources for those who may need support. </li>
                    <li>Actively addressing any instances of discrimination or harassment. </li>
                    <li>Maintain ongoing effort and commitment, including regular check-ins and evaluations of the space to ensure 
                        that it remains inclusive and safe for all. </li>
                </ul>
            </Text>
        </Content>
        </>
    );
};