import React, { CSSProperties } from 'react';
import styles from './Cell.module.scss';

class Cell extends React.Component<CellProps> {
    public render(): JSX.Element {
        const containerClassNames: string = `${styles.container} ${!this.props.number ? styles.emplty : ''}`;
        const gridPosition: CSSProperties = {
            'gridColumn': this.props.y,
            'gridRow': this.props.x
        };

        return (
            <div 
                className={containerClassNames}
                style={gridPosition}
                onClick={(e) => this.props.onClick(this.props.number)}
            >
                <div className={styles.number}>{this.props.number}</div>
            </div>
        );
    }
}

interface CellProps {
    number: number | null;
    x: number;
    y: number;
    onClick: (number: number) => void;
}

export default Cell;
