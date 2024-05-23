import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content,  
    SubSubTitle,
    SubSubSubTitle} from '../pages.styles';
import '../pages.css';
import styled from "styled-components";

export const Activity = styled.section`
    margin: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2rem;
    background-color:#d8edf2;
    border: 2px solid #d8edf2;
    border-radius: 25px 25px 25px 25px;
`;

export const PageFive = () => {
    return (
        <Fragment>
            <Content>
            <SubSubTitle>REPRODUCTIVE HEALTH SYSTEMS</SubSubTitle>
                    <SubSubSubTitle>What function does the reproductive system have in our bodies?</SubSubSubTitle>
                    <p>The reproductive system serves to produce the sperm and egg cells that allow us to reproduce. It is also responsible 
                        for transporting and sustaining these cells, nurturing the developing offspring, and producing hormones.</p>
                    <p><a href="https://kidshealth.org/en/kids/puberty.html">Kids Health</a> is a great resource to learn about puberty and some of the changes that the body goes through. </p>
                    <Activity>
                        <p><b>ACTIVITY: </b>Create 3 lists (male, female, everyone) and get students to determine if it’s a male part, 
                            female part, or body part everyone has. Let’s also keep in mind that some people’s bodies don’t fit neatly into 
                            one category or another and they might be born with ambiguous genitalia. Additionally, it is also important to 
                            keep in mind that body parts are not limited to one gender as many people do not identify as male or female.</p>
                    </Activity>
                    <SubSubSubTitle>Male Reproductive Systems (Those who are biologically male)</SubSubSubTitle>
                    <table>
                        <tr>
                            <th>Name of body part</th>
                            <th>Function</th>
                        </tr>
                        <tr>
                            <td>Penis</td>
                            <td>Allows passage of urine and semen. Provides sensation (has many nerve endings). The average penis measures 3–4 
                                inches when it's not erect (flaccid) and 5–7 inches when erect.</td>
                        </tr>
                        <tr>
                            <td>Foreskin</td>
                            <td>Protects the glans of the penis. Provides sensation. Males who have been circumcised don’t have one.</td>
                        </tr>
                        <tr>
                            <td>Scrotum</td>
                            <td>Holds testes, controls temperature, provides sensation </td>
                        </tr>
                        <tr>
                            <td>Testes (aka testicles)</td>
                            <td>Produces sperm and sex hormones (androgens and testosterone). Each is made of 500–1,200 feet of tightly 
                                coiled tubes. </td>
                        </tr>
                        <tr>
                            <td>Epididymis</td>
                            <td>Allows maturation of sperm.</td>
                        </tr>
                        <tr>
                            <td>Spermatozoa</td>
                            <td>Cells are called sperm. Sperm carry the strings of genes (called chromosomes) or DNA instructions in case 
                                the sperm meets with an egg cell and fertilizes it.</td>
                        </tr>
                        <tr>
                            <td>Spermatic cords</td>
                            <td>Supply blood to the testicle. Provide sensation. Carry sperm from the testicles. </td>
                        </tr>
                        <tr>
                            <td>Vas Deferens</td>
                            <td>Provides storage for sperm. Allow passage of sperm. Carries sperm from the testes.</td>
                        </tr>
                        <tr>
                            <td>Seminal vesicles</td>
                            <td>Contributes fructose, also known as sugar to semen for nourishing the sperm</td>
                        </tr>
                        <tr>
                            <td>Semen</td>
                            <td>Helps sperm live longer and travel better. Contains hundreds of millions of sperm. </td>
                        </tr>
                        <tr>
                            <td>Prostate gland</td>
                            <td>Produces most of the fluid that makes up semen.</td>
                        </tr>
                        <tr>
                            <td>Cowper’s gland (pair)</td>
                            <td>Produces pre–ejaculatory fluid (called “pre–cum”) that cleans the urethra to protect 
                                sperm. Some pre–ejaculatory fluid may contain sperm. </td>
                        </tr>
                    </table>
                    <SubSubSubTitle>Female Reproductive systems (Those who are biologically female)</SubSubSubTitle>
                    <table>
                        <tr>
                            <th>Name of body part</th>
                            <th>Function</th>
                        </tr>
                        <tr>
                            <td>Uterus</td>
                            <td>Houses and protects embryos/fetus/baby. Allows nutrient & waste exchange with placenta 
                                during pregnancy. Nourishes an embryo before a placenta grows. </td>
                        </tr>
                        <tr>
                            <td>Cervix</td>
                            <td>The bottom section of the uterus. Produces fluids to help sperm travel. Produces a mucus 
                                plug to keep out germs during pregnancy. </td>
                        </tr>
                        <tr>
                            <td>Vagina</td>
                            <td>Allows passage of sperm. Produces fluid daily to cleanse and lubricate itself and help 
                                sperm travel. Allows passage of shed endometrium during menstrual period. Allows passage of 
                                baby. Is the middle of the three openings between a female’s legs.</td>
                        </tr>
                        <tr>
                            <td>Hymen</td>
                            <td>Membranes some females have that partly cover the vaginal opening. Some girls are born without 
                                a hymen. May be stretched during use of a tampon, having finger inserted or during sexual intercourse.</td>
                        </tr>
                        <tr>
                            <td>Ovum (egg cell)</td>
                            <td>Carries strings of genes called chromosomes which mix with chromosomes of sperm if fertilization 
                                occurs. They dissolve in the Fallopian tube after about 24 hours if not fertilized.</td>
                        </tr>
                        <tr>
                            <td>Ovary</td>
                            <td>Provide storage for the ovum (eggs). Allow maturation of the ovum. Produce sex hormones 
                                (estrogen, progesterone and androgens).</td>
                        </tr>
                        <tr>
                            <td>Fallopian Tubes</td>
                            <td>Allow passage of ovum toward uterus. Allow passage of sperm from the uterus. </td>
                        </tr>
                        <tr>
                            <td>Fimbria</td>
                            <td>Guides a mature ovum, when it is released from an ovary, into a Fallopian tube.</td>
                        </tr>
                        <tr>
                            <td>Skene’s glands</td>
                            <td>Area of firm tissue towards the front wall of the vagina surrounding the urethra. 
                                Responds to pressure sometimes causing orgasm that may or may not produce fluid (the fluid is not urine). 
                                Also known as the Graffenberg–spot (G–spot) or the female prostate gland. </td>
                        </tr>
                        <tr>
                            <td>Vulva</td>
                            <td>Made up of labia majora, labia minora, and clitoris. Protect opening of urethra and vagina, as eyelids 
                                protect eyes. Provide sensation (has many nerve endings). Labia are folds of skin.</td>
                        </tr>
                        <tr>
                            <td>Clitoris</td>
                            <td>Made up of shaft, crura [internal branches], glans and hood. Provides sensation (has many nerve endings).</td>
                        </tr>
                        <tr>
                            <td>Clitoral Hood</td>
                            <td>Protects the glans of the clitoris. Provides sensation (has many nerve endings). Mostly covers the clitoris 
                                when it is not erect. </td>
                        </tr>
                    </table>
                    <SubSubSubTitle>Both Male and Female Reproductive Systems (those who are both biologically male and female)</SubSubSubTitle>
                    <table>
                        <tr>
                            <th>Name of body part</th>
                            <th>Function</th>
                        </tr>
                        <tr>
                            <td>Navel</td>
                            <td>Allows passage of oxygen and nourishment before birth. After birth it serves no purpose. Not part of 
                                the reproductive system.</td>
                        </tr>
                        <tr>
                            <td>Abdomen aka belly</td>
                            <td>Contains most internal organs. The part of the body between the rib cage and pelvis.</td>
                        </tr>
                        <tr>
                            <td>Buttocks</td>
                            <td>Provides cushion for tailbone and aids in walking and standing. Contains muscle for movement. 
                                Not part of the reproductive system. </td>
                        </tr>
                        <tr>
                            <td>Pelvis</td>
                            <td>Bowl–shaped bone structure that supports and protects the internal reproductive organs. 
                                Men’s and women’s pelvises are shaped differently so that women can give birth if they choose.</td>
                        </tr>
                        <tr>
                            <td>Cilia</td>
                            <td>Hair–like structures which line the Fallopian tubes and the epididymis. Sweep an ovum down the 
                                Fallopian tube or the sperm cells through the epididymis.</td>
                        </tr>
                        <tr>
                            <td>Bladder</td>
                            <td>Provides storage for urine. Not part of the reproductive system.</td>
                        </tr>
                        <tr>
                            <td>Urethra</td>
                            <td>Allows passage of urine. In males it allows passage of semen. In males is the tube inside the penis. 
                                In females it is below the clitoris and above the opening to the vagina. Not part of the reproductive system.</td>
                        </tr>
                        <tr>
                            <td>Anus</td>
                            <td>Allows passage of bowel movements (feces). Provides sensation (has many nerve endings). The opening from 
                                the rectum and lower intestines. Not part of the reproductive system.</td>
                        </tr>
                    </table>
                    <p>Source: <a href="https://www.advocatesforyouth.org/wp-content/uploads/storage/advfy/lesson-plans/lesson-plan-anatomy-and-physiology-part-i-and-ii.pdf">Lesson Plan - Sexual and Reproductive Anatomy and Physiology</a></p>
                    <SubSubSubTitle>Fun activities/quizzes that you can share with your students:</SubSubSubTitle>
                    <ul>
                        <li><p><a href="https://www.sciencequiz.net/newjcscience/jcbiology/Reproduction/mcq/female_reprod_mcq.htm">Sciencequiz.net</a> contains fun quizzes to learn about female anatomy and reproductive health. </p></li>
                        <li><p><a href="https://classroom.kidshealth.org/classroom/6to8/body/systems/female_reproductive_quiz.pdf">Kidshealth.org</a> has quizzes present for students from grade 6 to 8 to learn about female anatomy.</p></li>
                    </ul>
            </Content>
        </Fragment>
    );
};