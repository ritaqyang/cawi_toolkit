import React from "react";
import { signInWithGoogle, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import styled from "styled-components";
export const ModulePage = styled.section`
    padding-top:7rem;
    background-color: #f5f5f5;
`;

const SignIn = () =>{
    console.log("sign in page rendered" );
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGoogle();
            const userDocRef = await createUserDocFromAuth(user);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    }
    return(
        
            <ModulePage>

                     <h1>sign in page</h1>
                     <button onClick={logGoogleUser}>Sign in with Google</button>
            </ModulePage>
    
      
    )
}

export default SignIn; 