import React, { useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CharactersPage, HomePage, NotFoundPage } from './pages';
import { Header } from './components/layout';

import './App.css';

function App() {
  return (
    <div className="app">      
      <Router>
        <Header />
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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>           
    </div>
  );
}

export default App;
