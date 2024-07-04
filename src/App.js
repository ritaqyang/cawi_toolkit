import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LessonsHome from './routes/lessons/lessons.component';
import About from './routes/about/about.component';
import { Module1Page } from './routes/modules/module1_page/m1page.component';
import { Module2Page } from './routes/modules/module2_page/m2.page.component';
import { Module3Page } from './routes/modules/module3_page/m3.page.component';
import { Module4Page } from './routes/modules/module4_page/m4.page.component';
import { Module5Page } from './routes/modules/module5_page/m5.page.component';
import { Module6Page } from './routes/modules/module6_page/m6.page.component';

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
        <Route path='modules/2' element={<Module2Page />} />
        <Route path='modules/3' element={<Module3Page />} />
        <Route path='modules/4' element={<Module4Page />} />
        <Route path='modules/5' element={<Module5Page />} />
        <Route path='modules/6' element={<Module6Page />} />

    
      </Route>
    </Routes>
  );
};

export default App;