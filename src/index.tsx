import React from "react";
import ReactDOM from "react-dom";

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
            <ul className=" mb-8 flex">
                <Switch>
                    <Route path="/address/:id">
                        <li>
                            <Link to="/" className="px-4 py-2 block shadow-md rounded">Home</Link>
                        </li>
                        <li className="ml-4">
                            <span className="px-4 py-2 block shadow-md rounded  text-gray-500">Address</span>
                        </li>
                    </Route>

                    <Route path="/">
                        <li>
                            <span className="px-4 py-2 block shadow-md rounded  text-gray-500">Home</span>
                        </li>
                    </Route>
                </Switch>


                <li className="ml-auto">
                    <button onClick={() => {window.localStorage.clear(); window.location = window.location}} className="px-4 py-2 block shadow-md rounded bg-red-500 text-white">Clear Cache</button>
                </li>
            </ul>
            <Switch>
                <Route path="/address/:id">
                    <Address/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    </Router>, document.getElementById('root'));
