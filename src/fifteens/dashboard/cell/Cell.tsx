import React from 'react';
import styles from './Cell.module.scss';

class Cell extends React.Component<CellProps> {
    private number: number | null;
    private onClick: (number: number) => void;

    constructor (props: CellProps) {
        super(props);

        this.number = props.number;
        this.onClick = props.onClick;
    }

    public render(): JSX.Element {
        const containerClassNames: string = `${styles.container} ${!this.number ? styles.emplty : ''}`;

        return (
            <div className={containerClassNames} onClick={(e) => this.onClick(this.number)}>
                <div className={styles.number}>{this.number}</div>
            </div>
        );
    }
}

interface CellProps {
    number: number | null;
    onClick: (number: number) => void;
}

export default Cell;
