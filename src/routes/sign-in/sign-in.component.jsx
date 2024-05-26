import React from "react";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";
import styled from "styled-components";
export const ModulePage = styled.section`
    padding-top:7rem;
    background-color: #f5f5f5;
`;

const SignIn = () =>{
    console.log("sign in page rendered" );
    return(
        
            <ModulePage>
                     <h1>sign in page</h1>
            </ModulePage>
    
      
    )
}

export default SignIn; 