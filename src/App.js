import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LessonsHome from './routes/lessons/lessons.component';
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='lessons-home' element={<LessonsHome/>} />
    
      </Route>
    </Routes>
  );
};

export default App;