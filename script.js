let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

let currentPlayer = 'X';
let noOfPlays = 0;
let isGameOver = false;


function playerMove(cell) {
    if (isGameOver) {
        document.getElementById('playerTurn').innerHTML = "Game over! restart game";
        return;
    }

    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

    // check if the click is valid
    if (gameBoard[row][col] === "") {
        //update the particular cell on gameBoard and UI
        gameBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        noOfPlays++;

        if (checkWinner()) { // check for winne

            document.getElementById('result').innerHTML = `Player '${currentPlayer}' won!`;
            isGameOver = true;

        } else if (checkTie()) { // else check for a tie

            document.getElementById('result').innerHTML = `It is a tie!`;
            isGameOver = true;

        } else { // the game continues

            if (currentPlayer === 'X') {
                currentPlayer = 'O';
                cell.style.backgroundColor = '#FEEFB3';
            }
            else {
                currentPlayer = 'X';
                cell.style.backgroundColor = '#FFBABA'
            }
            document.getElementById('playerTurn').innerHTML = `Now it is the turn of '${currentPlayer}'!`
        }
    }

}

function checkWinner() {

    //rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer
            && gameBoard[i][1] === currentPlayer
            && gameBoard[i][2] === currentPlayer) {
            isGameOver = true;
            return true;
        }
    }

    //columns

    for (let i = 0; i < 3; i++) {
        if (gameBoard[0][i] === currentPlayer
            && gameBoard[1][i] === currentPlayer
            && gameBoard[2][i] === currentPlayer) {
            return true;
        }
    }

    //diagonal 1

    if (gameBoard[0][0] === currentPlayer
        && gameBoard[1][1] === currentPlayer
        && gameBoard[2][2] === currentPlayer) {
        return true;
    }

    //diagonal 2

    if (gameBoard[0][2] === currentPlayer
        && gameBoard[1][1] === currentPlayer
        && gameBoard[2][0] === currentPlayer) {
        return true;
    }

}

function checkTie() {
    if (noOfPlays == 9) {
        return true;
    }
    return false;
}

function restartGame() {
    gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    currentPlayer = 'X';
    document.getElementById('playerTurn').innerHTML = "It is the turn of 'X'!";
    document.getElementById('result').innerHTML = "";
    noOfPlays = 0;
    isGameOver = false;

    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].style.backgroundColor = '';
    }
    //another ways to write for loop
    // for(let cell of cells) {
    //     cell.innerHTML = "";
    // }

    // cells.forEach(cell => {
    //     cell.innerHTML = "";
    // })
}
