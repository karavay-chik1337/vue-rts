import { CELL_HALF_W, CELL_HALF_H } from './constants.js';

//преобразование координат клетки в пиксели
export function cellToWorld(col, row) {
    return {
        x: (col - row) * CELL_HALF_W,
        y: (col + row) * CELL_HALF_H,
    };
}

//обратное преобразование
export function worldToCell(x, y) {
    return {
        col: (x / CELL_HALF_W + y / CELL_HALF_H) / 2,
        row: (y / CELL_HALF_H - x / CELL_HALF_W) / 2,
    };
}