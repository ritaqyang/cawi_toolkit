import React, {useRef, useLayoutEffect, Fragment} from "react";
import {Content} from '../pages.styles';
import '../pages.css';

export const PageSeven = () => {
    return (
        <Fragment>
            <Content>
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
                    /** test your knwoledge */
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
                    /** test your knowledge */
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
            </Content>
        </Fragment>
    );
};