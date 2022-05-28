import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ({brand, children}) => {
  return (
    <nav className="bg-primary sticky-top">
      <Link className="brand" to="/">{brand}</Link>
      <Toggler target="nav-links" />
      <div id="nav-links" className="collapse">
        <ul>
          {children}
        </ul>
      </div>
    </nav>
  );
}

const Toggler = ({target}) => {
  const onClick = () =>
    document.getElementById(target).classList.toggle("show");
  return (
    <button className="toggler" type="button" onClick={onClick}>
      <span className="icon burguer" />
    </button>
  );
}

export const Link = ({children, className = '', to, ...rest}) => (
  <NavLink {...rest} className={`link ${className}`.trimEnd()} to={to}>
    {children}
  </NavLink>
);

export default Nav;
