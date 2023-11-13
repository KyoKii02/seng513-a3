Reflection

1. Learned
    - The implementation involved significant DOM manipulation to create, animate, and update the game board dynamically based on user interactions. When considering the initial implementation, things did not work entirely as planned. I learned that creating necessary modifications along the way helped fix the problems that may arise outside the initial scope of the design.
    - To ensure the game did not have any significant bugs, rigorous testing was needed which would include cases outside the expected normal functions of the game. I've learned to create test cases outside the box and implement changes that would restrict the user to the game's mechanic as much as possible.
    - The styling was crucial for creating an engaging and visually appealing user interface. I learned how to manage CSS properties to achieve the desired layout and animations that met the needs of the game and its basic functions.
    - The use of CSS and JS animations for the glowing holes and falling pieces provided a smooth and visually appealing effect. I learned how to trigger animations to the specific location needed and manage their timing accordingly.

2. Challenges
    - Coordinating the animation of falling pieces with the game logic was a challenge. Ensuring that animations do not interfere with the game state required precise timing adjustments. Ultimately the plan to have a separate function to do the animation was made via the style.css file.
    - Setting the win conditions was rather difficult as detecting and searching through lines often lead to bugs. The ensure that no bugs would appear up, I had made a helper function called countConnected() which would help search for matching pieces in a line while checkWin() would detect adjacent pieces.

3. Game's Complexity
    - Breaking down the game logic into modular functions (e.g., placePiece, checkWin) helped manage the complexity. Each function had a specific responsibility, making the code more readable and maintainable.
    - The core mechanics of the game was simple but the implementation was divided into 3 main sections. The first being the pieces being placed, ensuring that the pieces can be detected and only fall where intended and does not overflow the game board; the second being the end game detection which correctly determines when a game should end and where pieces should stop falling; and finally the third which ensures that the entire game state is properly reset at any point in time.

4. Initial vs. Final
    - An additional help function was added to the final product to help determine the win condition. Particularly, countConnected() was added to search a line for a win.
    - The animation was initially planned to be implemented in the js file. Instead in the final product, the animation was added to the style.css file.
    - Pieces falling was intended to be behind the blue game board. In the final design, this was scrapped as I couldn't figure out a way to fix it even when using tools like z-index.
    - The initial product didn't intend to have animations when interacting with the board itself. The final product had the holes and buttons glow when they are being hovered over to help provide more clarity for users.
    - The final product has a darker appearance than the initial design.

5. AI Assistance
    - The use of AI, specifically ChatGPT, was instrumental in providing necessary assistance and guidance for specific functionalities. The most notable value offered by AI was improved proficiency and productivity, reducing time required for implementation, and quick responses to problems with potential solutions.
    - AI helped modify existing code in sections where they were perceived as buggy or help rewrite areas that were not operating as intended. Rewriting normally would take a lot of time to ensure the parts that were broken are fixed without breaking anything else. AI would be able to account for what had already been implement and help shave time on rebuilding the functions.
    - While AI assistance was beneficial for specific aspects, the core logic of the game was structured well enough that the full implementation of the code were not necessary. A carefully made designed would help design the functions needed where as AI could only help improve on the existing code.