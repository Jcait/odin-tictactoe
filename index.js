

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
        moves: [0,1]
    })

    const playerTwo = createPlayer({
        name: "test2",
        sign: "O",
        points: 0,
        moves: [0,1]
    })
    const gameBoard = [ "","","",
                        "","","",
                        "","",""]
                        // ["0","1","2",
                        //  "3","4","5",
                        //  "6","7","8"]
let  _currentTurn

function setTurn(player) {
    _currentTurn = player

}
// Starts game and randomly selects starting player

    function gameStart() {
        const result = Math.floor(Math.random() *10 )
        playerTurn(result)
    }
    function playerTurn(result) {
        if(result % 2 == 0) {
            setTurn(playerOne)
            
        } else { 

        setTurn(playerTwo)
        }
        console.log(_currentTurn)
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
        gameBoard[i] = _currentTurn.sign
        _currentTurn.moves.push(i)
        console.log(_currentTurn.moves)
        winCheck(_currentTurn.moves)
        changeTurn(_currentTurn)
    }

    const winCheck = (arr) => {
        console.log(`checking win ${arr}`)
        const winMoves = [[0,1,2], [0,3,6], [0,4,8],
        [1,4,7], [2,4,6], [2,5,8],
        [6,7,8]]
    
        for(let i = 0; i < winMoves.length; i++) {
            console.log(arr)
            console.log(winMoves[i])
            if(winMoves[i].every(val => arr.includes(val))) {
                console.log("winner")
                return
            } 
        }   
    }

    function changeTurn(_currentTurn) {
        if(_currentTurn === playerOne) {
            console.log("boop")
            setTurn(playerTwo)
        } else {
            console.log("beep")
            setTurn(playerOne)
        }
    }


    return {
        gameBoard,
        playerOne,
        gameStart,
        play,
        _currentTurn,
        playerOne
    }

})()