import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <Routes>
        <Route path="canvas" element={<Canvas></Canvas>}/>
        <Route path="/" element={<Home></Home>}/>
    </Routes>
  );
}

function Home(){
  return <div>This is the home page</div>
}

export default App;
