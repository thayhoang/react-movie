import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Movie App</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to={"/favorite"} className="nav-link">
                                Favorite
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/movie"} className="nav-link">
                                Admin
                            </Link>
                        </li>
                    </ul>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={"/register"} className="nav-link">
                                    Register
                                </Link>
                            </li>
                            <li><a>Help</a></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <input type="text" className="form-control" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}


export default NavBar;
