console.log("hi")
let color = "black";
let click = true;
let isDrawing = false; // Starts as false

// Capturing the board div
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    console.log("hi")

    let board = document.querySelector(".board");

    // To check if mouse is down, up, or left board
    board.addEventListener("mousedown", () => {
        isDrawing = true; // Mouse pressed, then start drawing
    });

    board.addEventListener("mouseup", () => {
        isDrawing = false; // Mouse released, then stop drawing
    });

    board.addEventListener("mouseleave", () => {
        isDrawing = false; // Mouse left board, then start drawing
    });

    // Popup button for Custom size
    document.querySelector("#popup").addEventListener("click", () => {
        let size = prompt("Enter grid size (2-100):");
        changeSize(size);
    });

    // Black button
    document.querySelector(".btn-dark").addEventListener("click", () => {
        changeColor("black");
    });

    // Random colour button
    document.querySelector(".btn-info").addEventListener("click", () => {
        changeColor("random");
    });

    document.querySelector(".btn-secondary").addEventListener("click", () => {
        resetBoard();
    });
}) 


// Changing board custom size
function createBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", colorSquare); // Attaching it to squares
        square.addEventListener("mousedown", colorSquare); // Attaching it to squares
        board.insertAdjacentElement("beforeend", square);
    }
}



// Alert if there are too many sqaures
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input);
    } else {
        alert("Please enter a number between 2 and 100");
    }
}

// Colouring the squares if board is clicked
function colorSquare() {
    if (isDrawing) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// Changing the colour by choice
function changeColor(choice) {
    color = choice;
}


// Reseting the board
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}