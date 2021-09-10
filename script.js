let gameBoard = {
    board: [],
}

let displayController

const userFactory = (name) => {
    this.score = 0;
    return {name, score}
}