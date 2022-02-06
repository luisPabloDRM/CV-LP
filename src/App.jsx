
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import React, { useState } from "react";
import "./App.scss";
import {About , Education , Experience , Me , More, NavBar  }  from "./components";
import Profile from './components/Profile/Profile';
import { CV } from "./CV/CV";



const { me} = CV;



function App() {


  return (

  <div className="App">
      
      <Me me={me} />

    <Router>
    <NavBar></NavBar>
            <Routes>
               <Route path="/" element={null} /> 

                 <Route path="/education" element={<Education education={CV.education}/>} />

                  <Route path="/about" element={<About me ={CV.me.aboutMe}/>} />

                  <Route path="/experience" element={<Experience experience={CV.experience}/>} />

                  <Route path= "/profile" element ={<Profile email ={Profile.email} password ={Profile.password} name = {Profile.name}  />} />

                  <Route path="/more" element={<More languages={[CV.languages ]} habilities = {CV.habilities} volunteer = {CV.volunteer} />} />
            </Routes>
      </Router>
  </div>
  );
}

export default App;
