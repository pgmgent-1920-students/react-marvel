import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comics" activeClassName="active">Comics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/characters" activeClassName="active">Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/series" activeClassName="active">Series</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/stories" activeClassName="active">Stories</NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;