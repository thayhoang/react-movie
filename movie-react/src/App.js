import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import Movie from "./component/admin/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./component/favorite.component";
import Login from "./component/login.component";
import Register from "./component/register.component";


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/favorite" component={Favorite} />
                        <Route exact path="/admin/movie" component={Movie} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
