
import React  from 'react';
import{ Route, Routes } from 'react-router-dom';



import {About , Education , Experience , Me , More, NavBar, }  from "./components";

import { CV } from "./CV/CV";
import NotFound from './components/NotFound/NotFound';


import "./App.scss";

import LanguageSelector from './components/LanguageSelector/LanguageSelector';


const { me} = CV;




function App() {
 

 
  


  return (

  <div className="App">

          <LanguageSelector />
          <Me me={me} />
          <NavBar />



            <Routes>
               <Route path="/" element={null} /> 

                 <Route path="/education" element={<Education education={CV.education}/>  } />

                  <Route path="/about" element={<About me ={CV.me.aboutMe}/>} />

                  <Route path="/experience" element={<Experience experience={CV.experience}/>} />

                  {/* <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user} />} />} /> */}

                  <Route path="/more" element={<More languages={[CV.languages ]} habilities = {CV.habilities} volunteer = {CV.volunteer} />} />

                  <Route path ="*" element={<NotFound />} />
            </Routes>
    
  </div>
  );
}

export default App;
