import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content} from '../pages.styles';
import '../pages.css';

export const PageThree = () => {
    return (
        <Fragment>
            <Content>
                <h4 className="m-subsubtitle">SOCIAL DETERMINANTS OF HEALTHCARE</h4>
                <p>Social Determinants of healthcare are non-medical factors that may influence health outcomes.</p>
                <p><b>Poverty and unequal access to healthcare: </b>Those who struggle to afford basic needs often 
                        are unable to access quality sexual health services. Oftentimes sexual health services and resources 
                        are inaccessible to populations such as those who live in rural areas or Indigenous reserves or even 
                        those who may not speak national languages like English or French. This can also be concerning when 
                        one’s family members may also not be fluent in either language, which may result in difficulties in 
                        translating what the clinical team may be saying to the patient. </p>
                    <p><b>Racism: </b>Oftentimes there is a deep mistrust for the healthcare system in systematically 
                        marginalized communities. An example of this is that individuals will avoid being tested for STIs/STDs
                        because they fear discriminatory treatment from healthcare providers. The discrimination, racism, and 
                        stigma those from marginalized communities may experience in the healthcare system impact the quality 
                        of care, understanding of their personal health risks, adherence to treatment plans, and willingness to 
                        seek medical care in the future. </p>
                    <p><b>Lack of access to education: </b>Some people may have gotten no SRH education, and they may not 
                        know about access to abortions, family planning services, or even services like having a surrogate due 
                        to health concerns. All of these together can combine to affect one’s overall sexual and reproductive 
                        health and even one’s quality of life. </p>
                    <p>Prior to starting sessions, try to begin with an icebreaker to understand where students are with 
                        knowledge levels around sexual and reproductive health education prior to the session. </p>
                    <div className="icebreaker">
                        <p><b>Icebreaker: </b>How would you rate what you were taught about sexual and reproductive health as a 
                            young person? </p>
                        <ol>
                            <li><p>Perfect: Thorough, informative & non-judgmental. </p></li>
                            <li><p>Pretty good: Got a lot of info, but I still had questions. </p></li>
                            <li><p>Meh: Ok, but I didn’t completely understand what I learned. </p></li>
                            <li><p>Really bad: I received misinformation about the topics or received incomplete information.</p></li>
                            <li><p>Non-existent: I wasn’t told anything & I was discouraged from asking any question.</p></li>
                        </ol>
                    </div>
            </Content>
        </Fragment>
    );
};