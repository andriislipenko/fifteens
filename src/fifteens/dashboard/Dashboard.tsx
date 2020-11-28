import React from 'react';
import Cell from './cell/Cell';
import styles from './Dashboard.module.scss';

class Dashboard extends React.Component {
    private cells: JSX.Element[] = [];
    
    public render(): JSX.Element {
        if (!this.cells || this.cells.length === 0) {
            this.generateCells();
        }

        return (
            <div className={styles.dashboard}>
                {this.cells.map((cell: JSX.Element) => cell)}
            </div>
        );
    }

    private generateCells(): void {
        for (let i = 1; i < 16; i++) {
            const xPosition: number = i % 4 || 4;
            const yPosition: number = Math.ceil(i / 4);
            const cell: JSX.Element = <Cell number={i} xPosition={xPosition} yPosition={yPosition} key={i}/>
            this.cells.push(cell);
        }
    }
}

export default Dashboard;
