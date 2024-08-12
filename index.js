const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]; // Private. Accessible via render().
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square", id="squre-${index}">${square}</div>`;
        })
        document.querySelector("#gameboard").innerHTML = boardHTML; 

    }

    return {
        render
    }
})();

const createPlayer = (player, mark) => {
    return {player, mark};
};

const Game = (() => {
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    }
    const handleClick = (event) => {
        const index = parseInt(event.target.id.split("-")[1]);
        alert(index);
    }
    
    return {
        start,
        handleClick
    }
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
})