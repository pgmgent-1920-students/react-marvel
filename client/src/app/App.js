import React, { useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CharactersPage, HomePage } from './pages';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/comics">
            <p>Comics</p>
          </Route>
          <Route exact path="/characters">
            <CharactersPage />
          </Route>
          <Route exact path="/series">
            <p>Series</p>
          </Route>
          <Route exact path="/stories">
            <p>Stories</p>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>           
    </div>
  );
}

export default App;
