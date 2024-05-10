import styled from "styled-components";

export const ModulePage = styled.section`
    padding-top:7rem;
    height: 100%;
    width:100%;
`;

export const ModuleContent = styled.section`
    height:100vh;
    width: 80%;
    position: fixed;
    right: 0;
    overflow-y:scroll;
    @media (max-width: 950px) {
        width: 90%;
    }
`;