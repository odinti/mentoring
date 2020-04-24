import React from "react";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
        trackAllPureComponents: true,
    });
}

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Spinner = React.memo(() =>  (
    <div className={"tw-w-full tw-h-full tw-bg-blue-500"}>
        Loading
    </div>
))

const Home = React.lazy(() => import('./components/Home'))
const Address = React.lazy(() =>  import('./components/Address'))

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

                    <Route path="/" exact>
                        <li>
                            <span className="px-4 py-2 block shadow-md rounded  text-gray-500">Home</span>
                        </li>
                    </Route>

                    <li>
                        <Link to="/" className="px-4 py-2 block shadow-md rounded">Home</Link>
                    </li>
                </Switch>


                <li className="ml-auto">
                    <button onClick={() => {window.localStorage.clear(); window.location = window.location}} className="px-4 py-2 block shadow-md rounded bg-red-500 text-white">Clear Cache</button>
                </li>
            </ul>
            <Switch>
                <Route path="/address/:id">
                    <React.Suspense fallback={<Spinner/>}>
                        <Address/>
                    </React.Suspense>
                </Route>
                <Route path="/404">
                    <div  className="text-center">
                        <h1 className="text-6xl">404</h1>
                        <p className="text-3xl">Not Found</p>
                    </div>
                </Route>
                <Route path="/">
                    <React.Suspense fallback={<Spinner/>}>
                        <Home/>
                    </React.Suspense>
                </Route>
            </Switch>
        </div>
    </Router>, document.getElementById('root'));
