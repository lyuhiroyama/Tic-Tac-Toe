const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square", id="squre-${index}">${square}</div>`;
        })
    }
    document.querySelector("#gameboard").textContent = boardHTML; // prolly has to be innerHTML
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    // Game.start();
})