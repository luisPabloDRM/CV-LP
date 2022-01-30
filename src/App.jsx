
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import React, { useState } from "react";
import "./App.scss";
import {About , Education , Experience , Me , More, NavBar  }  from "./components";
import { CV } from "./CV/CV";


const { me} = CV;



function App() {


  return (

  <div className="App">
      
      <Me me={me} />

    <Router>
    <NavBar></NavBar>
            <Routes>
               <Route path="/" element={<Me />} /> 

                 <Route path="/education" element={<Education education={CV.education}/>} />

                  <Route path="/about" element={<About me ={CV.me.aboutMe}/>} />

                  <Route path="/experience" element={<Experience experience={CV.experience}/>} />

                  <Route path="/more" element={<More languages={[CV.languages ]} habilities = {CV.habilities} volunteer = {CV.volunteer} />} />
            </Routes>
      </Router>
  </div>
  );
}

export default App;
