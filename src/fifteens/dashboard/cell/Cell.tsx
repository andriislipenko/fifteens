import React from 'react';
import styles from './Cell.module.scss';

class Cell extends React.Component<CellProps> {
    private number: number;
    private xPosition: number;
    private yPosition: number;

    constructor (props: CellProps) {
        super(props);

        this.number = props.number;
        this.xPosition = props.xPosition;
        this.yPosition = props.yPosition;
    }

    public render(): JSX.Element {
        return (
            <div className={styles.container}>
                <div className={styles.number}>{this.number}</div>
            </div>
        );
    }
}

interface CellProps {
    number: number;
    xPosition: number;
    yPosition: number;
}

export default Cell;
