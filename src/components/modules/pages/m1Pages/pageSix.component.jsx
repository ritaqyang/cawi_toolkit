import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content,  
    SubSubTitle,
    SubSubSubTitle,
    TextBox} from '../pages.styles';
import '../pages.css';
import styled from "styled-components";
import Checkbox from '../../checkbox.component';

export const DutyToReport = styled.section`
    padding: 2rem;
    border: 5px solid #ff5757;
    border-radius: 25px 25px 25px 25px;
`;

export const DutyTitle = styled.section`
    font-size: 3rem;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
`;

export const DutySubTitle = styled.section`
    font-size: 2rem;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
`;

export const PageSix = ({onCompleteToggle, checked}) => {
    return (
        <Fragment>
            <Content>
                <SubSubTitle>FEMALE GENTIAL MUTILATION</SubSubTitle>
                    <p>When teaching or facilitating conversations around anatomy and reproductive health, it is important to keep in mind 
                        factors that may impact how one perceives their own anatomy. If this lesson is for the community members it should 
                        come with a content warning. Also, make sure to have support service information (counselling services) on site 
                        (like a counsellor there for this season) or contact information on hand if a woman needs to talk to someone. 
                        Facilitators need to know that this will likely trigger some people in the class. There may also be a chance your 
                        facilitator has undergone FGM/C and needs to be comfortable talking about the issue and acknowledging it as a 
                        human rights abuse, not a cultural practice.</p>
                    <p>Female Genital Mutilation/ Cutting (FGM/C) is an example of a procedure that can dramatically impact a woman’s body 
                        perception and functionality. According to the World Health Organization, female genital mutilation also known as 
                        “female genital cutting” or “female genital circumcision” is a “ procedure that involves partial or total removal 
                        of the external female genitalia or another injury to the female genital organs for non-medical reasons.” The 
                        practice is harmful as it interferes with the natural functions of girls' and women's bodies. FGM/C is a human 
                        rights violation and child abuse that has short-term and long-term mental and physical health implications.</p>
                    <SubSubSubTitle>Types of Female Genital Mutilation (FGM/C) (<a href="https://www.who.int/teams/sexual-and-reproductive-health-and-research-(srh)/areas-of-work/female-genital-mutilation/types-of-female-genital-mutilation">World Health Organization</a>)</SubSubSubTitle>
                    <p><b>Type I: </b>Also known as clitoridectomy; partial or total removal of the clitoral glans (external and visible part of 
                        the clitoris, which is a sensitive part of the female genital) and/or prepuce/clitoral hood.</p>
                    <p><b>Type II: </b>Also known as excision; partial or total removal of clitoral glans and labia minora with or without removal 
                        of labia majora.</p>
                    <p><b>Type III: </b>Also known as infibulation; the narrowing of the vaginal opening through the creation of a covering seal. 
                        The seal is formed by cutting and repositioning the labia minora or labia majora. This is also the most extreme 
                        type of FGM as it involves the removal of everything. </p>
                    <p><b>Type IV: </b>Includes other harmful procedures to the female genitalia. These may include pricking, piercing, incising, 
                    scraping, and cauterization. </p>
                    <TextBox>
                    <SubSubSubTitle>Immediate health risks associated with FGM/C (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/lessons/99oH6a79XcHhYPCEm76FDmauD9PyKY3A">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</SubSubSubTitle>
                    <ul className="m-list"> 
                        <li><p>Severe pain</p></li>
                        <li><p>Urinary retention</p></li>
                        <li><p>Damage to the urethra and/or anus</p></li>
                        <li><p>Infection</p></li>
                        <li><p>Death (Hearst & Molnar, 2013; <a href="https://www.who.int/publications/i/item/WHO-RHR-19.19">WHO, 2019</a>)</p></li>
                    </ul>
                    <p>Immediate complications may also lead to long-term impacts, including psychological trauma. Children are often 
                        restrained during the procedure, which contributes to further trauma experienced.</p>
                    </TextBox>
                    <SubSubSubTitle>Long Term health risks associated with FGM/C (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/lessons/99oH6a79XcHhYPCEm76FDmauD9PyKY3A">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</SubSubSubTitle>
                    <ul>
                        <li><p>Psychological: People who have experienced FGM/C may suffer from psychological trauma, such as anxiety, 
                            depression, and other mood disorders. This may lead to disturbing thoughts and feelings related to the moment 
                            the person was cut. </p></li>
                        <li><p>Obstetrical: Formation of painful scar tissues that tear during childbirth, increased risk of stillbirths, 
                            and increased maternal mortality are some of the obstetrical issues that individuals may experience. </p></li>
                        <li><p>Reproductive: As a result of FGM/C, some of the effects may be chronic pain, infections, development of cysts, 
                            painful urination, decreased sexual pleasure, infertility and also difficulty with menstruation. </p></li>
                    </ul>
                    <TextBox>
                    <SubSubSubTitle>Why is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</SubSubSubTitle>
                    <p>FGM/C is still widely performed across the world. There are many reasons why it is still performed. From a 
                        psychosexual perspective, some communities believe that FGM reduces sexual desire, decreases temptations for 
                        premarital sex, and ensures women remain faithful within their marriage. In fact, FGM/C makes no difference 
                        to sexual appetite but can harm the enjoyment of sex (<a href="https://www.who.int/publications/i/item/WHO-RHR-19.19">WHO, 2019</a>). 
                        There are also many social pressures to conform and a lot of acceptance following FGM/C. Many girls face a 
                        fear of being rejected as FGM is also considered a girl’s rite of passage into women-hood. Many people believe 
                        it will make women more fertile, despite the fact that there is no scientific evidence that proves this.</p>
                    <p>In addition, some communities believe that it is important since women’s genitalia are considered “ugly” or “dirty”. 
                        Many groups also use religion as a justification for this practice, however, there is no scripture or religious 
                        practice that encourages FGM/C. </p>
                    <p>In many communities, FGM/C is a prerequisite for marriage. As well, virginity before marriage is seen as important 
                        to preserve the family’s honour. Infibulation is more common in these communities as it is seen as “proof” of 
                        virginity. Families, therefore, believe that FGM/C will ensure a girl’s future marriage and preserve family 
                        honour (Berg & Denison, 2013). </p>
                    <p>Where women are largely dependent on men, economic necessity can be a major driver of FGM/C. For example, 
                        in certain patriarchal societies where women are seen as the property of men, girls who have undergone FGM/C 
                        get a higher bride price. (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview</a>)</p>
                    </TextBox>
                    <SubSubSubTitle>When and how is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</SubSubSubTitle>
                    <p>FGM/C is typically performed between birth and 15 years of age. It is also performed at significant milestones 
                        such as infancy, at the onset of puberty, prior to marriage, and during a first pregnancy. It is often not 
                        done in a sterile or hygienic environment and the individuals performing FGM/C are not medical practitioners or 
                        professionals. In type III FGM/C, women and girls undergo repeated FGM/C after childbirth where they are 
                        infibulated repeatedly. The harmful practice is often performed using sharp objects such as knives, razor-blade, 
                        glass, etc. </p>
                    <SubSubSubTitle>Where is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</SubSubSubTitle>
                    <p>FGM/C has been identified to be performed in more than 90 countries including Canada. In the past, it was 
                        performed in Europe as a cure for hysteria, epilepsy and excessive masturbation. Currently, out of 30 
                        countries in Africa and Asia, 2 million individuals have undergone FGM, and 3 million children are under 
                        risk to undergo FGM/C. However, there is no reliable data present on this.</p>
                    <p>FGM/C is illegal in Canada, however, there is something known as vacation cutting. During the Canadian 
                        holiday period, December and summer, girls are taken back to countries where FGM/C is either practised 
                        or the FGM/C laws are not enforced. Over this time period, FGM/C is performed on them and time away gives 
                        them a chance to ‘heal’ before returning home to Canada. They are not allowed to talk about the impacts and 
                        experiences after they return. </p>
                    <SubSubSubTitle>FGM/C in the Canadian context (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</SubSubSubTitle>
                    <p>In Canada, there are many factors that prevent people from further learning about the harmful effects and 
                        risks of FGM/C. Limited integration makes families that are less integrated into Canadian society more 
                        likely to carry out FGM/C due to the lack of access to information and educational resources. They may be 
                        less aware of the harms caused by FGM/C and not understand that FGM/C is illegal in Canada. Family history 
                        also makes women and girls more susceptible to receiving FGM/C as they may be next in line if their immediate 
                        or extended family members have undergone FGM/C. For educators, facilitators, and teachers, it is important 
                        to observe any child that is withdrawn from a class that teaches about the body and sexuality as that child 
                        may be at a higher risk. Removal may be so parents wishes to not inform their child about body, rights, or 
                        they have undergone FGM/C. </p>
                    <SubSubSubTitle>Deinfibulation</SubSubSubTitle>
                    <p>The procedure consists of cutting open the narrowed vaginal opening in a woman who has been infibulated 
                        (Type III), which is often necessary for improving health and well-being as well as to allow intercourse 
                        or to facilitate childbirth.</p>
                    <SubSubSubTitle>FGM/C is a crime in Canada</SubSubSubTitle>
                    <p>In 1997, FGM/C was added to the Canadian Criminal Code as a form of aggravated assault, with a possible 
                        sentence of up to 14 years in prison (<a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-268.html">Government of Canada, 2022</a>). 
                        <b>In Canada, FGM/C is a crime. </b>It is also criminal to take a child outside Canada to have FGM/C performed. 
                        The amendment holds parents responsible for the violence inflicted on their child, whether it was performed 
                        firsthand or consent was given to a third party (<a href="https://www3.ohrc.on.ca/sites/default/files/policy%20on%20female%20genital%20mutilation%20fgm.pdf">Government of Canada, 2022; Ontario Human Rights Commission, 2009</a>). 
                        Performing female genital mutilation/cutting on any child under 18 years of age is a form of child abuse 
                        (<a href="https://justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/caw-mei/p11.html">Government of Canada, 2021</a>). </p>
                    <SubSubSubTitle>Duty to report</SubSubSubTitle>
                    <p>Under Canadian child welfare laws, every adult in Canada has an obligation to report child abuse and neglect 
                        if there is knowledge or suspicion that it is occurring. Professionals who work with children and youth have 
                        an added responsibility to report. This is called the duty to report.</p>
                    <DutyToReport>
                        <DutyTitle>DUTY TO REPORT</DutyTitle>
                        <DutySubTitle><a className="duty-link" href="https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/caw-mei/p11.html">Child Abuse is Wrong: What can I do?</a></DutySubTitle>
                        <DutySubTitle><a className="duty-link" href="https://www.ontario.ca/page/report-child-abuse-and-neglect">Ontario’s Duty to Report</a></DutySubTitle>
                        <DutySubTitle><a className="duty-link" href="https://www.alberta.ca/preventing-child-abuse-information-for-educators">Alberta Educators’ Duty to Report</a></DutySubTitle>
                        <DutySubTitle>Canadian Resources to learn more about FGM/C and where to find supports for survivors: </DutySubTitle>
                        <ul>
                            <li><p>End FGM/C Canada Network : <a href="https://www.endfgm.ca/resources">Resources</a> / FGM/C Foundation 
                                Training Module / FGM/C Teacher’s Module</p></li>
                            <li><p>Women’s Health in Women’s Hands : FGM/C Resource Map</p></li>
                        </ul>
                    </DutyToReport>
                    <Checkbox checked={checked} onChange={onCompleteToggle}  />
            </Content>
        </Fragment>
    );
};