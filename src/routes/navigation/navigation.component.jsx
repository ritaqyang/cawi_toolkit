import React from 'react';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import { Fragment } from 'react';
import logo from '../../assets/logo.png';
import './navigation.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector'; // Select user function
import { signOutUser, setCurrentUser } from '../../store/user/user.action';
import { signInWithGoogle, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showCurrentUser = currentUser ? `currentLogin: ${currentUser.email}` : '';
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
  return (
    <Fragment>
      <header className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <h1>{showCurrentUser}</h1>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/lessons-home'>LESSONS</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
          {currentUser ? (
            <li><span onClick={handleSignOut} style={{ cursor: 'pointer' }}>SIGN OUT</span></li>
          ) : (
            <li><span onClick={handleSignin}>SIGN IN</span></li>
          )}
        </ul>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;


