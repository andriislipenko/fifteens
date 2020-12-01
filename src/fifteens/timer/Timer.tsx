import React from 'react';
import styles from './Timer.module.scss';

class Timer extends React.Component<TimerProps> {
    render(): JSX.Element {
        return (
            <div className={styles.container}>
                {this.props.seconds}s
            </div>
        );
    }
}

interface TimerProps {
    seconds: number;
}

export default Timer;
