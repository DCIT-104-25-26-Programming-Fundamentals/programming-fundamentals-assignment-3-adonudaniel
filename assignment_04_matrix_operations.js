// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        matrix[i] = row.split(" ").map(Number);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

function transposeMatrix(matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function addMatrices(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[0].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }

    return result;
}

function multiplyMatrices(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        result[i] = [];

        for (let j = 0; j < b[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

function main() {

    console.log("PART A - Transpose Matrix");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    console.log("Original Matrix:");
    displayMatrix(matrix);

    console.log("Transposed Matrix:");
    displayMatrix(transposeMatrix(matrix));


    console.log("\nPART B - Add Two Matrices");

    let rows2 = readlineSync.questionInt("Enter number of rows: ");
    let cols2 = readlineSync.questionInt("Enter number of columns: ");

    console.log("Matrix A");
    let a = readMatrix(rows2, cols2);

    console.log("Matrix B");
    let b = readMatrix(rows2, cols2);

    console.log("Sum:");
    displayMatrix(addMatrices(a, b));


    console.log("\nPART C - Multiply Two Matrices");

    let r1 = readlineSync.questionInt("Rows of Matrix A: ");
    let c1 = readlineSync.questionInt("Columns of Matrix A: ");

    console.log("Matrix A");
    let m1 = readMatrix(r1, c1);

    let r2 = readlineSync.questionInt("Rows of Matrix B: ");
    let c2 = readlineSync.questionInt("Columns of Matrix B: ");

    if (c1 !== r2) {
        console.log("Matrix multiplication is not possible.");
        return;
    }

    console.log("Matrix B");
    let m2 = readMatrix(r2, c2);

    console.log("Product:");
    displayMatrix(multiplyMatrices(m1, m2));
}

main();
