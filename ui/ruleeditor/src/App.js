import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Stage from './components/Stage';

function App() {
  return (
    <Routes>
        <Route path="canvas" element={<Stage></Stage>}/>
        <Route path="/" element={<Home></Home>}/>
    </Routes>
  );
}

function Home(){
  return <div>This is the home page</div>
}

export default App;
