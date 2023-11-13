/*Course: SENG 513*/
/*Date: NOV 13, 2023*/
/*Assignment 3*/
/*Name: Kevin Phan*/
/*UCID:" 30053689*/

// Define variables and functions for the game here
const gameBoard = document.getElementById('gameBoard');
const holes = document.getElementsByClassName('hole');
const turnDisplay = document.getElementById('turnDisplay');

let yellowTurn = true;
let gameEnded = false;

// Add click event listeners for the holes
// Function Calls:
//      - placePiece(column)
// Implementation:
// Listens for a column with empty spaces to be clicked.
for (let hole of holes) {
    hole.addEventListener('click', function () {
        if (!gameEnded) {
            const column = Array.from(holes).indexOf(hole) % 7;
            placePiece(column);
        }
    });
}


////////// CUSTOM ANIMATION //////////
////////// AI ASSISTANCE //////////
// Add mouseover event listeners to each hole to highlight the corresponding column
for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('mouseover', function () {
        const column = i % 7;
        highlightColumn(column);
    });

    holes[i].addEventListener('mouseout', function () {
        removeColumnHighlight();
    });
}

////////// CUSTOM ANIMATION //////////
////////// AI ASSISTANCE //////////
// Function to highlight the lowest unoccupied hole in a column
function highlightColumn(column) {
    for (let row = 5; row >= 0; row--) {
        const color = getHoleColor(row, column);
        if (!color) {
            holes[row * 7 + column].classList.add('hovered');
            break;
        }
    }
}

////////// CUSTOM ANIMATION //////////
// Function to remove the column highlight
function removeColumnHighlight() {
    for (let i = 0; i < holes.length; i++) {
        holes[i].classList.remove('hovered');
    }
}


////////// CUSTOM INTERACTION MECHANISM //////////
////////// AI ASSISTANCE //////////
// Function to place a piece with animation
// Parameters:
//      - column: current column of the placed piece.
// Function Calls:
//      - checkWin(row, column)
//      - checkDraw()
//      - updateTurnDisplay()
//      - endGame()
function placePiece(column){
    // Place a piece by clicking anywhere within a column.
    // Piece falls to the lowest unoccupied hole of the column.
    // Piece cannot be placed if the column is full.
    // Detects if the game has ended
    for (let row = 5; row >= 0; row--) {
        const color = getHoleColor(row, column);
        if (!color) {
            const piece = document.createElement('div');
            piece.className = yellowTurn ? 'piece yellow' : 'piece red';
            holes[row * 7 + column].appendChild(piece);

            if (checkWin(row, column)) {
                endGame(`${yellowTurn ? 'Yellow' : 'Red'} Wins!`);
            } else if (checkDraw()) {
                endGame('It\'s a Draw!');
            } else {
                yellowTurn = !yellowTurn;
                updateTurnDisplay();
            }

            return;
        }
    }
}



// Function to update the current player turn
function updateTurnDisplay(){
    // Displays the player's turn: "Yellow's Turn" or "Red's Turn".
    turnDisplay.textContent = yellowTurn ? "Yellow's Turn" : "Red's Turn";
}


////////// CUSTOM ALGORITHM //////////
////////// AI ASSISTANCE //////////
// Function to check if there is a win
// Parameters:
//      - row: current row of the piece.
//      - column: current column of the piece.
// Function Calls:
//      - getHoleColor(row, column)
// Returns:
//      - true: 4 matching connected pieces in a line are found.
//      - false: less than 4 matches pieces in a line.
function checkWin(row, column){
    // Check horizontal, vertical, and diagonal directions for matching pieces.
    // Search within direction for 4 connected pieces.
    // Returns true if victory is detected, otherwise false.
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1] // horizontal, vertical, diagonal-right, diagonal-left
    ];

    for (let dir of directions) {
        const count = countConnected(row, column, dir[0], dir[1]) +
                      countConnected(row, column, -dir[0], -dir[1]) + 1;

        if (count >= 4) {
            return true;
        }
    }

    return false;
}

////////// CUSTOM ALGORITHM //////////
////////// AI ASSISTANCE //////////
// Helper function to count connected pieces in a direction
function countConnected(row, column, dirRow, dirCol) {
    const color = getHoleColor(row, column);
    let count = 0;

    for (let i = 1; i < 4; i++) {
        const newRow = row + i * dirRow;
        const newCol = column + i * dirCol;

        if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 &&
            getHoleColor(newRow, newCol) === color) {
            count++;
        } else {
            break;
        }
    }

    return count;
}



// Function to get the state of a specific hole
// Parameters:
//      - row: current row of the piece.
//      - column: current column of the piece.
// Returns:
//      - hole color: the color of the piece at the location.
//      - null: the space is empty.
function getHoleColor(row, column){
    // Find the hole
    // Detect if the hole is occupied.
    // If occupied, get the color of the piece.
    // Return color of piece if filled, otherwise null for empty.
    const hole = holes[row * 7 + column].querySelector('.piece');
    return hole ? hole.classList.contains('yellow') ? 'yellow' : 'red' : null;
}



// Function to check if there is a draw
// Returns:
//      - true: the game board has no available spaces.
//      - false: the game board has at least 1 available space.
function checkDraw(){
    // Check if all spaces are occupied.
    // Return if all spaces are occupied, false otherwise.
    for (let hole of holes) {
        if (!hole.querySelector('.piece')) {
            return false;
        }
    }
    return true;
}



// Function to end the game
// Parameters:
//      - message: contains message of the end game state.
function endGame(message){
    // Ends the game, preventing pieces from being placed.
    // Displays endgame message, draw or player victory.
    gameEnded = true;
    turnDisplay.textContent = message;
}



// Function to reset the game
function resetGame(){
    // Empty all occupied spaces.
    // Reset game state if endgame is achieved.
    for (let hole of holes) {
        hole.innerHTML = '';
    }

    yellowTurn = true;
    gameEnded = false;
    updateTurnDisplay();
}