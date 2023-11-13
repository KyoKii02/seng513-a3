Explanation

Animations
-

Purpose:
The custom animation is designed to highlight the column when a user hovers over it, providing a visual indication of where a piece will be placed.

Implementation:
- AI use primarily used to help implement this portion of the code.

Mouseover Event Listeners:
- For each hole on the game board, event listeners are added to detect mouseover and mouseout events.
- mouseover triggers the highlightColumn function, providing feedback when the user hovers over a column.
- mouseout triggers the removeColumnHighlight function, removing the highlight when the user moves away.

Highlight Column Function:
- The highlightColumn function takes a column as input and iterates through the rows to find the lowest unoccupied hole.
- It adds the CSS class hovered to the corresponding hole, triggering the glow effect defined in the CSS.

Remove Column Highlight Function:
- The removeColumnHighlight function removes the hovered class from all holes, eliminating the glow effect.

Piece Placement & Endgame Handling
-

Purpose:
The piece placement mechanism is responsible for dropping game pieces into the lowest unoccupied hole in a selected column. It also checks for a win, draw, and updates the turn display.

Implementation:
- AI was used to fix the bugs specifically within the placePiece implementation, while a re-implementation was done for the checkWin and countConnected.

Place Piece Function:
- The placePiece function takes a column as input and iterates through the rows to find the lowest unoccupied hole.
- It creates a new HTML div element representing the game piece and appends it to the selected hole.
- After placing the piece, it checks for a win, draw, updates the turn display, and ends the game if necessary.

Check Win Function:
- The checkWin function determines if a player has achieved four connected pieces horizontally, vertically, or diagonally.
- It utilizes a countConnected helper function to check the number of connected pieces in a given direction.
- AI was used to help implement this function to ensure that the program properly detects the win condition.

Check Draw Function:
- The checkDraw function checks if all spaces on the game board are occupied, indicating a draw.


Victory Detection Handling
-

Purpose:
The custom algorithm is used to check for a win by counting the number of connected pieces in various directions.

Implementation:
- AI was used to help implement the function below in order to ensure there were no problems when searching through the direction.

Count Connected Function:
- The countConnected function takes the current row, column, and direction (specified by dirRow and dirCol) as input and searches the given direction.
- It counts the number of connected pieces of the same color in the specified direction until 4 consecutive pieces are detected or the same color piece is not detected.
