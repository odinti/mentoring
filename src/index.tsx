import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Address from './components/Address';
import Home from './components/Home'

ReactDOM.render(
    <Router>
        <div>
            <ul className="border-b border-blue-100 mb-8 flex">
                <li>
                    <Link to="/" className="p-4 block">Home</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/address/:id">
                    <Address />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>, document.getElementById('root'));
