import React from 'react';

class NewGameButton extends React.Component<NewGameButtonProps> {
    render(): JSX.Element {
        return (
            <button onClick={this.props.onNewGame}>
                New game
            </button>
        );
    }
}

interface NewGameButtonProps {
    onNewGame: () => void;
}

export default NewGameButton;
