import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import './m1.page.styles.css';
import ModuleNav from '../../../components/modules/m1/moduleNav/moduleNav.component';
import ModuleNavElement from '../../../components/modules/m1/moduleNav/mNavElement.component';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {PageOne} from '../../../components/modules/m1/pages/m1Pages/pageOne.component';
import {PageTwo} from '../../../components/modules/m1/pages/m1Pages/pageTwo.component';
import {PageThree} from '../../../components/modules/m1/pages/m1Pages/pageThree.component';
import {PageFour} from '../../../components/modules/m1/pages/m1Pages/pageFour.component';
import {PageFive} from '../../../components/modules/m1/pages/m1Pages/pageFive.component';
import {PageSix} from '../../../components/modules/m1/pages/m1Pages/pageSix.component';
import {PageSeven} from '../../../components/modules/m1/pages/m1Pages/pageSeven.component';
import {PageEight} from '../../../components/modules/m1/pages/m1Pages/pageEight.component';
import {PageNine} from '../../../components/modules/m1/pages/m1Pages/pageNine.component';

gsap.registerPlugin(ScrollTrigger);

const Module1Page = () => {

    const [displayOption, setDisplayOption] = useState("1");
    const [activeOption, setActiveOption] = useState("1");

    const handleDisplayOptionChange = (option) => {
        setDisplayOption(option);
        setActiveOption(option);
    };

    /*const topicRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];*/

    const contentRef = useRef(null);
    const navRef = useRef(null);
    const hideRef = useRef(null);
    const showRef = useRef(null);
    const navElRef = useRef(null);

    //const [activeOption, setActiveOption] = useState(topicRefs[0]);

    /*const handlePageChange = (ref) => {
        setActiveOption(ref);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }*/


    const handleNavHide = () => {
        gsap.to(navElRef.current, {
            height: '0px',
        })
        gsap.to(navRef.current, {
            width: '5%',
            delay: 0.5
        })
        gsap.to(contentRef.current, {
            width: '100%',
            delay: 0.5
        })
        gsap.to(showRef.current, {
            display: 'inline'
        })
        gsap.to(hideRef.current, {
            display: 'none'
        })
    }

    const handleNavShow = () => {
        gsap.to(contentRef.current, {
            width: '80%'
        })
        gsap.to(navRef.current, {
            width: '20%'
        })
        gsap.to(navElRef.current, {
            height: 'auto',
            delay: 0.5
        })
        gsap.to(showRef.current, {
            display: 'none',
        })
        gsap.to(hideRef.current, {
            display: 'inline'
        })
    }

    return (
        <div className="m-page">
            <section className="m-nav" ref={navRef}>
                <div className="hide-and-show">
                    <Link className="hide-link" ref={hideRef} onClick={handleNavHide} to="#">HIDE</Link>
                    <Link className="show-link" ref={showRef} onClick={handleNavShow} to="#">SHOW</Link>
                </div>
                <ul className="nav-elements" ref={navElRef}>
                    <ModuleNavElement isActive={activeOption === "1"} to="#" onClick={() => handleDisplayOptionChange("1")}>1. WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "2"} to="#" onClick={() => handleDisplayOptionChange("2")}>2. HEALTH EQUITY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "3"} to="#" onClick={() => handleDisplayOptionChange("3")}>3. SOCIAL DETERMINANTS OF HEALTHCARE</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "4"} to="#" onClick={() => handleDisplayOptionChange("4")}>4. PUBERTY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "5"} to="#" onClick={() => handleDisplayOptionChange("5")}>5. REPRODUCTIVE HEALTH SYSTEMS</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "6"} to="#" onClick={() => handleDisplayOptionChange("6")}>6. FEMALE GENTIAL MUTILATION</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "7"} to="#" onClick={() => handleDisplayOptionChange("7")}>7. HIV, STI'S AND SAFE SEX</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "8"} to="#" onClick={() => handleDisplayOptionChange("8")}>8. PERIODS AND PERIOD PAIN (MENSTRUAL CARE)</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === "9"} to="#" onClick={() => handleDisplayOptionChange("9")}>9. PREGNANCY</ModuleNavElement>
                </ul>
            </section>
            <section className="m-content" ref={contentRef}>
                {displayOption === "1" && <PageOne />}
                {displayOption === "2" && <PageTwo />}
                {displayOption === "3" && <PageThree />}
                {displayOption === "4" && <PageFour />}
                {displayOption === "5" && <PageFive />}
                {displayOption === "6" && <PageSix />}
                {displayOption === "7" && <PageSeven />}
                {displayOption === "8" && <PageEight />}
                {displayOption === "9" && <PageNine />}
            </section>
        </div>
        /*<div className="m-page">
            <section className="m-nav" ref={navRef}>
                <div className="hide-and-show">
                    <Link className="hide-link" ref={hideRef} onClick={handleNavHide} to="#">HIDE</Link>
                    <Link className="show-link" ref={showRef} onClick={handleNavShow} to="#">SHOW</Link>
                </div>
                <ul className="nav-elements" ref={navElRef}>
                    <ModuleNavElement isActive={activeOption === topicRefs[1]} onClick={() => handlePageChange(topicRefs[1])} to="#">1. WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[2]} onClick={() => handlePageChange(topicRefs[2])} to="#">2. HEALTH EQUITY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[3]} onClick={() => handlePageChange(topicRefs[3])} to="#">3. SOCIAL DETERMINANTS OF HEALTHCARE</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[4]} onClick={() => handlePageChange(topicRefs[4])} to="#">4. PUBERTY</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[5]} onClick={() => handlePageChange(topicRefs[5])} to="#">5. REPRODUCTIVE HEALTH SYSTEMS</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[6]} onClick={() => handlePageChange(topicRefs[6])} to="#">6. FEMALE GENTIAL MUTILATION</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[7]} onClick={() => handlePageChange(topicRefs[7])} to="#">7. HIV, STI'S AND SAFE SEX</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[8]} onClick={() => handlePageChange(topicRefs[8])} to="#">8. PERIODS AND PERIOD PAIN (MENSTRUAL CARE)</ModuleNavElement>
                    <ModuleNavElement isActive={activeOption === topicRefs[9]} onClick={() => handlePageChange(topicRefs[9])} to="#">9. PREGNANCY</ModuleNavElement>
                </ul>
            </section>
            <section className="m-content" ref={contentRef}>
                <section ref={topicRefs[0]} className="m-titlepage">
                    <h2 className="m-title">LESSON PLAN #1:</h2>
                    <h3 className="m-subtitle">WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</h3>
                </section>
                <section ref={topicRefs[1]} className="topic-1">
                    <h4 className="m-subsubtitle">WHAT IS SEXUAL & REPRODUCTIVE HEALTH?</h4>
                    <p>Sexual and reproductive health means your physical, mental, emotional 
                        and social well-being as it relates to your sexuality (<a href="https://myhealth.alberta.ca/sexual-reproductive-health">My Health Alberta</a>). 
                        Sexuality is an important part of being human and can change as you go 
                        through different stages of life. Your sexuality includes your:</p>
                    <ul>
                        <li><p>Values and relationships include the perception of relationships as 
                                well as a person’s values, beliefs and attitudes.</p></li>
                        <li><p>Sexual activity which can depend on the mode of life such as student, 
                                full-time worker, part-time worker, etc. </p></li>
                        <li><p>Communication and socialization such as learning and unlearning social 
                                cues of how to act in sexual relationships. </p></li>
                        <li><p>Experiences, self-image, and personality such as good and bad experiences 
                                that can impact a person's relationship to their sexuality differently. </p></li>
                        <li><p>Sex assigned at birth which can impact how one interacts with their 
                                sexuality depending on society’s expectations or norms. </p></li>
                        <li><p>Sexual orientation, for example heteronormativity often directs us in one 
                                direction and may disclude experiences. </p></li>
                        <li><p>Gender identity and expression which can impact how people interact with 
                                others in the dating world and also how they perceive themselves in the dating world. </p></li>
                    </ul>
                    <p>Workshops, seminars or sessions should always begin with Treaty Acknowledgements 
                        or Land Based Reflections. Here is an example: </p>
                    <div className="land-ack">
                        <p>“I would like to begin our session today with a land based reflection by sharing 
                            my own lived experience. I am a settler located on ______ Territory and I came to 
                            Canada from ______ with my family _ years ago. I would like to take a moment to 
                            acknowledge the land we call Canada today and the injustices towards Indigenous 
                            peoples that were taken for us to be here today. Please take 30 seconds to reflect 
                            on where you come from, the land you are situated on, and what your lived experiences 
                            are. If you feel comfortable, please share yours in the chat as well.”</p>
                    </div>
                    <h5 className="m-subsubsubtitle">Setting guidelines at the beginning of the workshop: </h5>
                    <ul>
                        <li><p>What’s said here, stays here and what’s learned, here leaves here;</p></li>
                        <li><p>Important to acknowledge and respect that we are all experts in our own opinions;</p></li>
                        <li><p>Leave space for humour to ensure that it is a light atmosphere for everyone, but 
                                keep in mind that we should remain respectful when allowing people to share their stories;</p></li>
                        <li><p>Make sure to check your own assumptions and biases;</p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Aspects of Sexual and Reproductive Health</h5>
                    <p>There are many aspects to sexual and reproductive health, such as emotional, physical, mental 
                        and social aspects. It is affected by how one relates to their sexuality. The importance of 
                        SRH is your physical and mental health and social well-being in all matters relating to the 
                        reproductive system. </p>
                    <ul>
                        <li><p><b>Social aspects </b>of SRH appear as having strong support systems when discussing 
                                topics around SRH or overcoming stigma and encouraging those around you to engage in these 
                        conversations. </p></li>
                        <li><p><b>Mental aspects </b>of SRH may include having abortions, miscarriages, and the mental 
                                health impacts that individuals may have with these experiences. SRH looks different for 
                                everyone. Different experiences in SRH can have different impacts on mental health based on 
                                context and lived experiences. </p></li>
                        <li><p><b>Physical aspects </b>of SRH may be one’s confidence regarding their own body 
                                considering past experiences they’ve had, or reducing anxiety with one’s own physical body 
                                when equipped with proper SRH tools.</p></li>
                    </ul>
                </section>
                <section ref={topicRefs[2]} className="topic-2">
                    <h4 className="m-subsubtitle">HEALTH EQUITY</h4>
                    <p>Healthy inequity within SRH recognizes systems that ensure that all persons, regardless of 
                        age, gender, sex, race, immigrant or refugee identities as well as disabilities. Government 
                        policy, healthcare systems, and other structures must value and support everyone fairly and 
                        justly. Even though there is responsibility placed on the government to do the work that I 
                        briefly mentioned, there are things that we can do in our day-to-day lives, as well as in our 
                        careers or academic spaces that promote health equity in SRH settings (<a href="https://www.npwomenshealthcare.com/what-is-sexual-and-reproductive-health-equity-and-why-does-it-matter-for-nurse-practitioners/#:~:text=Sexual%20and%20reproductive%20health%20equity%20means%20that%20systems%20ensure%20that,and%20achieving%20their%20reproductive%20goals">Nurse Practitioners in 
                        Women's Health</a>). </p>
                    <h5 className="m-subsubsubtitle">What can we do?</h5>
                    <ul>
                        <li><p>Acknowledge histories of injustice</p></li>
                        <li><p>Engage in individual and institutional self-reflection</p></li>
                        <li><p>Interrogate and reform research practices</p></li>
                        <li><p>Develop and implement equitable policy solutions</p></li>
                        <li><p>Redefine clinical practice</p></li>
                    </ul>
                </section>
                <section ref={topicRefs[3]} className="topic-3">
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
                </section>
                <section ref={topicRefs[4]} className="topic-4">
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
                </section>
                <section ref={topicRefs[5]} className="topic-5">
                    <h4 className="m-subsubtitle">REPRODUCTIVE HEALTH SYSTEMS</h4>
                    <h5 className="m-subsubsubtitle">What function does the reproductive system have in our bodies?</h5>
                    <p>The reproductive system serves to produce the sperm and egg cells that allow us to reproduce. It is also responsible 
                        for transporting and sustaining these cells, nurturing the developing offspring, and producing hormones.</p>
                    <p><a href="https://kidshealth.org/en/kids/puberty.html">Kids Health</a> is a great resource to learn about puberty and some of the changes that the body goes through. </p>
                    <div className="activity">
                        <p><b>ACTIVITY: </b>Create 3 lists (male, female, everyone) and get students to determine if it’s a male part, 
                            female part, or body part everyone has. Let’s also keep in mind that some people’s bodies don’t fit neatly into 
                            one category or another and they might be born with ambiguous genitalia. Additionally, it is also important to 
                            keep in mind that body parts are not limited to one gender as many people do not identify as male or female.</p>
                    </div>
                    <h5 className="m-subsubsubtitle">Male Reproductive Systems (Those who are biologically male)</h5>
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
                    <h5 className="m-subsubsubtitle">Female Reproductive systems (Those who are biologically female)</h5>
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
                    <h5 className="m-subsubsubtitle">Both Male and Female Reproductive Systems (those who are both biologically male and female)</h5>
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
                    <h5 className="m-subsubsubtitle">Fun activities/quizzes that you can share with your students:</h5>
                    <ul>
                        <li><p><a href="https://www.sciencequiz.net/newjcscience/jcbiology/Reproduction/mcq/female_reprod_mcq.htm">Sciencequiz.net</a> contains fun quizzes to learn about female anatomy and reproductive health. </p></li>
                        <li><p><a href="https://classroom.kidshealth.org/classroom/6to8/body/systems/female_reproductive_quiz.pdf">Kidshealth.org</a> has quizzes present for students from grade 6 to 8 to learn about female anatomy.</p></li>
                    </ul>
                </section>
                <section ref={topicRefs[6]} className="topic-6">
                    <h4 className="m-subsubtitle">FEMALE GENTIAL MUTILATION</h4>
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
                    <h5 className="m-subsubsubtitle">Types of Female Genital Mutilation (FGM/C) (<a href="https://www.who.int/teams/sexual-and-reproductive-health-and-research-(srh)/areas-of-work/female-genital-mutilation/types-of-female-genital-mutilation">World Health Organization</a>)</h5>
                    <p><b>Type I: </b>Also known as clitoridectomy; partial or total removal of the clitoral glans (external and visible part of 
                        the clitoris, which is a sensitive part of the female genital) and/or prepuce/clitoral hood.</p>
                    <p><b>Type II: </b>Also known as excision; partial or total removal of clitoral glans and labia minora with or without removal 
                        of labia majora.</p>
                    <p><b>Type III: </b>Also known as infibulation; the narrowing of the vaginal opening through the creation of a covering seal. 
                        The seal is formed by cutting and repositioning the labia minora or labia majora. This is also the most extreme 
                        type of FGM as it involves the removal of everything. </p>
                    <p><b>Type IV: </b>Includes other harmful procedures to the female genitalia. These may include pricking, piercing, incising, 
                    scraping, and cauterization. </p>
                    <h5 className="m-subsubsubtitle">Immediate health risks associated with FGM/C (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/lessons/99oH6a79XcHhYPCEm76FDmauD9PyKY3A">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</h5>
                    <ul>
                        <li><p>Severe pain</p></li>
                        <li><p>Urinary retention</p></li>
                        <li><p>Damage to the urethra and/or anus</p></li>
                        <li><p>Infection</p></li>
                        <li><p>Death (Hearst & Molnar, 2013; <a href="https://www.who.int/publications/i/item/WHO-RHR-19.19">WHO, 2019</a>)</p></li>
                    </ul>
                    <p>Immediate complications may also lead to long-term impacts, including psychological trauma. Children are often 
                        restrained during the procedure, which contributes to further trauma experienced.</p>
                    <h5 className="m-subsubsubtitle">Long Term health risks associated with FGM/C (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/lessons/99oH6a79XcHhYPCEm76FDmauD9PyKY3A">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</h5>
                    <ul>
                        <li><p>Psychological: People who have experienced FGM/C may suffer from psychological trauma, such as anxiety, 
                            depression, and other mood disorders. This may lead to disturbing thoughts and feelings related to the moment 
                            the person was cut. </p></li>
                        <li><p>Obstetrical: Formation of painful scar tissues that tear during childbirth, increased risk of stillbirths, 
                            and increased maternal mortality are some of the obstetrical issues that individuals may experience. </p></li>
                        <li><p>Reproductive: As a result of FGM/C, some of the effects may be chronic pain, infections, development of cysts, 
                            painful urination, decreased sexual pleasure, infertility and also difficulty with menstruation. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Why is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</h5>
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
                    <h5 className="m-subsubsubtitle">When and how is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</h5>
                    <p>FGM/C is typically performed between birth and 15 years of age. It is also performed at significant milestones 
                        such as infancy, at the onset of puberty, prior to marriage, and during a first pregnancy. It is often not 
                        done in a sterile or hygienic environment and the individuals performing FGM/C are not medical practitioners or 
                        professionals. In type III FGM/C, women and girls undergo repeated FGM/C after childbirth where they are 
                        infibulated repeatedly. The harmful practice is often performed using sharp objects such as knives, razor-blade, 
                        glass, etc. </p>
                    <h5 className="m-subsubsubtitle">Where is FGM/C performed (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)?</a>)</h5>
                    <p>FGM/C has been identified to be performed in more than 90 countries including Canada. In the past, it was 
                        performed in Europe as a cure for hysteria, epilepsy and excessive masturbation. Currently, out of 30 
                        countries in Africa and Asia, 2 million individuals have undergone FGM, and 3 million children are under 
                        risk to undergo FGM/C. However, there is no reliable data present on this.</p>
                    <p>FGM/C is illegal in Canada, however, there is something known as vacation cutting. During the Canadian 
                        holiday period, December and summer, girls are taken back to countries where FGM/C is either practised 
                        or the FGM/C laws are not enforced. Over this time period, FGM/C is performed on them and time away gives 
                        them a chance to ‘heal’ before returning home to Canada. They are not allowed to talk about the impacts and 
                        experiences after they return. </p>
                    <h5 className="m-subsubsubtitle">FGM/C in the Canadian context (<a href="https://rise.articulate.com/share/AMYujlqu_z7bwaRijeq6JNIgDfTQKrQ-#/">Understanding Female Genital Mutilation / Cutting: A Canadian Issue - Overview | Rise 360 (articulate.com)</a>)</h5>
                    <p>In Canada, there are many factors that prevent people from further learning about the harmful effects and 
                        risks of FGM/C. Limited integration makes families that are less integrated into Canadian society more 
                        likely to carry out FGM/C due to the lack of access to information and educational resources. They may be 
                        less aware of the harms caused by FGM/C and not understand that FGM/C is illegal in Canada. Family history 
                        also makes women and girls more susceptible to receiving FGM/C as they may be next in line if their immediate 
                        or extended family members have undergone FGM/C. For educators, facilitators, and teachers, it is important 
                        to observe any child that is withdrawn from a class that teaches about the body and sexuality as that child 
                        may be at a higher risk. Removal may be so parents wishes to not inform their child about body, rights, or 
                        they have undergone FGM/C. </p>
                    <h5 className="m-subsubsubtitle">Deinfibulation</h5>
                    <p>The procedure consists of cutting open the narrowed vaginal opening in a woman who has been infibulated 
                        (Type III), which is often necessary for improving health and well-being as well as to allow intercourse 
                        or to facilitate childbirth.</p>
                    <h5 className="m-subsubsubtitle">FGM/C is a crime in Canada</h5>
                    <p>In 1997, FGM/C was added to the Canadian Criminal Code as a form of aggravated assault, with a possible 
                        sentence of up to 14 years in prison (<a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-268.html">Government of Canada, 2022</a>). 
                        <b>In Canada, FGM/C is a crime. </b>It is also criminal to take a child outside Canada to have FGM/C performed. 
                        The amendment holds parents responsible for the violence inflicted on their child, whether it was performed 
                        firsthand or consent was given to a third party (<a href="https://www3.ohrc.on.ca/sites/default/files/policy%20on%20female%20genital%20mutilation%20fgm.pdf">Government of Canada, 2022; Ontario Human Rights Commission, 2009</a>). 
                        Performing female genital mutilation/cutting on any child under 18 years of age is a form of child abuse 
                        (<a href="https://justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/caw-mei/p11.html">Government of Canada, 2021</a>). </p>
                    <h5 className="m-subsubsubtitle">Duty to report</h5>
                    <p>Under Canadian child welfare laws, every adult in Canada has an obligation to report child abuse and neglect 
                        if there is knowledge or suspicion that it is occurring. Professionals who work with children and youth have 
                        an added responsibility to report. This is called the duty to report.</p>
                    <div className="duty-to-report">
                        <h4 className="duty-subsubtitle">DUTY TO REPORT</h4>
                        <h5 className="m-subsubsubtitle"><a href="https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/caw-mei/p11.html">Child Abuse is Wrong: What can I do?</a></h5>
                        <h5 className="m-subsubsubtitle"><a href="https://www.ontario.ca/page/report-child-abuse-and-neglect">Ontario’s Duty to Report</a></h5>
                        <h5 className="m-subsubsubtitle"><a href="https://www.alberta.ca/preventing-child-abuse-information-for-educators">Alberta Educators’ Duty to Report</a></h5>
                        <h5 className="m-subsubsubtitle">Canadian Resources to learn more about FGM/C and where to find supports for survivors: </h5>
                        <ul>
                            <li><p>End FGM/C Canada Network : <a href="https://www.endfgm.ca/resources">Resources</a> / FGM/C Foundation 
                                Training Module / FGM/C Teacher’s Module</p></li>
                            <li><p>Women’s Health in Women’s Hands : FGM/C Resource Map</p></li>
                        </ul>
                    </div>
                </section>
                <section ref={topicRefs[7]} className="topic-7">
                    <h4 className="m-subsubtitle">HIV, STI'S AND SAFE SEX</h4>
                    <h5 className="m-subsubsubtitle">What are STI’s?</h5>
                    <ul>
                        <li><p>Sexually transmitted infections (STIs) are infections that are induced by bacterial, viral, and 
                            parasitic infections that may be contracted during sex or intimacy. </p></li>
                        <li><p>Most STIs are transmitted through unprotected oral, vaginal, or anal sex, some STIs are 
                            transmitted by skin-to-skin contact. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">What factors increase STI transmission rates?</h5>
                    <ul>
                        <li><p>Economic disparities such as poverty, unstable housing, lack of medical insurance or regular 
                            medical provider are associated with higher rates of STI spread 
                            (<a href="https://archive.cdc.gov/#/details?url=https://www.cdc.gov/media/releases/2021/p0413-stds.html">Center for Disease Control and Prevention</a>),</p></li>
                        <li><p>STIs like hepatitis B and HIV may be spread through blood-to-blood contact, through sharing syringes 
                            or equipment to inject drugs. Additionally, individuals using body piercing equipment or tattooing 
                            needles may also be exposed to STIs. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Syphilis (<a href="https://www.cdc.gov/std/syphilis/stdfact-syphilis-detailed.htm#:~:text=How%20do%20people%20get%20syphilis,%2C%20anal%2C%20or%20oral%20sex.">Syphilis - Center for Disease Control and Prevention</a>)</h5>
                    <ul>
                        <li><p><b>How is syphilis transmitted: </b>Spreads from person to person with direct contact with a 
                            syphilitic sore known as a chancre. It may be hidden inside the mouth, vagina, or anus, during 
                            sex, birth or drug use. Syphilis can also be spread during vaginal, anal, or oral sex. </p></li>
                        <li><p><b>How quickly do symptoms appear? </b>The average time between the acquisition of syphilis 
                            and the start of the first symptom is 21 days. It can range between 10 to 90 days. </p></li>
                        <li><p><b>Stages and symptoms of syphilis: </b>Sometimes no symptoms (3 stages: (1) Chancre (2) Rash 
                        (3) Nervous system). </p></li>
                        <ul>
                            <li><p>There are 4 stages of syphilis which are known as primary, secondary, latent and tertiary. </p></li>
                            <ul>
                                <li><p><b>Primary Stage: </b>During the first stage, there is often a single sore or multiple 
                                    sores. The sore is the location where syphilis enters the body. These sores can occur in 
                                    or around the penis, vagina, anus, rectums, lips or mouth (source). The sores may last 3 to 
                                    6 weeks and will heal regardless of whether one receives treatment.</p></li>
                                <li><p><b>Secondary stage: </b>Skin rashes or sores in the mouth area, vagina, or anus may appear. 
                                    During this stage, it will usually start off with a rash on one or more areas of the body. 
                                    The rash may appear when the primary sore is healing. The rash may appear on the palms of 
                                    the hand and/or bottom of the feet, and may look rough, red or reddish brown. Symptoms from this 
                                    stage usually go away whether you receive treatment. Without the right treatment, your infection 
                                    will move to the latent and possibly tertiary stages of syphilis.</p></li>
                                <li><p><b>Latent Stage: </b>Period when there are no visible signs or symptoms. Without treatment, 
                                    you can continue to have syphilis in your body for years.</p></li>
                                <li><p><b>Tertiary stage: </b>Most people who have untreated syphilis do not develop tertiary syphilis. 
                                    However, when it does happen, it can affect many different organ systems, such as the heart and blood 
                                    vessels, the brain and the nervous system. It is very serious and would occur 10–30 years after your 
                                    infection began. In tertiary syphilis, the disease damages internal organs and can result in death. 
                                    A healthcare provider can usually diagnose tertiary syphilis with the help of multiple tests.</p></li>
                            </ul>
                        </ul>
                    </ul>
                    <p><b>Neurosyphilis: </b>When syphilis spreads to the brain and nervous system. Symptoms may include severe headache, 
                        muscle weakness and/or trouble with muscle movements, as well as changes to one’s mental state leading to a lack 
                        of focus and/or dementia.</p>
                    <p><b>Ocular syphilis: </b>When syphilis spreads to the eye. Symptoms may include eye pain and/or redness; changes 
                        in your vision or even blindness. </p>
                    <p><b>Otosyphilis: </b>When syphilis spreads to the ear. Symptoms may include hearing loss, ringing, buzzing, roaring, 
                        or hissing in the ears (“tinnitus”), as well as dizziness or vertigo. </p>
                    <ul>
                        <li><p><b>Testing: </b>A blood test</p></li>
                        <li><p><b>Treatment: </b>Syphilis is curable by antibiotics, however, it may not cure the damage that has already 
                            been done by the infection. </p></li>
                        <li><p><b>Prevention: </b>Barriers to vaginal, oral, and anal sex, avoid contact with chancre, wash hands and 
                            shared sex toys, testing, avoid sharing pipes for drug use.</p></li>
                        <li><p><b>Can I get syphilis again? </b>Yes, having syphilis once does not prevent you from getting it again. 
                            Even after successful treatment, you can get syphilis again. Only lab tests can confirm whether you have 
                            syphilis. Follow-up testing by your healthcare provider may be necessary to make sure the treatment 
                            administered was successful.</p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Chlamydia (<a href="https://www.cdc.gov/std/chlamydia/default.htm">Chlamydia - Center for Disease Control and Prevention</a>)</h5>
                    <ul>
                        <li><p><b>What is Chlamydia? </b><a href="https://www.cdc.gov/std/chlamydia/default.htm">Chlamydia</a> is a 
                            common STI that can cause infection among both men and women. It can cause permanent damage to a woman’s 
                            reproductive system, making it difficult or impossible for them to get pregnant later. Chlamydia can also 
                            cause a potentially fatal ectopic pregnancy which are pregnancies that occur outside the womb. </p></li>
                        <li><p><b>Transmission: </b>Having vaginal, anal, or oral sex with someone who has chlamydia can lead to 
                            transmission. Chlamydia can be transmitted even if your sex partner does not ejaculate.</p></li>
                        <li><p><b>Prevention: </b>If one is sexually active, one can take the following precautions to lower the risk: 
                            being in a long-term mutually monogamous relationship with a partner who has been tested and does not have 
                            chlamydia, and using condoms the right way every time one has sex.</p></li>
                        <li><p><b>Risk factors for Chlamydia: </b>Sexually active women should get tested every year for chlamydia if 
                            they are younger than 25 years old, and/or 25 years and older with risk factors, such as new or multiple sex 
                            partners, or a sex partner who has a sexually transmitted infection.</p></li>
                        <li><p><b>Symptoms: </b>Chlamydia often has no symptoms or symptoms that may not appear until after a few weeks 
                            after having sex with a partner who has chlamydia. Despite having no symptoms, chlamydia can still cause 
                            serious health problems. Even when chlamydia has no symptoms, it can still cause damage to a woman’s 
                            reproductive system. Women with symptoms may notice an abnormal vaginal discharge; and a burning sensation 
                            when peeing.</p></li>
                        <li><p><b>Is there a cure for chlamydia? </b>Yes, with the correct medication chlamydia can be cured. It is 
                            important to check with your doctor. It is also important to note that you should not share your medication 
                            with anyone. Repeat infection with chlamydia is common. </p></li>
                        <li><p><b>What happens if left untreated? </b>Initial damage goes unnoticed, however, untreated chlamydia may 
                            lead to pelvic inflammatory disease. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Gonorrhea (<a href="https://www.cdc.gov/std/gonorrhea/stdfact-gonorrhea.htm">Gonorrhea - Center for Disease Control and Prevention</a>)</h5>
                    <ul>
                        <li><p><b>What is Gonorrhea? </b>An STI that can cause infection in the genitals, rectum, and throat. It is very 
                            common, especially among young people ages 15-24 years.</p></li>
                        <li><p><b>Transmission: </b>Can be transmitted by having vaginal, anal, or oral sex with someone who has gonorrhea.</p></li>
                        <li><p><b>Prevention: </b>If one is sexually active, one can take the following precautions to lower the risk: 
                            being in a long-term mutually monogamous relationship with a partner who has been tested and does not have 
                            chlamydia; and using condoms the right way every time one has sex.</p></li>
                        <li><p><b>Risk factors for Gonorrhea: </b>Sexually active women should get tested every year for chlamydia if they 
                            are younger than 25 years old, and/or 25 years and older with risk factors, such as new or multiple sex 
                            partners, or a sex partner who has a sexually transmitted infection.</p></li>
                        <li><p><b>Symptoms: </b>Gonorrhea often has no symptoms, but it can cause serious health problems, even without 
                            symptoms. Symptoms may often be mild and can be mistaken for a bladder or vaginal infection. Symptoms in women 
                            can include; a painful or burning sensation when peeing; increased vaginal discharge; and vaginal bleeding 
                            between periods.</p></li>
                        <li><p><b>Is there a cure for gonorrhea? </b>Yes, with the correct medication gonorrhea can be cured. It is 
                            important to check with your doctor. It is also important to note that you should not share your medication 
                            with anyone. Repeat infection with gonorrhea is common. </p></li>
                        <li><p><b>What happens if left untreated? </b>Initial damage goes unnoticed, however, untreated gonorrhea may lead 
                            to pelvic inflammatory disease. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">What do HIV and AIDS stand for?</h5>
                    <ul>
                        <li><p>HIV: Human Immunodeficiency Virus</p></li>
                        <li><p>AIDS: Acquired Immunodeficiency Virus</p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Information on HIV (<a href="https://www.cdc.gov/hiv/basics/hiv-transmission/ways-people-get-hiv.html">HIV Basics - CDC</a>)</h5>
                    <p><b>Fluids that contain HIV: </b>Semen, vaginal fluid, anal secretions, blood, breast milk.</p>
                    <p><b>Low Risk activities for HIV: </b>Kissing, sex toys, manual sex (washing your hands so low risk).</p>
                    <ul>
                        <li><p>HIV can also be transmitted through giving or receiving oral sex</p></li>
                    </ul>
                    <p><b>High risk activities for HIV: </b>Vaginal sex and anal sex (receptive and insertive for both) due to 
                        mucous membranes.</p>
                    <p><b>HIV Transmission: </b>HIV can be transmitted through anal or vaginal sex, or sharing needles, syringes, 
                        or other drug injection equipment.</p>
                    <p><b>Getting Tested: </b>The only way to keep yourself and your partner safe is by getting tested. CDC recommends 
                        that people between ages of 13 and 64 should get tested at least once as part of routine health care.</p>
                    <h5 className="m-subsubsubtitle">Who should get tested?</h5>
                    <ul>
                        <li><p>Anyone who is sexually active.</p></li>
                        <li><p>During pregnancy: once during the first trimester and once during the third trimester.</p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">People with certain risk factors should get tested more than once. These risk 
                        factors may include: </h5>
                    <ul>
                        <li><p>You’ve had anal or vaginal sex with someone who has HIV.</p></li>
                        <li><p>You’ve had more than one sex partner since your last HIV test.</p></li>
                        <li><p>You’ve shared needles, syringes, or other drug injection equipment (for example, cookers).</p></li>
                        <li><p>You’ve been diagnosed with or treated for another <a href="https://www.cdc.gov/std/healthcomm/fact_sheets.htm">sexually transmitted disease</a>.</p></li>
                        <li><p>You’ve been diagnosed with or treated for <a href="https://www.cdc.gov/hepatitis/">hepatitis</a> or <a href="https://www.cdc.gov/tb/">tuberculosis</a> (TB).</p></li>
                        <li><p>You’ve had sex with someone who has done anything listed above or with someone whose sexual history 
                            you don’t know. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">What kinds of tests can someone take?</h5>
                    <p>There are 3 tests available for someone to take who has HIV. </p>
                    <ol>
                        <li><p>Antibody test: looks for antibodies in your blood or fluids.</p></li>
                        <li><p>Antigen/Antibody test: looks for both HIV antibodies and antigens. </p></li>
                        <li><p>Nucleic Acid test: With a NAT, the health care provider will draw 
                            blood from your vein and send the sample to a lab for testing. This test 
                            can tell if a person has HIV or how much virus is present in the blood 
                            (HIV viral load test). </p></li>
                    </ol>
                    <h5 className="m-subsubsubtitle">What do I do if I have a positive HIV test?</h5>
                    <ul>
                        <li><p>Try not to panic</p></li>
                        <li><p>Do not blame or assume </p></li>
                        <li><p>Do your research through smartsexresource.com, scarleteen.com, call local HIV/AIDs networks. </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">What does it mean if I have a negative test?</h5>
                    <p>Having a negative HIV test does not necessarily mean that you are HIV negative. The time between HIV exposure 
                        and when an HIV test can accurately detect the virus in the body is called the window period. If you take an 
                        HIV test soon after a potential HIV exposure and the result is negative, it is important to get tested again 
                        after the window period for the specific test you took. If you test negative for HIV after the window period 
                        and have not had any potential HIV exposures during that time, it is then likely that you do not have HIV. 
                        However, remember not to assume that a negative test does not mean that you do not have HIV.</p>
                    <h5 className="m-subsubsubtitle">Self-Test Kits</h5>
                    <p>There are two types of HIV self-tests available: <b>rapid self-tests</b> and <b>mail-in self-tests</b>. Rapid 
                        self-tests can be done entirely at home or in a private location and provide results within 20 minutes. These 
                        kits can be purchased at a pharmacy or online. Mail-in self-tests include a specimen collection kit for 
                        collecting dried blood from a fingerstick at home. The sample is then sent to a lab for testing and the results 
                        are provided by a healthcare provider. These self-tests can be ordered online or through a healthcare provider.</p>
                    <h5 className="m-subsubsubtitle">HIV Prevention</h5>
                    <p>Condoms are an effective option to prevent HIV and other sexually transmitted diseases. They are effective in 
                        preventing the transmission of HIV and other sexually transmitted infections (STIs) that are transmitted through 
                        body fluid.. When used consistently and correctly, condoms can help reduce the risk of HIV and STI transmission. 
                        It is important to note though that condoms may provide less protection against STIs that are transmitted through 
                        skin-to-skin contacts, such as HPV, genital herpes, and syphilis.</p>
                    <p>It is also important for people to educate themselves about how to use condoms correctly, including how to properly 
                        store them, how to open and put them on, and how to dispose of them properly after use. It is also important to use 
                        a new condom every time you have sex, making sure the condom is stored in a cool, dry place, and using water-based 
                        lubricant to help reduce the risk of breakage. Condoms are also only effective if used properly.</p>
                    <h5 className="m-subsubsubtitle">HIV Treatment</h5>
                    <p>HIV treatment involves taking prescribed medications, known as antiretroviral therapy (ART), and should be taken 
                        after consulting with a healthcare provider. ART helps lower the amount of HIV in the body and can help individuals 
                        with HIV maintain their health.  There is currently no known cure in place for HIV, effective HIV treatment can 
                        help individuals manage and control the virus. In most cases, it is possible to get the virus under control within 
                        six months of starting ART. HIV treatments can make the virus virtually undetectable. This means people with HIV 
                        taking treatment can safely have sex without transmitting the virus to their partner. Another option is PrEP, or 
                        Pre-exposure prophylaxis (PrEP), which is a drug that prevents HIV from spreading in the body after having sex 
                        with someone who may be HIV positive. ART is recommended for anyone who may have HIV. Although there is no present 
                        cure for HIV, people who take medicine can live long, healthier lives as well. </p>
                    <h5 className="m-subsubsubtitle">HPV and Pap Smears</h5>
                    <p><a href="https://www.cdc.gov/std/hpv/stdfact-hpv.htm">Human papillomavirus</a> (HPV) is a common sexually 
                        transmitted infection (STI) that is spread through skin-to-skin contact during sexual activity. There are many 
                        different types of HPV, and although most infections are harmless, some types can cause genital warts or cancer. 
                        Cervical cancer is particularly associated with HPV infection, and long-term infections with certain oncogenic 
                        types of HPV can lead to changes in cells that can eventually develop into cancer.</p>
                    <p>To help prevent HPV infection, it is recommended to get vaccinated against HPV. The 
                        <a href="https://www.mayoclinic.org/diseases-conditions/hpv-infection/in-depth/hpv-vaccine/art-20047292">HPV vaccine</a> is 
                        usually given in early adolescence, before becoming sexually active, and is administered in a series of shots. Pap 
                        smears, which involve collecting cells from the cervix and examining them under a microscope, can help detect 
                        changes in cervical cells caused by HPV infection and allow for early treatment to prevent the development of 
                        cancer.</p>
                    <h5 className="m-subsubsubtitle">HIV/AIDS networks, resources, and information links</h5>
                    <p>Action Canada for Sexual Health and Rights has comprised an extensive list of types of 
                        <a href="https://www.actioncanadashr.org/sexual-health-hub/types-sexually-transmitted-infections">STI’s and information on how one should get tested</a>.</p>
                    <p>Resource by Action Canada for Sexual Health and Rights on 
                        <a href="https://www.actioncanadashr.org/resources/services">finding sexual health services near you</a>.</p>
                    <p>CATIE offers a comprehensive resource to learn 
                        <a href="https://www.catie.ca/hpv-cervical-dysplasia-and-cervical-cancer">HPV, cervical dysplasia, and cervical 
                        cancer</a>.</p>
                    <p><a href="https://hivedmonton.com/">HIV Edmonton</a> offers resources, workshops, information, and services to 
                        those who reside in the Edmonton area.</p>
                    <p><a href="https://caans.org/">Central Alberta AIDS Network Society</a> is responsible for health promotion, 
                        prevention, outreach, harm reduction, mobile outreach, and community action in Central Alberta. </p>
                    <p><a href="https://hivnorth.org/">HIV North Society</a> provides prevention, awareness, support programs, food, 
                        housing, education, prevention, health care support, and volunteering opportunities.</p>
                    <p><a href="https://www.aidsvancouver.org/">AIDS Vancouver</a> is a resource that works on the past, present, and 
                        future homelands of the Musqueam, Squamish, and Tsleil-Waututh Indigenous Peoples.</p>
                    <p><a href="https://aidsnetwork.ca/">AID Network</a> responds to the impact of HIV on the health and well-being of 
                        individuals and diverse communities in Hamilton, Halton, Haldimand, Norfolk, and Brant.</p>
                    <p><a href="https://www.torontohivaidsnetwork.org/#:~:text=AIDS%20NETWORK%20(THN)-,The%20Toronto%20HIV%2FAIDS%20Network%20(THN)%20facilitates%20HIV%2F,most%20affected%20by%20HIV%2FAIDS.">Toronto HIV/AIDS Network (THN)</a> facilitates HIV/AIDS planning, collaboration, engagement and innovation to improve access to programs and services for people from diverse communities living with and most affected by HIV/AIDS.</p>
                    <p><a href="https://www.ohtn.on.ca/">Ontario HIV Treatment Network</a> brings together key partners from across the 
                        sector to improve the lives of all Ontarians living with and at risk of HIV.</p>
                    <p><a href="https://gnpplus.net/who-we-are/about-us/">Global Network of People Living with HIV (GNP+)</a>, a network 
                        for people living with HIV, run by people living with HIV.</p>
                </section>
                <section ref={topicRefs[8]} className="topic-8">
                    <h4 className="m-subsubtitle">PERIODS AND PERIOD PAIN (MENSTRUAL CARE)</h4>
                    <h5 className="m-subsubsubtitle">What is menstruation and why menstrual care?</h5>
                    <p>Menstruation is the process in which normal vaginal bleeding occurs as part of a woman's monthly cycle. 
                        Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. </p>
                    <h5 className="m-subsubsubtitle">What is a menstrual cycle?</h5>
                    <p>A menstrual cycle is the monthly series of changes a woman's body goes through in preparation for the 
                        possibility of pregnancy. Each month, one of the ovaries releases an egg — a process called ovulation. 
                        At the same time, hormonal changes prepare the uterus for pregnancy. If ovulation takes place and the egg 
                        isn't fertilized, the lining of the uterus sheds through the vagina. (<a href="https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186">Mayo Clinic -- Women's Health</a>)</p>
                    <h5 className="m-subsubsubtitle">Is there anything that people can not do when they are menstruating?</h5>
                    <p>Nope! Everyone can live their normal lives when menstruating.</p>
                    <h5 className="m-subsubsubtitle">What if my cycle is irregular?</h5>
                    <p>Many people actually have irregular cycles in their first few years of menstruation. Everyone's bodies are 
                        different. Everyone can learn about their cycles better by observing the minor changes that may take place 
                        during their periods and it may take a few years to settle into a regular monthly pattern. Everyone's bodies 
                        are different. </p>
                    <h5 className="m-subsubsubtitle">What are some changes that may take place when someone gets their period for the first time?</h5>
                    <p>Breasts grow, hair grows on the body, and hips widen. Sometimes hormones make both girls and boys a bit more 
                        emotional. There is no reason to be scared or ashamed of any of these changes. They are completely normal! </p>
                    <h5 className="m-subsubsubtitle">Period Pain </h5>
                    <p>Sometimes menstruation can be painful! The amount of pain can differ from month to month and from person to person.</p>
                    <h5 className="m-subsubsubtitle">Why do periods hurt?</h5>
                    <p>During your menstrual period, your uterus contracts to help expel its lining. Hormone-like substances 
                        (prostaglandins) involved in pain and inflammation trigger uterine muscle contractions. Higher levels of 
                        prostaglandins are associated with more-severe menstrual cramps.</p>
                    <h5 className="m-subsubsubtitle">Period Pain Control</h5>
                    <p>Pain can often be eased by going on short walks, getting eight hours of sleep every night, drinking lots of 
                        water, gentle pain medicine, placing a warm water bottle, a warm heating pad or a warm compress on the belly, 
                        and taking a warm bath. Exercise is also a great way to reduce period pains. Take your vitamins and minerals.</p>
                    <h5 className="m-subsubsubtitle">How do I know if I need medical attention?</h5>
                    <p>If a period is so painful, that you can’t stand or walk; if you bleed much more than you usually do; or if you 
                        stop bleeding for a long time, or bleed between periods, you need to get medical help from a community health 
                        worker, midwife or doctor.</p>
                    <h5 className="m-subsubsubtitle">Practicing good hygiene during your period will lead to people feeling more healthy. How can you practice good hygiene during your period?</h5>
                    <p>Continue to wash normally during menses. Wash the outside genital area at least once a day. If you do not have 
                        access to a shower or bath, use a small amount of plain water, soap and a soft cloth. Always wash her hands with 
                        soap after using the toilet or changing a pad or cloth.</p>
                    <h5 className="m-subsubsubtitle">What can teachers do to help students who may be facing issues communicating or talking about their periods?</h5>
                    <p>As a teacher, one of the best ways you can help people in your class deal with menstruation is to notice when they 
                        need help and let them know they can talk to you. </p>
                    <h5 className="m-subsubsubtitle">Period Poverty</h5>
                    <ul>
                        <li><p>Period poverty is a term used to describe the struggle girls, women, and non-binary individuals face in accessing 
                            affordable menstrual products. However, this term also refers to having access to menstrual hygiene education, toilets, 
                            hand washing facilities, or waste management. </p></li>
                        <li><p>Important facts about period poverty:</p></li>
                        <ul>
                            <li><p>Poor menstrual hygiene can cause physical health risks and has been linked to reproductive and urinary tract 
                                infections.</p></li>
                            <li><p>Globally, 1.7 billion people live without basic sanitation services.</p></li>
                            <li><p>Girls with disabilities disproportionately do not have access to the facilities and resources they need for
                                proper menstrual hygiene. (<a href="https://www.globalcitizen.org/en/content/period-poverty-everything-you-need-to-know/">Everything you need to know about period poverty</a>)</p></li>
                        </ul>
                        <li><p>Barriers involved in period poverty are social, economic, and political (ex: taxes on menstruation products, and 
                            social stigma surrounding the time of a period). </p></li>
                    </ul>
                    <h5 className="m-subsubsubtitle">Here a few ways you can offer support to students who may be struggling (<a href="https://www.unicef.org/rosa/stories/period-lesson-plan-guide-menstruation-teachers">Period lesson plan: guide - Unicef</a>):</h5>
                    <ul>
                        <li><p><b>Are there people in class who need extra support? Consider the following: </b>Have some students been trying 
                        to hide their breasts, including by hunching their shoulders? Do students seem embarrassed about growing more hair on 
                        their bodies? Have some people become withdrawn, depressed and scared? Do people seem uncomfortable, or stay in their seats 
                        for too long, because they need to go to the bathroom or do something about stained clothes, but feel embarrassed or afraid 
                        to ask for help? </p></li>
                        <li><p><b>What are your school facilities like? </b>Does your school have any of these facilities: enough toilets with more 
                        space and a door that can be closed and locked; water inside the toilet for cleansing; buckets with lids for disposing of 
                        used pads; if necessary, a hook for hijabs so girls can keep their clothes clean and dry while they change their menstrual 
                        hygiene cloth; hand-washing facilities with soap? Is there someone responsible for cleaning the toilet and how often is it 
                        cleaned?</p></li>
                        <li><p><b>Are teachers trained to teach menstrual and personal hygiene to the school’s students? </b>Can there be a meeting 
                        with other teachers to discuss the issues that people at school face during their period and then work together on a lesson 
                        plan that is culturally appropriate for the community/school?</p></li>
                        <li><p><b>Are parents or community groups supportive of people going to school during their period? </b></p></li>
                    </ul>
                </section>
                <section ref={topicRefs[9]} className="topic-9">
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
                </section>
            </section>
        </div>*/
        
    );

};
export default Module1Page; 


