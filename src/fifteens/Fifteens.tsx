import React from 'react';
import Dashboard from './dashboard/Dashboard';
import styles from './Fifteens.module.scss';

class Fifteens extends React.Component {
    public render(): JSX.Element {
        return (
            <div className={styles.container}>
                <Dashboard />
            </div>
        );
    }
}

export default Fifteens;
