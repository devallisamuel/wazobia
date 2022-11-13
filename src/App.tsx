import React from 'react';
import { Routes,Route } from 'react-router-dom';

import { Login } from './components/pages/login/login';
import { SignUp } from './components/pages/signUp/signUp';
import { Verify } from 'components/pages/verify/verify';
import { Dashboard } from 'components/pages/dashboard/dashboard';


import './App.css';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      {/* <Route path = "/login" element = {<Login/>}/> */}
      <Route path = "/sign-up" element = {<SignUp/>}/>
      <Route path = "/verify" element = {<Verify/>}/>
      <Route path = "/email/verify/:id" element = {<Verify/>}/>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
    </Routes>
  );
}

export default App;
