import styled from "styled-components";
import subsubtitleimg from "../../../../assets/m-title.png"

export const Content = styled.section`
    padding: 2rem;
    height: fit-content;
    margin: 2rem;
    margin-bottom: 10rem;
    background-color: white;
    border-radius: 25px;
    border: 2px solid #CEB180;
`;

export const TitlePage = styled.section`
    height: 100vh;
    margin: 2rem;
    border-radius: 25px;
`;

/*h3*/
export const Title = styled.section`
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-size: 5rem;
`;

/*h2*/
export const SubTitle = styled.section`
    margin-top: 2em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-size: 3rem;
`;

/*h4*/
export const SubSubTitle = styled.section`
    font-size: 3rem;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    width: 70%;
    background-image: url(${subsubtitleimg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
`;

/*h5*/
export const SubSubSubTitle = styled.section`
    font-size: 2rem;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    border: 2px solid #ede2ce;
    border-radius: 25px 25px 25px 25px;
`;

export const BlueBox = styled.section`
    padding: 2rem;
    background-color:#d8edf2;
    border: 2px solid #d8edf2;
    border-radius: 25px 25px 25px 25px;
`;

export const TextBox = styled.section`
    padding: 2rem;
    margin-bottom: 5rem;
    border: 2px solid #ede2ce;
    border-radius: 25px 25px 25px 25px;
`;