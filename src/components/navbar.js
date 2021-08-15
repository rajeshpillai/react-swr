import React from 'react';

import {
  Link
} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navbar">
      <li><Link to="/app-with-mutation-binding">Mutation(Binding)</Link></li>
    </ul>
  );
}