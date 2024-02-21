const game = (function() {
    const gameBoard = [ "X","","",
                        "X","X","",
                        "","",""]
    const _playerOne = "X"
    const _playerTwo = "O"
    let _currentTurn

    function gameStart() {
        const result = Math.floor(Math.random() *10 )
        console.log(result)
        playerTurn(result)
    }
    function playerTurn(result) {
        if(result % 2 == 0) {
            _currentTurncurrentTurn = _playerOne
        } else {
            _currentTurn = _playerTwo
        }

    }



    function addSign(i) {
        gameBoard[i] = _currentTurn
    }


    return {
        gameBoard,
        gameStart,
        addSign
    }

})()