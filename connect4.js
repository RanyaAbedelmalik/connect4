const td = document.querySelectorAll("td")

var currentPlayer = 'red';
var nextPlayer = 'black';
var temp = ""
var playerREDSelections = new Array();
var playerBLACKSelections = new Array();

let board = new Array(6);
for (let i = 0; i < 7; i++) board[i] = new Array();
console.log(board);
// let currentPlayer = 'black';

// let col = document.querySelectorAll('.col');
// for (let i = 0; i < col.length; i++)
// 	col[i].addEventListener('click', function (event) {
// 		for (let [i, cell] of Array.from(event.target.parentElement.querySelectorAll('.row')))
// 			if (cell.innerHTML === '') {
// 				console.log('found at ', cell);
// 				let checker = document.createElement('div');
// 				checker.classList.add('checker', currentPlayer);
// 				cell.appendChild(checker);
// 				currentPlayer = currentPlayer === 'black' ? 'red' : 'black';
// 				break;
// 			}
//     });

for (let i = 1; i <= 7; i++) {
    document.getElementById('col' + i).addEventListener("click", function (event) {
        // alert("John Cena");
        let cell = event.target.id;


        if (document.getElementById(cell).childElementCount < 6) {
            let checker = document.createElement("div")
            checker.classList.add("checker");
            checker.classList.add(currentPlayer);
            event.target.appendChild(checker)
            //alert(cell);
            board[i-1].push(currentPlayer === 'black' ? 0 : 1)
            console.log(board[i-1])

            let cellElement = document.getElementById(cell);
            if (currentPlayer === "red") {
                playerSelections = playerREDSelections;
                //cellElement.className = ("red");
                temp = nextPlayer;
                nextPlayer = currentPlayer;
                currentPlayer = temp;
                //alert(currentPlayer);
                //alert(nextPlayer);
            } else {
                playerSelections = playerBLACKSelections;
                //cellElement.stylebackgroundcolor= 'black';
                // cellElement.className = ("black");
                temp = nextPlayer;
                nextPlayer = currentPlayer;
                currentPlayer = temp;
                //alert(currentPlayer);
                //alert(nextPlayer);
            }
        }
    });
}

// let board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ]

// function checkHorizontal(currentPlayer) {
//     for (let x = 0; x < board.length; x++) {
//         let matches = 0;
//         for (let y = 0; y < board[x].length; y++) {
//             console.log("Matches: " + matches);
//             if (board[x][y] == currentPlayer) {
//                 matches++;
//             } else {
//                 matches = 0
//             }
//             if (matches = 4) {
//                 console.log("Win");
//                 return true
//             }
//         }
//     }
// }

// function checkHorizontal(currentPlayer) {
//     for (let x = 0; x < board.length; x++) {
//         let matches = 0;
//         for (let y = 0; y < board[x].length; y++) {
//             console.log("Matches: " + matches);
//             if (board[x][y] == currentPlayer) {
//                 matches++;
//             } else {
//                 matches = 0
//             }
//             if (matches = 4) {
//                 console.log("Win");
//                 return true
//             }
//         }
//     }
// }

// function checkVertical(currentPlayer) {
//     for (let y = 0; y < board.length; y++) {
//         let matches = 0;
//         for (let y = 0; y < board[x].length; y++) {
//             console.log("Matches: " + matches);
//             if (board[x][y] == currentPlayer) {
//                 matches++;
//             } else {
//                 matches = 0
//             }
//             if (matches = 4) {
//                 console.log("Win");
//                 return true
//             }
//         }
//     }
// }
// function getCellLocation(id) {
//     return [Math.floor(id / 7), (id % 7)]
// }

// const winningCombinations = [
//     [37,38,39,40],
//     [31,32,33,34],
//     [25,26,27,28],
//     [19,20,21,22],
//     [13,14,15,16],
//     [7,8,9,10],
//     [1,2,3,4],
//     [42,41,40,39],
//     [36,35,34,33],
//     [30,29,28,27],
//     [24,23,22,21],
//     [18,17,16,15],
//     [12,11,10,9],
//     [6,5,4,3],
//     [37,31,25,19],
//     [38,32,26,20],
//     [39,33,26,21],
//     [40,34,27,22],
//     [41,35,28,23],
//     [42,36,29,24],
//     [31,25,19,13],
//     [32,26,20,14],
//     [33,27,21,15],
//     [34,28,22,16],
//     [35,29,23,17],
//     [36,30,24,18],
//     [25,19,13,7],
//     [26,20,13,8],
//     [27,21,14,9],
//     [28,22,15,10],
//     [29,23,26,11],
//     [30,24,27,12],
//     [19,13,7,1],
//     [20,14,8,2],
//     [21,15,9,3],
//     [22,16,10,4],
//     [23,17,11,5],
//     [24,18,12,6],
//     [1,8,15,22],
//     [42,35,28,21],
//     [37,32,27,22],
//     [6,11,16,21],
//     [2,9,16,23],
//     [3,10,17,24],
//     [4,9,14,19],
//     [5,10,15,20],
//     [12,17,22,27],
//     [24,17,10,3],
//     [18,23,28,33],
//     [36,29,22,15],
//     [30,23,16,9],
//     [42,35,28,21],
//     [39,34,29,24],
//     [40,33,26,19],
//     [31,26,21,16],
//     [25,20,15,10],
//     [19,14,9,4],
//     [7,14,21,28],
//     [24,29,34,39],
//     [40,33,26,19],
//     [38,33,28,23],
//     [13,20,27,34],
//     [11,16,21,26],
//     [10,15,20,25],
//     [17,22,27,32],
//     [23,28,33,38],
//     [22,27,34,41],
//     [8,15,22,29],
//     [16,21,26,31],
//     [2,3,4,5],
//     [8,9,10,11],
//     [14,15,16,17],
//     [20,21,22,23],
//     [26,27,28,29],
//     [32,33,34,35],
//     [38,39,40,41],
//     [36,37,38,39]
//     ]

//     if(checkWinner(playerSelections)) {
//         alert("Player " + currentPlayer + " wins!")
//          resetGame();
//        }

//     function checkWinner(){  
//         for (let i = 0; i < winningCombinations.length; i++){
//              let matches =0;
//            for(let j = 0; j < winningCombinations[i].length; j++){
//                if(playerSelections.includes(winningCombinations[i][j])){
//                    matches++;
//                }

//         if(checkWinner(playerSelections)){
//                 alert("Player " + currentPlayer + " wins!")
//                  resetGame();
//                }

//            }
//            if(matches == 4){
//                return true;
//            }

//         }
//     }