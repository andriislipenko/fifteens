import React from 'react';
import Dashboard from './dashboard/Dashboard';
import styles from './Fifteens.module.scss';
import MovesCounter from './moveCounter/MovesCounter';
import NewGameButton from './newGameButton/NewGameButton';
import Timer from './timer/Timer';

class Fifteens extends React.Component<any, FifteensState> {
    private timerId: number;

    constructor(props: any) {
        super(props);

        this.onNewGame = this.onNewGame.bind(this);
        this.onGameStarted = this.onGameStarted.bind(this);
        this.onGameStoped = this.onGameStoped.bind(this);
        this.onCellMoved = this.onCellMoved.bind(this);

        this.state = {
            shouldStartNewGame: true,
            isGameProceeds: false,
            seconds: 0,
            movesCount: 0
        }
    }

    public render(): JSX.Element {
        return (
            <div className={styles.container}>
                <div className={styles.countersContainer}>
                    <div className={styles.movesCounter}>
                        <MovesCounter movesCount={this.state.movesCount} />
                    </div>
                    <div className={styles.timer}>
                        <Timer seconds={this.state.seconds}/>
                    </div>
                </div>
                <Dashboard 
                    isGameProceeds={this.state.isGameProceeds}
                    shouldStartNewGame={this.state.shouldStartNewGame}
                    onGameStarts={this.onGameStarted}
                    onGameStoped={this.onGameStoped}
                    onCellMoved={this.onCellMoved}
                />
                <div className={styles.newGameButtonContainer}>
                    <NewGameButton onNewGame={this.onNewGame} />
                </div>
            </div>
        );
    }

    private onNewGame(): void {
        this.setState({shouldStartNewGame: true});
    }

    private onGameStarted(): void {
        this.setState({
            isGameProceeds: true,
            shouldStartNewGame: false,
            seconds: 0,
            movesCount: 0
        });
    }

    private onGameStoped(): void {
        this.setState({
            isGameProceeds: false
        });

        clearInterval(this.timerId);
    }

    private onCellMoved(): void {
        this.setState({
            movesCount: this.state.movesCount + 1
        });

        if (this.state.isGameProceeds && this.state.seconds === 0 && !this.timerId) {
            this.timerId = window.setInterval(() => {
                this.setState({
                    seconds: this.state.seconds + 1
                })
            }, 1000)
        }
    }
}

interface FifteensState {
    shouldStartNewGame: boolean;
    isGameProceeds: boolean;
    seconds: number;
    movesCount: number;
}

export default Fifteens;
