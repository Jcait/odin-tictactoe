

let test = [1,3,5]
let testTwo = [1,5,7]
let testThree = [9,1,2,4,5,3]

const winCheck = (arr) => {
    const winMoves = [[1,2,3], [1,4,7], [1,5,9],
    [2,5,8], [3,5,7], [3,6,9], [4,5,6],
    [7,8,9]]

    for(let i = 0; i < winMoves.length; i++) {
        console.log(arr)
        if(winMoves[i].every(val => arr.includes(val))) {
            return "Winner"
        } 
    }   
}

const game = (function() {

    // create players
    const createPlayer = ({name,sign,points, moves}) => ({
        name,
        sign,
        points,
        moves
    })

    const playerOne = createPlayer({
        name: "test",
        sign: "X",
        points: 0,
        moves: []
    })

    const playerTwo = createPlayer({
        name: "test2",
        sign: "O",
        points: 0,
        moves: []
    })
    const gameBoard = [ "X","","",
                        "X","X","",
                        "","",""]

    let _currentTurn
    let winMoves = [[1,2,3], [1,4,7], [1,5,9],
                    [2,5,8], [3,5,7], [3,6,9],
                    [7,8,9]]

// Starts game and randomly selects starting player

    function gameStart() {
        const result = Math.floor(Math.random() *10 )
        console.log(result)
        playerTurn(result)
    }
    function playerTurn(result) {
        if(result % 2 == 0) {
            _currentTurn = playerOne
        } else { 

        _currentTurn = playerTwo}

    }

// checks if spots already taken before applying
    function play(i) {
        if(gameBoard[i] != ""
        && _currentTurn.sign) {
            console.log("This spot is taken")
        } else {
            addSign(_currentTurn, i)
        }
    }

    function addSign(_currentTurn,i) {
        console.log(_currentTurn)
        gameBoard[i] = _currentTurn.sign
        _currentTurn.moves.push(i)
        changeTurn(_currentTurn)
    }

    function changeTurn(_currentTurn) {
        console.log(_currentTurn)
        if(_currentTurn == playerOne) {
            _currentTurn = playerTwo
            console.log(_currentTurn)
        } else {
            _currentTurn = playerOne
            console.log(_currentTurn)
        }
    }


    return {
        gameBoard,
        playerOne,
        gameStart,
        play,
        changeTurn,
        winMoves
    }

})()