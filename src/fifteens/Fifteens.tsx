import React from 'react';
import Dashboard from './dashboard/Dashboard';
import styles from './Fifteens.module.scss';
import NewGameButton from './newGameButton/NewGameButton';

class Fifteens extends React.Component<any, FifteensState> {
    constructor(props: any) {
        super(props);

        this.onNewGame = this.onNewGame.bind(this);
        this.onGameStarted = this.onGameStarted.bind(this);
        this.onGameStoped = this.onGameStoped.bind(this);

        this.state = {
            shouldStartNewGame: true,
            isGameProceeds: false
        }
    }

    public render(): JSX.Element {
        return (
            <div className={styles.container}>
                <Dashboard 
                    isGameProceeds={this.state.isGameProceeds}
                    shouldStartNewGame={this.state.shouldStartNewGame}
                    onGameStarts={this.onGameStarted}
                    onGameStoped={this.onGameStoped}
                />
                <div className={styles.newGameButtonContainer}>
                    <NewGameButton onNewGame={this.onNewGame}/>
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
            shouldStartNewGame: false
        });
    }

    private onGameStoped(): void {
        this.setState({isGameProceeds: false});
    }
}

interface FifteensState {
    shouldStartNewGame: boolean;
    isGameProceeds: boolean;
}

export default Fifteens;
