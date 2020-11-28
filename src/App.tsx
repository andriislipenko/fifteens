import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Fifteens from './fifteens/Fifteens';
import styles from './App.module.scss';

export class App extends React.Component {
    public render(): JSX.Element { 
        return (
            <div className={styles.container}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/fifteens">
                            <Fifteens/>
                        </Route>
                        <Redirect from="*" to="/fifteens"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
