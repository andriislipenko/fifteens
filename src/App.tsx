import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Fifteens from './fifteens/fifteens';

export class App extends React.Component {
    public render(): JSX.Element { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/fifteens">
                        <Fifteens/>
                    </Route>
                    <Redirect from="*" to="/fifteens"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }
}
