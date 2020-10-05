import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import {Tag} from './views/Tag';

export default function App() {
    return (
        <Router>

            <Switch>
                <Route path="/tags/:id" exact={true}>
                    <Tag/>
                </Route>
                <Route path="/tags" exact={true}>
                    <Tags/>
                </Route>
                <Route path="/money" exact={true}>
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>

        </Router>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}




