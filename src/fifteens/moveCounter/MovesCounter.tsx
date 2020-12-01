import React from 'react';
import styles from './MovesCounter.module.scss';

class MovesCounter extends React.Component<MovesCounterProps> {
    render(): JSX.Element {
        return (
            <div className={styles.container}>
                Moves: {this.props.movesCount}
            </div>
        );
    }
}

interface MovesCounterProps {
    movesCount: number;
}

export default MovesCounter;
