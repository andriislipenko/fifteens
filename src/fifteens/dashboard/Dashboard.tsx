import React from 'react';
import Cell from './cell/Cell';
import styles from './Dashboard.module.scss';

class Dashboard extends React.Component<any, DashboardState> {
    constructor(props: any) {
        super(props);

        this.onCellClicked = this.onCellClicked.bind(this);

        this.state = { 
            cells: this.generateCells()
        };
    }
    
    public render(): JSX.Element {
        return (
            <div className={styles.dashboard}>
                {this.state.cells.flat()}
            </div>
        );
    }

    private onCellClicked(number: number): void {
        if (!number) return;

        this.handleCellsState(number);
    }

    private generateCells(): JSX.Element[][] {
        const cells: JSX.Element[][] = [];

        let k: number = 1;

        for (let i = 0; i < 4; i++) {
            cells[i] = [];
            for (let j = 0; j < 4; j++) {
                if (k > 15) {
                    cells[i][j] = <Cell
                        number={null}
                        key={'' + i + j}
                        onClick={this.onCellClicked}
                    />;
                    break;
                }

                cells[i][j] = <Cell
                    number={k}
                    key={'' + i + j}
                    onClick={this.onCellClicked}
                />;

                k++;
            }
        }

        return cells;
    }

    private handleCellsState(number: number): void {
        let prevX: number = null;
        let prevY: number = null;
        let nextX: number = null;
        let nextY: number = null;

        const cells: JSX.Element[][] = this.state.cells;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (cells[i][j].props.number === number) {
                    prevX = i;
                    prevY = j;
                }

                if (cells[i][j].props.number == null) {
                    nextX = i;
                    nextY = j
                }
            }

            if (prevX && nextX) break;
        }

        if (this.isEmptyAround(prevX, prevY, nextX, nextY)) return;

        const temp: JSX.Element = cells[prevX][prevY];
        cells[prevX][prevY] = cells[nextX][nextY];
        cells[nextX][nextY] = temp;

        this.setState({cells});
    }

    private isEmptyAround(prevX: number, prevY: number, nextX: number, nextY: number): boolean {
        if (!(prevX === nextX || prevY === nextY)) return true;

        if (prevX === nextX) {
            if (!(prevY - 1 === nextY || prevY + 1 === nextY)) return true;
        }

        if (prevY === nextY) {
            if(!(prevX - 1 === nextX || prevX + 1 === nextX)) return true;
        }

        return false;
    }
}

interface DashboardState {
    cells: JSX.Element[][];
}

export default Dashboard;
