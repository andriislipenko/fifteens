import React from 'react';
import { CellState } from '../entities/CellState';
import Cell from './cell/Cell';
import styles from './Dashboard.module.scss';

class Dashboard extends React.Component<any, DashboardState> {
    private cells: JSX.Element[];

    constructor(props: any) {
        super(props);

        this.onCellClicked = this.onCellClicked.bind(this);

        this.state = {
            cellsState: this.initCellsState()
        };
    }
    
    public render(): JSX.Element {
        this.cells = this.collectCells();

        return (
            <div className={styles.dashboard}>
                {this.cells}
            </div>
        );
    }

    private collectCells(): JSX.Element[] {
        let cells: JSX.Element[] = [];

        let number;
        for (let i = 0; i < 16; i++) {
            number = i + 1 < 16 ? i + 1 : null;
            
            cells.push(
                <Cell 
                    number={number}
                    x={this.state.cellsState[i].x}
                    y={this.state.cellsState[i].y}
                    onClick={this.onCellClicked}
                    key={i}
                />
            )
        }

        return cells;
    }

    private initCellsState(): CellState[] {
        let cellsState: CellState[] = [];

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                cellsState.push({
                    x: i,
                    y: j
                });
            }
        }

        return cellsState;
    }

    private onCellClicked(number: number): void {
        if (!number) return;

        this.handleCellsState(number);
    }

    private handleCellsState(number: number): void {
        const clickedCellIndex: number = number - 1;
        const emptyCellIndex: number = this.cells.length - 1;

        const clickedCell: JSX.Element = this.cells[clickedCellIndex];
        const emptyCell: JSX.Element = this.cells[emptyCellIndex];

        let prevX: number = clickedCell.props.x;
        let prevY: number = clickedCell.props.y;
        let nextX: number = emptyCell.props.x;
        let nextY: number = emptyCell.props.y;

        if (!this.isEmptyAround(prevX, prevY, nextX, nextY)) return;

        let cellsState: CellState[] = this.state.cellsState.slice();

        cellsState[clickedCellIndex].x = nextX;
        cellsState[clickedCellIndex].y = nextY;
        cellsState[emptyCellIndex].x = prevX;
        cellsState[emptyCellIndex].y = prevY;

        this.setState({cellsState});
    }

    private isEmptyAround(prevX: number, prevY: number, nextX: number, nextY: number): boolean {
        if (prevX === nextX) {
            if (prevY - 1 === nextY || prevY + 1 === nextY) return true;
        }

        if (prevY === nextY) {
            if(prevX - 1 === nextX || prevX + 1 === nextX) return true;
        }

        return false;
    }
}

interface DashboardState {
    cellsState: CellState[];
}

export default Dashboard;
