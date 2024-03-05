import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LessonsHome from './routes/lessons/lessons.component';
import About from './routes/about/about.component';
import Module1Page from './routes/module1_page/m1page.component';
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='lessons-home' element={<LessonsHome />} />
        <Route path='about' element={<About />} />
        <Route path='modules/1' element={<Module1Page />} />
    
      </Route>
    </Routes>
  );
};

export default App;