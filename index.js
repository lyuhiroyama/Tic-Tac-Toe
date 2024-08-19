const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]; // Private variable.
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square", id="squre-${index}">${square}</div>`;
        })
        document.querySelector("#gameboard").innerHTML = boardHTML; 
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    }
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    const getGameboard = () => gameboard; // Accessor method

    return {
        render,
        update,
        getGameboard
    }
})();

const createPlayer = (player, mark) => {
    return {player, mark};
};

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    const restart = () => {
        for (let i=0; i<9; i++) {
            Gameboard.update(i, "");
        }
    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1]);
        if (Gameboard.getGameboard()[index] != "") {
            return;
        }
        Gameboard.update(index, players[currentPlayerIndex].mark);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }
    
    return {
        start,
        restart,
        handleClick
    }
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})

const resetButton = document.querySelector('#restart-button');
resetButton.addEventListener("click", () => {
    Game.restart();
})