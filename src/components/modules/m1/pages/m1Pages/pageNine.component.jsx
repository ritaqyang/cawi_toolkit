import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content} from '../pages.styles';
import '../pages.css';

export const PageNine = () => {
    return (
        <Fragment>
            <Content>
            <h4 className="m-subsubtitle">PREGNANCY</h4>
                    <h5 className="m-subsubsubtitle">Unintended Pregnancies </h5>
                    <p><a href="https://www.cdc.gov/reproductivehealth/contraception/unintendedpregnancy/index.htm">Unintended 
                        pregnancy refers to a pregnancy that is either unwanted or mistimed</a>. It is important to understand 
                        this concept in order to understand population fertility and the need for contraception and family planning. 
                        Most unintended pregnancies occur due to lack of or inconsistent use of birth control. In order to effectively 
                        prevent or plan for pregnancy, it is important to understand an individual's reproductive goals, and this may 
                        include contraceptive services, pregnancy testing, and counselling.</p>
                    <h5 className="m-subsubsubtitle">How does one get pregnant?</h5>
                    <p>Pregnancy is the result of a process that has many steps. <a href="https://www.cdc.gov/reproductivehealth/infertility/index.htm">To get pregnant</a>:</p>
                    <ul>
                        <li><p>First, a woman’s body must release an egg from one of her <a href="https://www.womenshealth.gov/glossary#ovaries">ovaries</a>.</p></li>
                        <li><p>Then, a man’s sperm must join with the egg along the way (fertilize).</p></li>
                        <li><p>Following this, the fertilized egg must go through a <a href="https://www.womenshealth.gov/glossary#fallopian">fallopian tube</a> toward 
                            the <a href="https://www.womenshealth.gov/glossary#uterus">uterus</a>.</p></li>
                        <li><p>Lastly, the embryo must attach to the inside of the uterus (implantation). </p></li>
                    </ul>
                    <p>Here you can find a full list of <a href="https://www.cdc.gov/reproductivehealth/contraception/index.htm">FDA 
                        approved contraception methods</a>.</p>
                    <p>There is also the option of <a href="https://www.cdc.gov/reproductivehealth/contraception/qfp.htm">contraceptive 
                        counselling</a> to help clients choose a method of contraception.</p>
                    <p><a href="https://www.cdc.gov/reproductivehealth/contraception/contraception_guidance.htm">CDC Contraceptive 
                        Guidance</a> for Healthcare providers.</p>
                    <h5 className="m-subsubsubtitle">Miscarriages and the emotional impacts</h5>
                    <p>Miscarriage is an event where everyone is impacted differently. Many women experience an emotional roller coaster 
                        as their bodies go through hormonal shifts and re-adjust. They may experience many different emotions such as 
                        numbness, disbelief, sadness, depression, guilt, anger and many others. Most women who will experience miscarriages 
                        don’t talk about them 
                        (<a href="https://www.stanfordchildrens.org/en/topic/default?id=coping-with-miscarriage-1-4036">Stanford medicine 
                        (Children’s Health)</a>) has a resource on coping with miscarriage and dealing with feelings of loss. Miscarriage 
                        also induces an intense period of emotional distress which may worsen over months. 
                        <a href="https://www.tommys.org/baby-loss-support/miscarriage-information-and-support/support-after-miscarriage/your-feelings-and-emotions-after-miscarriage">Tommy’s</a> 
                        also shares a resource on support after miscarriages as well as the feelings and emotions one faces after miscarriages. </p>
                    <div className="follow-up">
                        <h5 className="m-subsubsubtitle">Following each lesson place, it is a good idea to measure students' baseline 
                            knowledge and what they learned during the lesson. Here are a few questions you can ask students:</h5>
                        <ul>
                            <li><p>Before: On a scale of 1 to 10, how would you rate your current knowledge around topics regarding SRH?</p></li>
                            <li><p>After: On a scale of 1 to 10, how would you rate your knowledge of SRH after our current session?</p></li>
                            <li><p>What are the three main takeaways from this session?</p></li>
                            <li><p>What is something new that you have learned?</p></li>
                            <li><p>What is something you wish you could learn about more that was not mentioned in the seminar?</p></li>
                        </ul>
                    </div>
            </Content>
        </Fragment>
    );
};