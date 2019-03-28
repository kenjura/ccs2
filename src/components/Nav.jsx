import React from 'react';

import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

	isActive(path) {
		return window.location.pathname.includes(path).toString();
	}

	render() {
		const { isActive } = this;

		return <nav id="nav">
	      <ul>
	        <li>
	          <NavLink to="/characters/" active={isActive('/characters/')}>Characters</NavLink>
	        </li>
	        <li>
	          <NavLink to="/tbi/" active={isActive('/tbi/')}>Something Else</NavLink>
	        </li>
	      </ul>
	    </nav>;
	}
}