const tiles = Array.from(document.getElementsByClassName('tile'))
// link my my tile from my html to my JS so i am able to make it so when you click on a 
// tile it will add a value to it wether being X or O.
console.log('Js is working', tiles)
const generateNew = document.getElementById('generateNew')
const winText = document.getElementById('winText')
const boardTiles = [null, null, null, null, null, null, null, null, null]
const Os = 'O'
const Xs = 'X'
// these are our players
let currentPlayer = Xs


const board = () => {
    tiles.forEach((tile, index) => {
        let styleString = ''
        if (index < 3) {
            String += `border-bottom`
        }
        if (index %3 === 0) {
            String += `border-right`
        }
        if (index %3 === 2) {
            String += `border-left`
        }
        if (index > 5) {
            String += `border-top`
        }
        tile.style = String
        tile.addEventListener('click', tilePlay)
    }) 
}
// this it to make it so when you click on a tile it will slect that tile.
// i got this information after watching some videos on how to get an area in html to 
// be able to be clicked on with out making it a button.


const tilePlay = (event) => {
    //making sure my tiles are working as intended.
    const id = event.target.id
    if(!boardTiles[id]){
        boardTiles[id] =currentPlayer
        event.target.innerText = currentPlayer

        if(playerWin()) { 
            winText.innerText = `${currentPlayer} + 'Wins!'`
            return
            // who ever makes the matching to win the game gets this message saying that they have won!
        }
        currentPlayer = currentPlayer === Xs ? Os : Xs 
        // this is the way you can sycle through players so no one is playing more than one a turn.
    }
}

const playerWin = () => {
    if(boardTiles[0] === currentPlayer){
        if(boardTiles[1] === currentPlayer && boardTiles[2] === currentPlayer){
            return true
            // Wins by having all the top
        }
        if(boardTiles[3] === currentPlayer && boardTiles[6] === currentPlayer){
            return true
            //wins verticly on the left
        }
        if(boardTiles[4] === currentPlayer && boardTiles[8] === currentPlayer){
            return true
            //wins diagnolly from top left to bottom right
        }
    }
    if(boardTiles[8] === currentPlayer){
        if(boardTiles[2] === currentPlayer && boardTiles[5] === currentPlayer){
            return true
            // Wins bottom
        }
        if(boardTiles[6] === currentPlayer && boardTiles[7] === currentPlayer){
            return true
            //wins right side
        }
    }
    if(boardTiles[4] === currentPlayer){
        if(boardTiles[1] === currentPlayer && boardTiles[7] === currentPlayer){
            return true
            // Wins down the middle
        }
        if(boardTiles[3] === currentPlayer && boardTiles[5] === currentPlayer){
            return true
            //wins acrosss the middle
        }
    }
}


const newGame = () => {
        boardTiles.forEach((tile, index) => {
            boardTiles[index] = null
        })
        tiles.forEach(tile => [
            tile.innerText = ''
        ])
        currentPlayer = Xs
}
generateNew.addEventListener('click', newGame)

newGame()
board()