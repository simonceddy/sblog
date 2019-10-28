import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavLink({ to, children, exact = false }) {
  return (
    <NavLink
      to={to}
      exact={exact}
      className="header-nav-link link"
    >
      {children}
    </NavLink>
  );
}

export default HeaderNavLink;
