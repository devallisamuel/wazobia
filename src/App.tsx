import React from 'react';
import { Routes,Route } from 'react-router-dom';

import { Login } from './components/pages/login/login';
import { SignUp } from './components/pages/signUp/signUp';
import { Verify } from 'components/pages/verify/verify';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "/sign-up" element = {<SignUp/>}/>
      <Route path = "/verify" element = {<Verify/>}/>
    </Routes>
  );
}

export default App;
