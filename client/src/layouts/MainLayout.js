import React, { Component } from 'react';
import {Link} from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div className="container">
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="row">
        <div className="three" >
          <Link  to="/">River Tracker</Link>
          <small className="text-muted">alpha</small>
          </div>
          <nav className="nine">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="rivers">Rivers</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
