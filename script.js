let gameBoard = {
    board: ["","","",
            "","","",
            "","",""],
}


const newGameForm = document.querySelector('.new-game');
const endGameForm = document.querySelector('.end-game');
const newRoundBtn = document.querySelector('.new-round-btn');
const newGameBtn = document.querySelector('.new-game-btn');
const checkMark = "&#10003";
const crossMark = "&#215";

function toggleHidden(block){
    block.classList.toggle('hidden');
}


function newGame(){
    resetGame();
    newGameForm.classList.remove('hidden')
}

function checkResult(){
    if(gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X'){
        endGameForm.classList.remove('hidden')
    }
    //
    if(gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O'){
        endGameForm.classList.remove('hidden')
    }
    if(gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O'){
        endGameForm.classList.remove('hidden')
    }

}

function resetGame(){
    gameBoard.board = ["","","","","","","","",""];
    drawGameFromObject();
}

function drawGameFromObject(){
    for(let i = 0; i <=8;i++){
        btns[i].textContent = gameBoard.board[i]
    }
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
    checkResult(); 
    }else{
    item.textContent = "O"
    count--
    gameBoard.board[Number(item.dataset.num)] = item.textContent
    checkResult();     
}}}))


document.querySelector('#gameMode').addEventListener('change',()=> {
    if(event.target.value === "Human"){
        document.querySelector('#AIlvl').remove()
        let label = document.createElement('label');
        let input = document.createElement('input');
        let p = document.createElement('p');
        let br = document.createElement('br');
        p.textContent = "What's your name, Player 2? ";
        input.size = 10;
        label.appendChild(p);
        label.appendChild(input);
        label.appendChild(br);
        label.id = 'humanAdd'
        document.querySelector('form').insertBefore(label,document.querySelector('#start'))
    }else if(event.target.value === "AI"){
        document.querySelector('#humanAdd').remove()
        let label = document.createElement('label');
        let select = document.createElement('select');
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        let p = document.createElement('p');
        let br = document.createElement('br');
        option1.value = "easy";
        option1.textContent = "Easy";
        option2.value = "medium";
        option2.textContent = "Medium";
        option3.value = "hard";
        option3.textContent = "Hard";
        p.textContent = "Choose AI level";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        label.appendChild(p);
        label.appendChild(select);
        label.appendChild(br);
        label.id = "AIlvl"
        document.querySelector('form').insertBefore(label,document.querySelector('#start'))
    }
})

document.querySelector('#start').addEventListener('click',(e) => {
    e.preventDefault();
    toggleHidden(newGameForm);
})

newGameBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    toggleHidden(endGameForm);
    resetGame();
    toggleHidden(newGameForm)
})

newRoundBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    toggleHidden(endGameForm)
    resetGame()
})
