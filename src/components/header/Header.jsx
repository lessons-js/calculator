import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/max">Max</NavLink>
        </li>
        <li>
          <NavLink to="/alex">Alex</NavLink>
        </li>
        <li>
          <NavLink to="/makar">Makar</NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}
