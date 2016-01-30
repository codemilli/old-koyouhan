import React, { Component } from 'react';
import { Link } from'react-router';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">
						I want to build <em>scalable</em> and <em>maintainable</em> enterprise web applications.
					</h1>
					<p>
						checkout my portfolio.
						<Link to="/portfolio"> Find out More </Link>
					</p>
			</div>
  
		  	<div className="post clearfix">

					<h2>Technologies I build with:</h2>

					<div className="skill-item clearfix">
						<h4>Web Design</h4>
						<ul className="">
							<li><em>PhotoShop</em></li>
							<li><em>Illustrator</em></li>
						</ul>
					</div>


					<div className="skill-item clearfix">
						<h4>Side</h4>
						<ul>
							<li><em>HTML5</em></li>
							<li><em>CSS3</em></li>
						</ul>
					</div>
  			</div>
  			<div className="post clearfix">
			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;