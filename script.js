let gameBoard = {
    board: ["","","",
            "","","",
            "","",""],
}

let displayController

const userFactory = (name) => {
    this.score = 0;
    return {name, score}
}
let count = 0;

const btns = document.querySelectorAll('.cell');

btns.forEach(item => item.addEventListener('click',() =>{
    if(item.textContent === ""){
    if(count === 0){
    
    item.textContent = "X"
    count++
    gameBoard.board[Number(item.dataset.num)] = item.textContent 
    }else{
    item.textContent = "O"
    count--
    gameBoard.board[Number(item.dataset.num)] = item.textContent    
}}}))

document.querySelector('.reset').addEventListener('click', () => btns.forEach(item => item.textContent = ""))

for(let i = 0; i <=8;i++){
    btns[i].textContent = gameBoard.board[i]
}