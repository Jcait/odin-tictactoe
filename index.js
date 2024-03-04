const pageSetup = (function() {


})

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

// DOM cache

    const btn = document.querySelectorAll("button")
    const img = document.querySelector("img")
    const rdyBtn = document.querySelector(".ready")
    const input = document.querySelector(".input")

    // buttons
    function setBtn(btn){
            btn.forEach(button => {
            button.addEventListener("click", () => {
                const gridSpace = button.parentNode.className
                console.log(gridSpace)
                
                gridCheck(gridSpace)
            // button.parentNode.innerText="boop"

                renderCheck(button)
            


            })
        })
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

            case gridSpace.includes("eight"):
                i = 8
                play(i)
                console.log("eight")
        }


    }

    function render(btn) {
        const img = document.createElement("img")
        console.log(_currentTurn)
        console.log(btn)
        btn.append(img)
        console.log(_currentTurn.sign)
        if(_currentTurn.sign == "O") {
            img.src = "testcat2.jpg"

        } else if (_currentTurn.sign == "X"){
            img.src= "testcat.jpg"
        }
    }


// Starts game and randomly selects starting player

    function gameStart() {
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
        winCheck(_currentTurn)
        changeTurn(_currentTurn)

    }

    const winCheck = (arr) => {
        console.log(`checking win ${arr.name}`)
        console.log(`checking win ${arr.moves}`)
        const winMoves = [[0,1,2], [0,3,6], [0,4,8],
        [1,4,7], [2,4,6], [2,5,8],
        [6,7,8]]
    
        for(let i = 0; i < winMoves.length; i++) {

            if(winMoves[i].every(val => arr.moves.includes(val))) {
                console.log("winner")
                declareWinner(arr)
                return
            } 
        }   
    }
    

    function declareWinner(player) {
        alert(`${player.name} has won the round`)
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
        playerTwo,
        gameStart,
        play,
        _currentTurn,
        btn,
    }

})()