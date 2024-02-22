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
    }


    return {
        gameBoard,
        playerOne,
        gameStart,
        play, 
    }

})()