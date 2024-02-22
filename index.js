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
    const gameBoard = [ "X","","",
                        "X","X","",
                        "","",""]

    let _currentTurn



    function gameStart() {
        const result = Math.floor(Math.random() *10 )
        console.log(result)
        playerTurn(result)
    }
    function playerTurn(result) {
        if(result % 2 == 0) {
            _currentTurn = playerOne
        } else {

        return "test" }

    }

    function addSign(i) {
        console.log(_currentTurn)
        gameBoard[i] = _currentTurn.sign
        _currentTurn.moves.push(i)
    }


    return {
        gameBoard,
        playerOne,
        gameStart,
        addSign, 
    }

})()