import React from 'react';
import styles from './NewGameButton.module.scss';

class NewGameButton extends React.Component<NewGameButtonProps> {
    render(): JSX.Element {
        return (
            <button className={styles.newGameButton} onClick={this.props.onNewGame}>
                New game
            </button>
        );
    }
}

interface NewGameButtonProps {
    onNewGame: () => void;
}

export default NewGameButton;
