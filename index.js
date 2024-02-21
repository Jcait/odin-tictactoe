const game = (function() {
    const gameBoard = ["","","","","","","","",""]

    function addSign(i) {
        gameBoard[i] = "X"
    }



    return {
        gameBoard,
        addSign
    }

})()