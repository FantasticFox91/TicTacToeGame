let gameBoard = {
    board: [],
}

let displayController

const createPlayer = ({ userName}) => ({
    userName,
    score: 0,
    setUserName (userNmae){
        this.userName = userName;
        return this
    }
});
