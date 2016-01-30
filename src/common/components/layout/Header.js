import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
					<Link to="/" title="Home"> Youhan Ko </Link>
			    <small>would be Web Design Master</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;