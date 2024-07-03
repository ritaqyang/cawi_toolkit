import React, {useRef} from 'react';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import { Fragment } from 'react';
import logo from '../../assets/logo.png';
import './navigation.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector'; // Select user function
import { signOutUser, setCurrentUser } from '../../store/user/user.action';
import { signInWithGoogle, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showCurrentUser = currentUser ? `${currentUser.displayName}` : '';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signOutUser());
    navigate('/'); // Redirect to home page
  };
  const logGoogleUser = async () => {
    try {
        const { user } = await signInWithGoogle();
        const userDocRef = await createUserDocFromAuth(user);
        dispatch(setCurrentUser(user));
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}


const handleSignin = async () => {
  await logGoogleUser();
  navigate('/lessons-home'); // Redirect to lessons page
};

const signOutRef = useRef(null);

const handleSignOutHoverIn = () => {
  gsap.to(signOutRef.current, {
    text: {
      value: "SIGN OUT",
      delimiter: ""
    },
  } )
}

const handleSignOutHoverOut = () => {
  gsap.to(signOutRef.current, {
    text: {
      value: showCurrentUser,
      delimiter: ""
    },
  } )
}

  return (
    <Fragment>
      <header className="navbar">
        <img className="logo" src={logo} alt="logo" />
        {/*<h1 className="user-message">{showCurrentUser}</h1>*/}
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/lessons-home'>LESSONS</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
          {currentUser ? (
            <li><Link ref={signOutRef} onClick={handleSignOut} onMouseEnter={handleSignOutHoverIn} onMouseLeave={handleSignOutHoverOut} style={{ cursor: 'pointer' }}>{showCurrentUser}</Link></li> 
            /* changed the sign in and sign out from span to Link, so that it looks more consistent.*/
          ) : (
            <li><Link onClick={handleSignin}>SIGN IN</Link></li>
          )}
          {/*<li><Link className="user">{showCurrentUser}</Link></li>*/}
        </ul>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;


