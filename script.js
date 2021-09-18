let gameBoard = {
    board: ["","","",
            "","","",
            "","",""],
}

const newGameForm = document.querySelector('.new-game');
const endGameForm = document.querySelector('.end-game');
const newRoundBtn = document.querySelector('.new-round-btn');
const newGameBtn = document.querySelector('.new-game-btn');
const resetGameBtn = document.querySelector('.reset-btn');
const player1NameShow = document.querySelector('.player1ShowName');
const player2NameShow = document.querySelector('.player2ShowName');
const player1Input = document.querySelector('#player1')
let count = 0;
const btns = document.querySelectorAll('.cell');


function toggleHidden(block){
    block.classList.toggle('hidden');
}

function newGame(){
    resetGame();
    newGameForm.classList.remove('hidden')
}

function checkResult(){
    if(gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X'){
        toggleHidden(endGameForm);
    }
    if(gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X'){
        toggleHidden(endGameForm)
    }
    //
    if(gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O'){
        toggleHidden(endGameForm)
    }
    if(gameBoard.board.indexOf('') === -1){
        toggleHidden(endGameForm)
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

const userFactory = (name) => {
    this.score = 0;
    return {name, score}
}

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
        input.id = "player2"
        input.pattern = "[A-Za-z]{1,30}";
        input.required = true;
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

document.querySelector('#start').onclick = (e) =>{
    let gameModeChosen = document.querySelector('#gameModeHuman').checked
    if(gameModeChosen){
        if(player1Input.validity.patternMismatch && document.querySelector('#player2').validity.patternMismatch){
            player1Input.setCustomValidity('Wrong name. Did you use english letters?');
            document.querySelector('#player2').setCustomValidity('Wrong name. Did you use english letters?');
        }else if(player1Input.validity.patternMismatch && !document.querySelector('#player2').validity.patternMismatch){
            player1Input.setCustomValidity('Wrong name. Did you use english letters?');   
        }else if(!player1Input.validity.patternMismatch && document.querySelector('#player2').validity.patternMismatch){
            document.querySelector('#player2').setCustomValidity('Wrong name. Did you use english letters?');
        }else{
            e.preventDefault();
            let player1Name = document.querySelector('#player1').value;
            player2NameShow.textContent = "Computer"
            if(player1Name.length > 0){
            player1Name = player1Name[0].toUpperCase() + player1Name.slice(1);
            }
            let player2Name = document.querySelector('#player2').value;
            player2Name = player2Name[0].toUpperCase() + player2Name.slice(1);
            player2NameShow.textContent = player2Name;
            toggleHidden(newGameForm);
            player1NameShow.textContent = player1Name; 
        }
    }else{
        if(player1Input.validity.patternMismatch){
            player1Input.setCustomValidity('Wrong name. Did you use english letters?');
        }else{
        e.preventDefault();
        let player1Name = document.querySelector('#player1').value;
        player2NameShow.textContent = "Computer"
        if(player1Name.length > 0){
        player1Name = player1Name[0].toUpperCase() + player1Name.slice(1);
        toggleHidden(newGameForm);
        player1NameShow.textContent = player1Name; 
        } 
        }
    }
}

newGameBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    toggleHidden(endGameForm);
    resetGame();
    toggleHidden(newGameForm)
})

newRoundBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    toggleHidden(endGameForm)
    resetGame()
})

resetGameBtn.addEventListener('click', () => {
    toggleHidden(newGameForm)
})


