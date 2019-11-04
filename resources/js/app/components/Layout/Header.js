import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { FiLogIn as LoginIcon } from 'react-icons/all';
import HeaderNavLink from '../../shared/components/HeaderNavLink';

function Header() {
  return (
    <div className="border-b flex flex-row justify-between items-center p-3">
      <h1 className="text-4xl"><NavLink className="header-title" to="/" exact>SBLOG</NavLink></h1>
      <span className="flex-1 flex-row flex justify-around">
        <HeaderNavLink exact to="/">Home</HeaderNavLink>
        <HeaderNavLink exact to="/articles">Articles</HeaderNavLink>
        <HeaderNavLink exact to="/categories">Categories</HeaderNavLink>
      </span>
      <span>
        {/* <LoginIcon size={32} /> */}
        <Link to="/login">
          Sign in
        </Link>
      </span>
    </div>
  );
}

export default Header;
