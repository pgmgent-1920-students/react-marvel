import React, { useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CharactersPage, HomePage, NotFoundPage } from './pages';
import { Footer, Header } from './components/layout';

import './App.scss';

function App() {
  return (
    <div className="app">      
      <Router basename="/react-marvel">
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
        <Footer />
      </Router>           
    </div>
  );
}

export default App;
