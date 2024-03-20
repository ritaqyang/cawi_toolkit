import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content} from '../pages.styles';
import '../pages.css';

export const PageFour = () => {
    return (
        <Fragment>
            <Content>
            <h4 className="m-subsubtitle">PUBERTY</h4>
                    <h5 className="m-subsubsubtitle">What is puberty?</h5>
                    <p>Period of human development during which an individual becomes capable of sexual reproduction. 
                        During puberty, there are changes in physical, emotional, social, and cognitive levels.</p>
                    <h5 className="m-subsubsubtitle">When does puberty usually take place?</h5>
                    <p>Puberty typically begins between 8-12 years old. For females, it often begins 1-2 years earlier than males, 
                        and lasts for several years, with rapid changes slowing down around 14 for females and 16 for males.</p>
                    <h5 className="m-subsubsubtitle">What are some changes that biological girls and boys might face when starting puberty?</h5>
                    <p>When girls start puberty, they may face emotional and physical changes. They may feel more emotional 
                        and experience different mood swings. It is completely normal to feel this way. For physical changes, 
                        girls may grow taller, might get heavier, grow breasts, their hips widen, hair grows under the arms, 
                        hair grows between the legs, sweat more may develop pimples/spots. </p>
                    <p>When boys start puberty, they may face emotional and physical changes. Similar to girls, boys also undergo 
                        puberty; however boys are more likely to become less talkative and may disengage by showing shy behaviours. 
                        In terms of physical changes, boys will get taller, muscles will grow, facial hair, grow hair on their 
                        underarms, develop pimples, and sweat more, and their voices will crack. </p>
            </Content>
        </Fragment>
    );
};