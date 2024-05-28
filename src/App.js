import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LessonsHome from './routes/lessons/lessons.component';
import About from './routes/about/about.component';
import Module1Page from './routes/modules/module1_page/m1page.component';
import M2Page from './routes/modules/module2_page/m2.page.component';
import { Module3Page } from './routes/modules/module3_page/m3.page.component';
import SignIn from './routes/sign-in/sign-in.component';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { createUserDocFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user){
        createUserDocFromAuth(user);
        
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe; 
    },[]); 

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='lessons-home' element={<LessonsHome />} />
        <Route path='about' element={<About />} />
        <Route path='sign-in' element ={<SignIn />} />
        <Route path='modules/1' element={<Module1Page />} />
        <Route path='modules/2' element={<M2Page />} />
        <Route path='modules/3' element={<Module3Page />} />
    
      </Route>
    </Routes>
  );
};

export default App;