
import React, {useState} from 'react';
import{ Route, Routes, useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';


import {About , Education , Experience , Me , More, NavBar, }  from "./components";
import Profile from './components/Profile/Profile';
import { CV } from "./CV/CV";
import NotFound from './components/NotFound/NotFound';
import LoginForm from './components/LoginForm/LoginForm';
import AuthRoute from './components/AuthRoute/AuthRoute';
import "./App.scss";


const { me} = CV;

const userMockArray = [
  {email: 'alumno@upgrade.com', password: '12345', name: 'Alumno'},
  {email: 'luis.pablo@upgrade.com', password: '12345', name: 'Luis Pablo'},
  {email: 'alberto@upgrade.com', password: '13245', name: 'Alberto'},
];




function App() {
  const navigate = useNavigate();
  const [user, setUser]= useState(null);
  //const authenticated = user != null;
  const [loginError, setLoginError]= useState('');

 
  const loginUser = (formData, prevRoute) => {
      const existsUser = userMockArray.find(el => el.password ===formData.password && el.email=== formData.email);

      if (existsUser) {
          setUser(existsUser);
          setLoginError('');
          navigate(prevRoute ||'/');
      }else{
          setUser (false);
          setLoginError('No existe el usuario o la contraseña no coincide');
      }
  };

  const logoutUser =()=> {
      setUser(null);
  };



  return (

  <div className="App">
      
      <Me me={me} />


    
        <NavBar user={user} logoutUser={logoutUser}/>
            <Routes>
               <Route path="/" element={null} /> 

                  <Route path="/login" element={<LoginForm loginUser={loginUser} loginError={loginError} />} />

                 <Route path="/education" element={<Education education={CV.education}/>  } />

                  <Route path="/about" element={<About me ={CV.me.aboutMe}/>} />

                  <Route path="/experience" element={<Experience experience={CV.experience}/>} />

                  <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user} />} />} />

                  <Route path="/more" element={<More languages={[CV.languages ]} habilities = {CV.habilities} volunteer = {CV.volunteer} />} />

                  <Route path ="*" element={<NotFound />} />
            </Routes>
    
  </div>
  );
}

export default App;
