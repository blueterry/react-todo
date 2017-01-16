import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div className="top-bar top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Todo App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" >About App</IndexLink>
                        </li>
                        <li>
                            <Link to="company" activeClassName="active-link">About Company</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a  target="_blank" href="http://www.rekete.com">Rekete</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;