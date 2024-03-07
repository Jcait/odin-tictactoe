

const game = (function() {

    // create players
    const createPlayer = ({name,sign,points, moves}) => ({
        name,
        sign,
        points,
        moves
    })

    const playerOne = createPlayer({
        name: "",
        sign: "X",
        points: 0,
        moves: []
    })

    const playerTwo = createPlayer({
        name: "",
        sign: "O",
        points: 0,
        moves: []
    })
    let gameBoard = [ "","","",
                        "","","",
                        "","",""]
                        // ["0","1","2",
                        //  "3","4","5",
                        //  "6","7","8"]
let  _currentTurn

function setTurn(player) {
    _currentTurn = player
    announce(player)

}

let winner = false

let count = 0

let gameBegun = false

function drawCheck() {
    if(winner == false && 
        count == 9) {
           head.innerText = `The Game is a tie, please reset the board.`
           console.log("reset")
           enableReset()
           resetButton(resetBtn)
        }
}

function gameStarted() {
    gameBegun = true
}

function enableReset() {
    resetBtn.disabled = false
}

function disableReset() {
    resetBtn.disabled = true
}

function resetCount() {
    count = 0
}

// DOM cache

    const btn = document.querySelectorAll(".tac")
    const rdyBtn = document.querySelectorAll(".ready")
    const board = document.querySelector(".board")
    const boardBtn = board.querySelectorAll("button")
    const startBtn = document.querySelector(".start")
    const header = document.querySelector(".header")
    const head =  header.querySelector("h1")
    const resetBtn = document.querySelector(".reset")
    const nameUndo = document.querySelectorAll(".undo-button")


    // buttons
    function setBtn(btn){
            btn.forEach(button => {
            button.addEventListener("click", () => {
                const gridSpace = button.parentNode.className
                console.log(_currentTurn)
                renderCheck(button)
                 gridCheck(gridSpace)
                 drawCheck()

            })
        })
    }

    function announce(turn) {
       const head = header.querySelector("h1")
       if(winner) {
        head.innerText =`${turn.name} is the winner`
       }
       head.innerText = `It is ${turn.name} 's turn: "${turn.sign}"`
    }

    function gameSetup() {
        gameButton(rdyBtn)
        btnStart(startBtn)
        nameRedo(nameUndo)
    }


    
    function btnStart(startBtn) {
        startBtn.addEventListener("click", () => {
            nameCheck(startBtn)
            
        })
    }

    function nameCheck(startBtn) {
        if(playerOne.name == "" 
        || playerTwo.name == "") {
            alert("Please fill in both names and press ready")
        } else {
            gameStart()
            disableButton(startBtn)
        }
    }

    function gameButton(rdyBtn) {
        rdyBtn.forEach(button => {
            button.addEventListener("click", () => {
                let playerHeader = button.parentNode.querySelector("h1")
                const nameInput = button.parentNode.querySelector("input")
                console.log(playerHeader)
                if(nameInput.value) {
                    disableButton(button)
                } nameSetter(playerHeader, nameInput)
                
            })
        })
    }

    function resetButton(resetBtn) {
        resetBtn.addEventListener("click", () => {
            console.log("reset")
            reset()
            resetCount()
            clearBoard(board)
            disableReset()


        })
        }
        function nameRedo(nameUndo) {
            nameUndo.forEach(btn => {
            btn.addEventListener("click", () => {
                let readyBtn = btn.parentNode.parentNode.querySelector(".ready")
                let playerName = btn.parentNode.parentNode.querySelector("input")
                let defaultH = btn.parentNode.parentNode.querySelector("h1")
                if(playerName.className.includes("player-one")) {
                    playerOne.name = ""
                    defaultH.innerText = `Player One!`
                    playerName.value = ""
                    if(gameBegun){
                        playerOne.name = "Player One" 
                        announce(_currentTurn) 
                    }
                } else {
                    defaultH.innerText = `Player Two!`
                    playerTwo.name = ""
                    playerName.value = ""
                    if(gameBegun){
                        playerTwo.name = "Player Two" 
                        announce(_currentTurn) 
                    }
                }
                enableButton(readyBtn)

            }) 
            })
        }   




    



// Everything else
function clearBoard(board) {
    boardSquare = board.querySelectorAll("button")
    const img = board.querySelector("img")
    boardSquare.forEach(btn => {
            if(btn.hasChildNodes()) {
                btn.querySelector("img").remove()
            }
    })
    changeTurn(_currentTurn)

}
function reset() {
    playerOne.moves = []
    playerTwo.moves = []
    gameBoard = [ "","","",
                 "","","",
                 "","",""]
    if(winner) {
        boardBtn.forEach(btn => btn.disabled = false)
        winner = false
        announce(_currentTurn)
    }
}

    function nameSetter(playerHeader, nameInput) {
        if(nameInput.className.includes("player-one") 
        && nameInput.value != "") {
                playerHeader.innerText = nameInput.value
                playerOne.name = nameInput.value
        } else if(nameInput.className.includes("player-two")
            && nameInput.value != "") {
                playerHeader.innerText = nameInput.value
                playerTwo.name = nameInput.value
        } nameInput.value = ""
        if(gameBegun) {
            announce(_currentTurn)
        }
    } 

    function disableButton(button) {
        button.disabled = true
    }

    function enableButton(button) {
        button.disabled = false
    }

    function renderCheck(btn) {
        if(btn.hasChildNodes()) {
            return
        } else {
            render(btn)
            
        }
    }

    function gridCheck(gridSpace) {
        let i
        switch (true) {
            case gridSpace.includes("zero"):
                i = 0
                play(i)
                console.log("zero")
                break;

            case gridSpace.includes("one"):
                i = 1
                play(i)
                console.log("one")
                break;

            case gridSpace.includes("two"):
                i = 2
                play(i)
                console.log("two")
                break;

            case gridSpace.includes("three"):
                i = 3
                play(i)
                console.log("three")
                break;

            case gridSpace.includes("four"):
                i = 4
                play(i)
               console.log("four")
               break;

            case gridSpace.includes("five"):
                i = 5
                play(i)
                console.log("five")
                break;

            case gridSpace.includes("six"):
                i = 6
                play(i)
                console.log("six")
                break;

            case gridSpace.includes("seven"):
                i = 7
                play(i)
                console.log("seven")
                break;

            case gridSpace.includes("eight"):
                i = 8
                play(i)
                console.log("eight")
                break;
        }


    }

    function render(btn) {
        const img = document.createElement("img")
        btn.append(img)
        if(_currentTurn.sign == "O") {
            img.src = "ellipse-outline.svg"

        } else if (_currentTurn.sign == "X"){
            img.src= "close-outline.svg"
        }
    }


// Starts game and randomly selects starting player

    function gameStart() {
        gameStarted()
        setBtn(btn)
        const result = Math.floor(Math.random() *10 )
        playerTurn(result)
    }
    
    function playerTurn(result) {
        if(result % 2 == 0) {
            setTurn(playerOne)
            
        } else { 

        setTurn(playerTwo)
        }
    } 

// checks if spots already taken before applying
    function play(i) {
        if(gameBoard[i] != ""
        && _currentTurn.sign) {
            console.log("This spot is taken")
        } else {
            count++
            addSign(_currentTurn, i)
        }
    }

    function addSign(_currentTurn,i) {
        console.log("addsign")
        gameBoard[i] = _currentTurn.sign
        _currentTurn.moves.push(i)
        console.log(_currentTurn.moves)
        winCheck(_currentTurn)
        changeTurn(_currentTurn)

    }

    const winCheck = (arr) => {
        const playMoves = arr.moves.sort()
        console.log("wincheck")
        const winMoves = [[0,1,2], [0,3,6], [0,4,8],
        [1,4,7], [2,4,6], [2,5,8],[3,4,5],
        [6,7,8]]
    
        for(let i = 0; i < winMoves.length; i++) {

            if(winMoves[i].every(val => playMoves.includes(val))) {
                console.log("winner")
                setWinner()
                head.innerText = `${arr.name} has won the round (reset to start a new round)`
                boardBtn.forEach(btn => disableButton(btn))
                enableReset()
                resetButton(resetBtn)
                return
            } 
        }   
    }

    function setWinner() {
        winner = true
    }
    



    function changeTurn(_currentTurn) {
        if(winner) {
            return
        } else {
                    if(_currentTurn == playerOne) {
            setTurn(playerTwo)
        } else {
            setTurn(playerOne)
        }
        }

    }


    return {
        gameSetup,
        playerOne,
        playerTwo
    }

})()
game.gameSetup()