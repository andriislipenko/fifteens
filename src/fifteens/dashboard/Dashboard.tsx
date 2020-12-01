import React from 'react';
import { CellState } from '../entities/CellState';
import Cell from './cell/Cell';
import styles from './Dashboard.module.scss';

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    private readonly FINAL_STATE: CellState[] = this.createFinalState();

    private cells: JSX.Element[];

    constructor(props: DashboardProps) {
        super(props);

        this.onCellClicked = this.onCellClicked.bind(this);

        this.state = {
            cellsState: this.createRandomCellsState()
        }
    }
    
    render(): JSX.Element {
        if (this.props.shouldStartNewGame) {
            this.setState({
                cellsState: this.createRandomCellsState()
            });
            this.props.onGameStarts();
        }

        if (this.props.isGameProceeds && this.checkCompleteness()) {
            this.props.onGameStoped();
        }

        this.cells = this.collectCells();

        let onDoneBlock: JSX.Element = null;
        if (!this.props.isGameProceeds) {
            onDoneBlock = <div className={styles.doneMessage}>Done!</div>
        }

        const dashboardStyleClasses: string = `
            ${styles.dashboard}
            ${!this.props.isGameProceeds ? styles.onDone : ''}
        `;

        return (
            <div className={styles.container}>
                <div className={dashboardStyleClasses}>
                    {this.cells}
                </div>
                {onDoneBlock}
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

    private onCellClicked(number: number): void {
        if (!number || !this.props.isGameProceeds) return;

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
        this.props.onCellMoved();
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

    private checkCompleteness(): boolean {
        for (let i = 0; i < this.FINAL_STATE.length; i++) {
            const x = this.state.cellsState[i].x;
            const y = this.state.cellsState[i].y;

            if (x !== this.FINAL_STATE[i].x || y !== this.FINAL_STATE[i].y) {
                return false;
            }
        }

        return true;
    }

    private createRandomCellsState(): CellState[] {
        const cellsStateDonor: CellState[] = this.createFinalState();
        let cellsState: CellState[] = [];

        for(let i = 0; i < this.FINAL_STATE.length; i++) {
            const randomIndex: number = Math.floor(Math.random() * cellsStateDonor.length);

            cellsState.push(cellsStateDonor[randomIndex]);
            cellsStateDonor.splice(randomIndex, 1);
        }

        return cellsState;
    }

    private createFinalState(): CellState[] {
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
}

interface DashboardProps {
    isGameProceeds: boolean;
    shouldStartNewGame: boolean;
    onGameStarts: () => void;
    onGameStoped: () => void;
    onCellMoved: () => void;
}

interface DashboardState {
    cellsState: CellState[];
}

export default Dashboard;
