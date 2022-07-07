document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {
    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {

            if (playertime == 1) {
                playertime = "Mago"
            } else playertime = "Dragão"
            alert("O jogo acabou - O vencedor foi o " + playertime);

        }, 10);
    }
    uptadeSquares();

    //console.log(event.target);
}

function uptadeSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class = '${symbol}'></div>`
        }



    })

}