import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import EditProfile from './components/HOME/editProfile';
import GameListRoom from './components/GAME-LIST-ROOM/gameListRoom';
import FormAddQuestions from './components/HOME/FormAddQuestions/form';
import Home from './components/HOME/home';
import PlayStore from './components/PLAYSTORE/playstore';
import PreGameRoom from './components/PRE-GAMEROOM/preGameRoom';
import { config } from './utils/Firebase';
import { initializeApp } from 'firebase/app';
import initialPage from './components/INICIO/initialPage';
import signUpFirebase from './components/INICIO/SIGNUP/signUpFirebase';

initializeApp(config)

import LandingPage from './components/LANDINGPAGE/landingPage';

function App() {
  return (
    <div className="App">
        <Route path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={initialPage} />
        <Route path="/signup" component={signUpFirebase} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/iniciarPartida" component={PreGameRoom} />
        <Route path="/partidasDisponibles" component={GameListRoom} />
        <Route path="/tienda" component={PlayStore} />
        <Route path="/añadirPregunta" component={FormAddQuestions} />
    </div>
  );
}

export default App;
